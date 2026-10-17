import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  PenTool,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { servicesData } from '../utils/data';
import { ServiceItem } from '../types';

const categories = ['All Capabilities', 'Product Engineering', 'Systems & Cloud', 'Design & Strategy'] as const;

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Capabilities');

  const filteredServices =
    selectedCategory === 'All Capabilities'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
            <span>Capabilities Directory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            The capabilities to build and grow digital products.
          </h1>
          <p className="text-base sm:text-lg text-[#4b4e57] leading-relaxed">
            From modern responsive marketing sites and complex multi-tenant SaaS platforms to bespoke backend
            systems and mobile applications, we engineer software around concrete business requirements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e5e4dc] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#090a0c] text-white font-bold shadow-md'
                  : 'bg-white text-[#717580] hover:text-[#090a0c] border border-[#e5e4dc]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Structured Editorial Service List */}
        <div className="space-y-8 mb-24">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="surface-card p-6 sm:p-10 border border-[#e5e4dc] hover:border-[#22252c] transition-all bg-white rounded-2xl shadow-sm hover:shadow-xl flex flex-col lg:flex-row lg:items-start justify-between gap-8 group"
            >
              {/* Left Column: Number, Title, Overview */}
              <div className="lg:max-w-md space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-mono font-bold text-[#090a0c]">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#f4f3ee] text-[#4b4e57] border border-[#e5e4dc]">
                    {service.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a0c] tracking-tight">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4b4e57] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-[#090a0c] hover:bg-[#181a20] transition-colors space-x-2 shadow-sm"
                  >
                    <span>Start a {service.title} Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d2fc1e]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Deliverables & Tech Stack */}
              <div className="flex-1 lg:max-w-lg bg-[#faf9f5] rounded-xl p-6 border border-[#e5e4dc] space-y-4">
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#717580] mb-3">
                    Architectural Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[#090a0c] leading-relaxed">
                        <span className="font-bold text-[#090a0c] mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#e5e4dc]">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#717580] mb-2">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white text-[#090a0c] border border-[#e5e4dc]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards Section */}
        <div className="surface-card p-8 sm:p-12 border border-[#22252c] bg-[#090a0c] text-white rounded-2xl shadow-2xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-mono font-semibold text-[#d2fc1e] uppercase tracking-wider">
              Engineering Disciplines
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              How we guarantee code quality across every engagement.
            </h3>
            <p className="text-sm text-[#858994] leading-relaxed">
              We do not treat code as a one-time handoff. We build software so your internal team or future partners
              can easily understand, maintain, and extend the codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">01 Full-Stack Type Safety</h4>
              <p className="text-[#858994] leading-relaxed">
                Strict TypeScript configurations without loose escape hatches. All inputs and outputs are validated
                with Zod schemas on both frontend forms and backend Express handlers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">02 Relational Rigor</h4>
              <p className="text-[#858994] leading-relaxed">
                Normalized schemas, indexed foreign keys, migration history, and connection pooling to ensure zero
                data corruption and sub-millisecond query execution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">03 Asset Optimization</h4>
              <p className="text-[#858994] leading-relaxed">
                Targeted Webpack build configuration with code-splitting, asset hashing, and aggressive dead code
                elimination to maintain sub-second first contentful paint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
