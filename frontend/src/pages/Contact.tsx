import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { InquiryForm } from '../components/InquiryForm';
import { Mail, Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('projectType') || undefined;

  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
            <span>Project Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            Start a project discussion.
          </h1>
          <p className="text-base sm:text-lg text-[#4b4e57] leading-relaxed">
            Whether you are planning a new digital product from scratch, building a SaaS platform, or seeking a
            reliable long-term engineering partner, let's discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <InquiryForm initialProjectType={initialService} />
          </div>

          {/* Right Column: Contact Details & Direct Reassurance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="surface-card p-6 sm:p-7 border border-[#e5e4dc] bg-white rounded-2xl space-y-5 shadow-sm">
              <h3 className="text-base font-extrabold text-[#090a0c] uppercase tracking-tight">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#090a0c] border border-[#22252c] flex items-center justify-center text-[#d2fc1e] flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#d2fc1e]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#717580] uppercase block font-semibold">
                      Email Address
                    </span>
                    <a
                      href="mailto:wecove.in@gmail.com"
                      className="text-sm font-semibold text-[#090a0c] hover:underline transition-colors font-mono"
                    >
                      wecove.in@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#090a0c] border border-[#22252c] flex items-center justify-center text-[#d2fc1e] flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#d2fc1e]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#717580] uppercase block font-semibold">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:8660534989"
                      className="text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors font-mono"
                    >
                      +91 8660534989
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">
                      Response Window
                    </span>
                    <p className="text-sm font-semibold text-zinc-900">Within 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">
                      Studio Base
                    </span>
                    <p className="text-sm font-semibold text-zinc-900 font-mono">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Reassurance Card */}
            <div className="surface-card p-6 border border-zinc-200 bg-zinc-50/70 space-y-2.5">
              <div className="flex items-center space-x-2 text-zinc-900 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Confidentiality & Mutual NDA</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All details and concepts shared via this inquiry form are protected under strict confidentiality.
                We execute formal Non-Disclosure Agreements (NDAs) prior to in-depth technical scoping upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
