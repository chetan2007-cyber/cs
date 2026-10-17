import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Zap,
  Info,
  Terminal,
} from 'lucide-react';
import { caseStudiesData } from '../utils/data';

interface CaseStudyDetailProps {
  overrideSlug?: 'nova' | 'flow' | 'orbit' | 'vertex';
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ overrideSlug }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const activeSlug = overrideSlug || paramSlug;

  const study = caseStudiesData.find((s) => s.slug === activeSlug);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const relatedStudies = caseStudiesData.filter((s) => s.slug !== activeSlug).slice(0, 2);

  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/work"
            className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#717580] hover:text-[#090a0c] transition-colors space-x-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL CASE STUDIES</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#e5e4dc] pb-12 mb-12 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-white text-[#090a0c] border border-[#e5e4dc]">
              {study.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#131902] text-[#d2fc1e] border border-[#d2fc1e]/30">
              {study.typeBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            {study.title} Concept
          </h1>

          <p className="text-lg sm:text-xl text-[#4b4e57] font-medium max-w-3xl leading-relaxed">
            {study.subtitle}
          </p>

          {/* Prototype disclaimer */}
          <div className="p-4 rounded-xl bg-white border border-[#e5e4dc] text-xs text-[#4b4e57] flex items-start space-x-3 shadow-subtle">
            <Info className="w-4 h-4 text-[#717580] flex-shrink-0 mt-0.5" />
            <span>
              This study outlines an internal technical prototype designed and engineered by WeCove.in. All metrics represent measured lab benchmarks.
            </span>
          </div>
        </div>

        {/* Measured Benchmarks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {study.metrics.map((m, i) => (
            <div key={i} className="surface-card p-5 bg-white border border-[#e5e4dc] text-center rounded-2xl shadow-subtle">
              <span className="text-[10px] font-mono text-[#717580] block mb-1 uppercase tracking-wider font-semibold">
                {m.label}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#090a0c] font-mono">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Realistic Tailored Product Interface Mockup Canvas */}
        <div className="mb-16 rounded-2xl border border-[#22252c] bg-[#090a0c] text-white overflow-hidden shadow-2xl">
          <div className="bg-[#0f1013] border-b border-[#22252c] px-4 py-3 flex items-center justify-between text-xs font-mono text-[#858994]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#272a33]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#272a33]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#272a33]" />
              <span className="pl-2 text-white font-bold">{study.slug}.engine.wecove.in</span>
            </div>
            <span className="text-[#d2fc1e] flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] animate-pulse" />
              <span>Active Prototype Spec</span>
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22252c] pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#858994] uppercase tracking-wider">
                  Validated Architecture
                </span>
                <h3 className="text-xl font-bold text-white">{study.title} — {study.subtitle}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#181a20] text-[#cfcfc4] border border-[#22252c]">
                  Lab Tested: Q4 2026
                </span>
              </div>
            </div>

            {study.slug === 'kami' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-5 rounded-xl bg-[#121419] border border-[#22252c] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#858994] text-[11px] border-b border-[#22252c] pb-3 gap-2">
                    <span className="text-white font-semibold">Campus Print Queue & Preflight Pipeline</span>
                    <span className="text-[#d2fc1e] font-mono">Live Demo Architecture</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-lg bg-[#181a20] border border-[#22252c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#858994] uppercase tracking-wider">Step 01</span>
                        <span className="text-[10px] text-[#d2fc1e] bg-[#1a2305] px-1.5 py-0.5 rounded border border-[#d2fc1e]/20">Client</span>
                      </div>
                      <div className="font-bold text-white text-sm">PDF Preflight Parser</div>
                      <p className="text-[11px] text-[#858994] font-sans">Instant page count, color density audit & duplex cost computation.</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#181a20] border border-[#22252c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#858994] uppercase tracking-wider">Step 02</span>
                        <span className="text-[10px] text-[#cfcfc4] bg-[#22252c] px-1.5 py-0.5 rounded">Gateway</span>
                      </div>
                      <div className="font-bold text-[#d2fc1e] text-sm">Micro-Billing + OTP</div>
                      <p className="text-[11px] text-[#858994] font-sans">Sub-second UPI payment settlement & 4-digit terminal claim token.</p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#181a20] border border-[#22252c] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#858994] uppercase tracking-wider">Step 03</span>
                        <span className="text-[10px] text-[#d2fc1e] bg-[#1a2305] px-1.5 py-0.5 rounded border border-[#d2fc1e]/20">Terminal</span>
                      </div>
                      <div className="font-bold text-white text-sm">Spool & Auto-Release</div>
                      <p className="text-[11px] text-[#858994] font-sans">High-speed duplex thermal/laser output with zero queue delay.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0d0e12] border border-[#22252c] space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#858994]">Active Campus Hub: <strong className="text-white font-sans">Library Terminal #02</strong></span>
                      <span className="text-[#d2fc1e] font-mono">Queue Status: 0m wait (Walk-In Bypass)</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      <div className="p-2 rounded bg-[#14161b] border border-[#22252c] text-center">
                        <span className="text-[10px] text-[#858994] block">Job #KM-842</span>
                        <span className="text-[#d2fc1e] font-bold">Printed (Ready)</span>
                      </div>
                      <div className="p-2 rounded bg-[#14161b] border border-[#22252c] text-center">
                        <span className="text-[10px] text-[#858994] block">Job #KM-843</span>
                        <span className="text-white font-bold">Printing Duplex</span>
                      </div>
                      <div className="p-2 rounded bg-[#14161b] border border-[#22252c] text-center">
                        <span className="text-[10px] text-[#858994] block">Job #KM-844</span>
                        <span className="text-[#858994] font-bold">Queued (1 min)</span>
                      </div>
                      <div className="p-2 rounded bg-[#14161b] border border-[#22252c] text-center">
                        <span className="text-[10px] text-[#858994] block">Avg Delivery</span>
                        <span className="text-[#d2fc1e] font-bold">38 Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#cfcfc4]">
                    <span className="text-[#858994] block text-[10px]">Queue Time Eradicated</span>
                    From 25m to 0m wait
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#cfcfc4]">
                    <span className="text-[#858994] block text-[10px]">Preflight Accuracy</span>
                    100% orientation check
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#d2fc1e]">
                    <span className="text-[#858994] block text-[10px]">Order Fulfillment</span>
                    &lt; 90s end-to-end
                  </div>
                </div>
              </div>
            )}

            {study.slug === 'nova' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#121419] border border-[#22252c] space-y-2">
                  <div className="flex justify-between text-xs font-mono text-[#858994]">
                    <span>Hardware-Accelerated Instanced Buffer</span>
                    <span className="text-[#d2fc1e]">50,000 pts/sec</span>
                  </div>
                  <div className="h-28 flex items-end space-x-1 pt-2">
                    {[40, 65, 82, 58, 90, 94, 88, 96, 92, 95, 89, 93, 98, 92, 96, 100].map((v, i) => (
                      <div key={i} className="flex-1 bg-[#1e2129] rounded-t" style={{ height: `${v}%` }}>
                        <div className="w-full bg-[#d2fc1e] rounded-t" style={{ height: '35%' }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#cfcfc4]">
                    <span className="text-[#858994] block text-[10px]">Zero GC Pauses</span>
                    ArrayBuffer recycling
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#cfcfc4]">
                    <span className="text-[#858994] block text-[10px]">Throughput</span>
                    50,000 pts/sec stream
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#d2fc1e]">
                    <span className="text-[#858994] block text-[10px]">Frame Latency</span>
                    &lt; 8ms sustained
                  </div>
                </div>
              </div>
            )}

            {study.slug === 'flow' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#121419] border border-[#22252c] space-y-3">
                  <div className="flex justify-between text-[#858994] text-[11px]">
                    <span>DAG Execution Graph</span>
                    <span className="text-[#d2fc1e]">Strict Zod Validated</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c]">
                      <span className="text-[10px] text-[#858994] block">Node 01</span>
                      <span className="font-bold text-white">Webhook Ingest</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c]">
                      <span className="text-[10px] text-[#858994] block">Node 02</span>
                      <span className="font-bold text-[#d2fc1e]">State Machine</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c]">
                      <span className="text-[10px] text-[#858994] block">Node 03</span>
                      <span className="font-bold text-white">PostgreSQL Sink</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#14161b] border border-[#22252c] text-[#cfcfc4] flex justify-between">
                  <span>Optimistic mutation state sync</span>
                  <span className="text-[#d2fc1e]">18ms latency</span>
                </div>
              </div>
            )}

            {study.slug === 'orbit' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#121419] border border-[#22252c] space-y-3">
                  <div className="flex justify-between text-[#858994] text-[11px]">
                    <span>Design System Tokens</span>
                    <span className="text-[#d2fc1e]">WCAG 2.1 AAA</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">Accent</span>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded bg-[#d2fc1e]" />
                        <span className="text-white font-bold">#D2FC1E</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">Typography</span>
                      <span className="text-white font-bold">Geist + Inter</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">CSS Footprint</span>
                      <span className="text-[#d2fc1e] font-bold">14.2 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {study.slug === 'vertex' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#121419] border border-[#22252c] space-y-3">
                  <div className="flex justify-between text-[#858994] text-[11px]">
                    <span>In-Memory Rate Limiter</span>
                    <span className="text-[#d2fc1e]">Sliding Window 10/min</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">Bot Rejection</span>
                      <span className="text-[#d2fc1e] font-bold text-sm">99.8%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">False Positives</span>
                      <span className="text-white font-bold text-sm">0.00%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181a20] border border-[#22252c] space-y-1">
                      <span className="text-[10px] text-[#858994] block">Overhead</span>
                      <span className="text-[#d2fc1e] font-bold text-sm">&lt; 1.2ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Sections (Overview, Problem, Approach, Product Design, Solution, Key Features, Intended Value) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">01</span>
                <span className="font-sans font-bold">System Overview</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.summary}
              </p>
            </div>

            {/* Problem / Challenge */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">02</span>
                <span className="font-sans font-bold">The Architectural Bottleneck</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">03</span>
                <span className="font-sans font-bold">Engineering Approach</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.approach}
              </p>
            </div>

            {/* Product Design */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">04</span>
                <span className="font-sans font-bold">Product & Interface Design</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.productDesign}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">05</span>
                <span className="font-sans font-bold">Implementation & Solution</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">06</span>
                <span className="font-sans font-bold">Key Technical Features</span>
              </h2>
              <div className="space-y-2.5">
                {study.keyFeatures.map((kf, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#e5e4dc] flex items-start space-x-3 shadow-subtle">
                    <CheckCircle2 className="w-4 h-4 text-[#090a0c] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#090a0c] leading-relaxed">{kf}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intended Value */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#090a0c] flex items-center space-x-2 font-mono">
                <span className="text-[#090a0c]">07</span>
                <span className="font-sans font-bold">Intended Operational Value</span>
              </h2>
              <p className="text-sm text-[#4b4e57] leading-relaxed">
                {study.intendedValue}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack */}
            <div className="surface-card p-6 border border-[#e5e4dc] bg-white rounded-2xl shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#090a0c]">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {study.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#faf9f5] text-[#090a0c] border border-[#e5e4dc]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Box */}
            <div className="surface-card p-6 border border-[#22252c] bg-[#090a0c] text-white rounded-2xl space-y-3 shadow-xl">
              <h3 className="text-base font-bold text-white font-mono">
                Explore a similar system
              </h3>
              <p className="text-xs text-[#858994] leading-relaxed">
                Ready to engineer high-throughput or complex software? Discuss your product requirements with our technical team.
              </p>
              <div className="pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(study.title + ' Architecture')}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#d2fc1e] hover:bg-[#c3ec14] text-[#090a0c] font-mono font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <span>Start a Project Discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-12 border-t border-[#e5e4dc] space-y-6">
          <h3 className="text-lg font-bold text-[#090a0c] font-mono uppercase tracking-wider">
            Explore Other Technical Concepts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedStudies.map((r, i) => (
              <Link
                key={r.id}
                to={`/work/${r.slug}`}
                className="surface-card p-6 bg-white border border-[#e5e4dc] hover:border-[#090a0c] transition-all rounded-2xl flex items-center justify-between group shadow-subtle"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#717580]">{r.category}</span>
                  <h4 className="text-base font-bold text-[#090a0c] group-hover:text-black mt-0.5">{r.title} Concept</h4>
                  <p className="text-xs text-[#4b4e57] line-clamp-1 mt-1">{r.subtitle}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#717580] group-hover:text-[#090a0c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
