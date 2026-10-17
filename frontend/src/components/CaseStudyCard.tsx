import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudyItem } from '../types';

interface CaseStudyCardProps {
  study: CaseStudyItem;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <div className="surface-card overflow-hidden flex flex-col group border border-[#e5e4dc] hover:border-[#22252c] transition-all duration-300 hover:shadow-2xl bg-white">
      {/* Product Interface Preview Mockup Header */}
      <div className="bg-[#090a0c] border-b border-[#22252c] p-6 relative overflow-hidden text-white">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#22252c 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#181a20] text-[#cfcfc4] border border-[#22252c]">
              {study.category}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131902] text-[#d2fc1e] border border-[#d2fc1e]/30">
              {study.typeBadge}
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-[#181a20] text-[#cfcfc4] border border-[#22252c] flex items-center justify-center group-hover:bg-[#d2fc1e] group-hover:text-[#090a0c] group-hover:border-[#d2fc1e] transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Realistic Mini Application Header in Preview */}
        <div className="relative z-10 bg-[#121419] rounded-xl p-4 border border-[#22252c] space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#272a33]" />
              <span className="text-xs font-mono font-bold text-white">{study.title.toLowerCase()}.engine.spec</span>
            </div>
            <span className="text-[10px] font-mono text-[#d2fc1e] flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] mr-1.5 animate-pulse" />
              Measured Benchmark
            </span>
          </div>
          <p className="text-[11px] text-[#858994] font-sans line-clamp-1">
            {study.subtitle}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[#090a0c] mb-2 tracking-tight group-hover:text-black transition-colors">
            {study.title} Concept
          </h3>
          <p className="text-xs text-[#4b4e57] leading-relaxed mb-4">
            {study.summary}
          </p>

          {/* Benchmark Metrics Strip */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#f4f3ee] border border-[#e5e4dc] mb-4">
            {study.metrics.slice(0, 2).map((m, i) => (
              <div key={i}>
                <span className="text-[10px] text-[#717580] block font-mono uppercase tracking-wider">{m.label}</span>
                <span className="text-base font-bold text-[#090a0c] font-mono">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {study.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#4b4e57] border border-[#e5e4dc]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div className="pt-4 border-t border-[#f1f0e9] flex items-center justify-between">
          <span className="text-[11px] text-[#717580] font-mono">Concept Specification</span>
          <Link
            to={`/work/${study.slug}`}
            className="inline-flex items-center text-xs font-semibold font-mono uppercase tracking-wider text-[#090a0c] group-hover:text-black transition-colors"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#090a0c]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
