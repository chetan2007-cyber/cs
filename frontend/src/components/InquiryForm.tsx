import React, { useState } from 'react';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { submitInquiry } from '../services/api';
import { ProjectType, BudgetRange } from '../types';

const projectTypes: ProjectType[] = [
  'Website Development',
  'Web Applications',
  'Mobile Applications',
  'SaaS Development',
  'AI Solutions',
  'Custom Software',
  'UI/UX and Product Design',
  'Automation and Integrations',
  'Backend and Cloud',
  'E-commerce',
  'MVP Development',
  'Maintenance and Scaling',
  'Other / Custom Scope',
];

const budgetRanges: BudgetRange[] = [
  '$3,000 - $7,500',
  '$7,500 - $15,000',
  '$15,000 - $30,000',
  '$30,000+',
  'Custom / Retainer Scope',
];

const clientInquirySchema = z.object({
  name: z.string().trim().min(2, 'Full name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid business email address'),
  company: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select an approximate budget range'),
  message: z.string().trim().min(10, 'Please describe your project requirements in at least 10 characters'),
});

interface InquiryFormProps {
  initialProjectType?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: initialProjectType || projectTypes[0],
    budget: budgetRanges[1],
    message: '',
    website_trap: '', // Stealth honeypot field
  });

  const [mountTime] = useState<number>(Date.now());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    inquiryId?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    // Client-side Zod validation
    const validationResult = clientInquirySchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const payload = {
      ...formData,
      _timestamp: mountTime,
    };

    const response = await submitInquiry(payload);
    setIsSubmitting(false);

    if (response.success) {
      setSubmitResult({
        success: true,
        message:
          response.message ||
          'Thank you. Your project inquiry has been received. A senior engineer will review your requirements and respond within 24 hours.',
        inquiryId: response.data?.id,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: projectTypes[0],
        budget: budgetRanges[1],
        message: '',
        website_trap: '',
      });
    } else {
      setSubmitResult({
        success: false,
        message: response.error || 'Failed to submit inquiry. Please try again or email us directly at wecove.in@gmail.com.',
      });
      if (response.details) {
        const backendFieldErrors: Record<string, string> = {};
        response.details.forEach((d) => {
          backendFieldErrors[d.field] = d.message;
        });
        setErrors(backendFieldErrors);
      }
    }
  };

  return (
    <div className="surface-card p-6 sm:p-10 border border-[#e5e4dc] bg-white shadow-xl rounded-2xl">
      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f4f3ee] border border-[#e5e4dc] text-[#090a0c] text-xs font-mono mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
          <span>Direct Studio Inquiry</span>
        </div>
        <h3 className="text-2xl font-bold text-[#090a0c] tracking-tight mb-2">
          Start a Project Discussion
        </h3>
        <p className="text-sm text-[#4b4e57] leading-relaxed">
          Share your product requirements, problem statement, or target roadmap. We treat all submissions confidentially under mutual NDA upon request.
        </p>
      </div>

      {submitResult && (
        <div
          className={`p-4 rounded-xl mb-6 border flex items-start space-x-3 text-sm ${
            submitResult.success
              ? 'bg-[#131902] border-[#d2fc1e]/40 text-[#cfcfc4]'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          {submitResult.success ? (
            <CheckCircle2 className="w-5 h-5 text-[#d2fc1e] flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <p className="font-semibold text-white">{submitResult.success ? 'Inquiry Transmitted to MongoDB & Founder' : 'Submission Notice'}</p>
            <p className="text-xs leading-relaxed">{submitResult.message}</p>
            {submitResult.inquiryId && (
              <p className="text-[11px] font-mono text-[#d2fc1e]">
                Inquiry Ref ID: {submitResult.inquiryId}
              </p>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Stealth Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_trap">Leave empty</label>
          <input
            type="text"
            id="website_trap"
            name="website_trap"
            value={formData.website_trap}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Your Full Name <span className="text-[#090a0c] font-bold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Verma"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#090a0c] bg-white placeholder-[#9da1ac] focus:outline-none transition-all ${
                errors.name
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-[#e5e4dc] focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c]'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Work Email Address <span className="text-[#090a0c] font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@company.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#090a0c] bg-white placeholder-[#9da1ac] focus:outline-none transition-all ${
                errors.email
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-[#e5e4dc] focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c]'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Company and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Company / Organization <span className="text-[#717580] text-[10px] font-normal font-sans">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              className="w-full px-4 py-3 rounded-xl border border-[#e5e4dc] text-sm text-[#090a0c] bg-white placeholder-[#9da1ac] focus:outline-none focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c] transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Phone Number <span className="text-[#717580] text-[10px] font-normal font-sans">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-[#e5e4dc] text-sm text-[#090a0c] bg-white placeholder-[#9da1ac] focus:outline-none focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c] transition-all"
            />
          </div>
        </div>

        {/* Row 3: Project Type and Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectType" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Primary Capability Needed <span className="text-[#090a0c] font-bold">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#e5e4dc] text-sm text-[#090a0c] bg-white focus:outline-none focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c] transition-all"
            >
              {projectTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
              Target Budget Range <span className="text-[#090a0c] font-bold">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#e5e4dc] text-sm text-[#090a0c] bg-white focus:outline-none focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c] transition-all"
            >
              {budgetRanges.map((br) => (
                <option key={br} value={br}>
                  {br}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#090a0c] mb-1.5 uppercase tracking-wider font-mono">
            Project Overview & Objectives <span className="text-[#090a0c] font-bold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the software you want to build, current challenges, key features, or expected launch timelines..."
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#090a0c] bg-white placeholder-[#9da1ac] focus:outline-none transition-all leading-relaxed ${
              errors.message
                ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-[#e5e4dc] focus:border-[#090a0c] focus:ring-1 focus:ring-[#090a0c]'
            }`}
          />
          {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#717580] font-mono">
            Rate limited & validated via Express + MongoDB backend.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center justify-center px-7 py-3 rounded-xl bg-[#090a0c] hover:bg-[#181a20] text-white font-bold text-xs uppercase tracking-wider font-mono transition-all disabled:opacity-50 space-x-2 border border-[#22252c] shadow-lg hover:border-[#d2fc1e]/50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#d2fc1e]" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Transmit Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-[#d2fc1e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
