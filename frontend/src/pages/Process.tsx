import React from 'react';
import { processStages } from '../utils/data';
import {
  CheckCircle2,
  Terminal,
  Shield,
  Layers,
  ArrowUpRight,
  GitBranch,
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stageIcons = [
  <Search className="w-5 h-5 text-[#d2fc1e]" />,
  <GitBranch className="w-5 h-5 text-[#d2fc1e]" />,
  <PenTool className="w-5 h-5 text-[#d2fc1e]" />,
  <Code2 className="w-5 h-5 text-[#d2fc1e]" />,
  <Rocket className="w-5 h-5 text-[#d2fc1e]" />,
  <Activity className="w-5 h-5 text-[#d2fc1e]" />,
];

export const Process: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
            <span>Engineering Discipline</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            A clear path from idea to launch.
          </h1>
          <p className="text-base sm:text-lg text-[#4b4e57] leading-relaxed">
            Predictable software delivery requires an explicit lifecycle. We guide every product through
            six structured phases designed to surface constraints early, validate schemas, and ship resilient code.
          </p>
        </div>

        {/* Detailed Timeline List */}
        <div className="space-y-8 mb-24">
          {processStages.map((stage, index) => (
            <div
              key={stage.number}
              className="surface-card p-6 sm:p-10 border border-[#e5e4dc] hover:border-[#22252c] transition-all bg-white rounded-2xl shadow-sm hover:shadow-xl flex flex-col lg:flex-row lg:items-start justify-between gap-8 group"
            >
              {/* Left Column: Stage Index & Headline */}
              <div className="lg:max-w-md space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-[#090a0c] border border-[#22252c] flex items-center justify-center shadow-sm">
                    {stageIcons[index]}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#717580] font-bold block">
                      STAGE {stage.number}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#090a0c]">
                      {stage.name}
                    </h2>
                  </div>
                </div>

                <div className="text-sm font-semibold text-[#090a0c] pt-1">
                  {stage.headline}
                </div>

                <p className="text-xs sm:text-sm text-[#4b4e57] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Right Column: Key Deliverables & Checkpoints */}
              <div className="flex-1 lg:max-w-lg bg-[#faf9f5] rounded-xl p-6 border border-[#e5e4dc] space-y-4">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#717580]">
                  Key Deliverables & Milestones
                </h4>
                <ul className="space-y-2.5">
                  {stage.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-[#090a0c] leading-relaxed">
                      <span className="font-bold text-[#090a0c] mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles */}
        <div className="surface-card p-8 sm:p-12 border border-[#22252c] bg-[#090a0c] text-white rounded-2xl mb-16 shadow-2xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-mono font-semibold text-[#d2fc1e] uppercase tracking-wider">
              Working Standards
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core principles that guide our development cycles.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">01 Strict Type Integrity</h4>
              <p className="text-[#858994] leading-relaxed">
                We enforce strict TypeScript configurations without escape hatches. Schema validation is executed
                with Zod on both client forms and Express API handlers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">02 Deterministic Builds</h4>
              <p className="text-[#858994] leading-relaxed">
                Webpack asset pipeline configured for long-term caching, hash fingerprinting, and small production bundle footprints.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#14161b] border border-[#22252c] space-y-2">
              <h4 className="font-bold text-white text-sm font-mono">03 Rate Limiting & Defense</h4>
              <p className="text-[#858994] leading-relaxed">
                Sliding-window IP rate limiting, stealth honeypot spam protection, Helmet security headers, and structured MongoDB Atlas storage.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#090a0c] tracking-tight">
            Ready to initiate an engineering cycle with WeCove?
          </h3>
          <p className="text-xs sm:text-sm text-[#4b4e57]">
            Let's discuss what you want to build and how our 6-stage lifecycle fits your timeline.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-[#090a0c] hover:bg-[#181a20] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-lg space-x-2"
            >
              <span>Start Technical Discovery</span>
              <ArrowUpRight className="w-4 h-4 text-[#d2fc1e]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
