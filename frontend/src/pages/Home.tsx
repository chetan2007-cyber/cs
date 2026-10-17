import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Layers,
  Shield,
  Smartphone,
  BarChart3,
  Server,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { HeroProductVisual } from '../components/mockups/HeroProductVisual';
import {
  SaaSDashboardMockup,
  MobileAppMockup,
  BusinessPlatformMockup,
  AnalyticsInterfaceMockup,
} from '../components/mockups/ProductShowcaseMockups';
import { ServiceCard } from '../components/ServiceCard';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { TeamCard } from '../components/TeamCard';
import { InquiryForm } from '../components/InquiryForm';
import { servicesData, caseStudiesData, teamData, processStages } from '../utils/data';

export const Home: React.FC = () => {
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<'saas' | 'mobile' | 'business' | 'analytics'>('saas');

  return (
    <div className="relative overflow-hidden pt-16 bg-[#faf9f5]">
      {/* ===================== SECTION B: HERO ===================== */}
      <section className="relative pt-12 pb-20 border-b border-[#e5e4dc] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            {/* Status / Category Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
              <span>Independent Software & Digital Product Studio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#090a0c] tracking-tight leading-[1.08] uppercase">
              Software built around your ambition.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4b4e57] max-w-2xl mx-auto leading-relaxed">
              WeCove.in designs and develops websites, applications, SaaS platforms, and custom software for
              businesses ready to turn ideas into useful digital products.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-[#090a0c] bg-[#d2fc1e] hover:bg-[#c3ec14] transition-colors shadow-sm flex items-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/work"
                className="px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white bg-[#090a0c] hover:bg-[#181a20] border border-[#22252c] transition-colors flex items-center space-x-2 shadow-sm"
              >
                <span>Explore Architectures</span>
                <ArrowRight className="w-4 h-4 text-[#d2fc1e]" />
              </Link>
            </div>
          </div>

          {/* Product-Led Centerpiece Visual */}
          <div className="mt-8">
            <HeroProductVisual />
          </div>
        </div>
      </section>

      {/* ===================== SECTION C: INTRODUCTION (STUDIO STATEMENT) ===================== */}
      <section id="introduction" className="py-20 sm:py-24 bg-white border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Studio Statement Typography & Checked Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#717580] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#090a0c]" />
                <span>01 — STUDIO STATEMENT</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#090a0c] tracking-tight leading-[1.08]">
                Good software starts with the right idea. Great software takes the right execution.
              </h2>

              <p className="text-sm sm:text-base text-[#4b4e57] leading-relaxed">
                We bring product thinking, thoughtful design, and practical engineering together to build digital experiences around real business needs.
              </p>

              {/* Three Checked Bullet Points matching user screenshot */}
              <div className="pt-2 space-y-3 text-xs sm:text-sm font-medium text-[#090a0c]">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded bg-[#090a0c] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#d2fc1e] stroke-[3]" />
                  </div>
                  <span>Direct pair engineering with founder Chetan Sharma P</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded bg-[#090a0c] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#d2fc1e] stroke-[3]" />
                  </div>
                  <span>Deterministic type-safe stack: React, Tailwind, Express, Node.js, Framer Motion, MongoDB, Railway, Liquid, Python</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded bg-[#090a0c] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#d2fc1e] stroke-[3]" />
                  </div>
                  <span>Zero throwaway code — engineered for long-term production maintainability</span>
                </div>
              </div>
            </div>

            {/* Right Column: Execution Pipeline Card matching user screenshot */}
            <div className="lg:col-span-6">
              <div className="surface-card p-6 sm:p-8 rounded-3xl border border-[#e5e4dc] bg-white space-y-6 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider">
                  <span className="text-[#090a0c] uppercase">EXECUTION PIPELINE</span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#e5e4dc] text-[#717580] text-[10px] font-mono">
                    Interactive Lifecycle
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* 01 IDEA */}
                  <div className="p-4 rounded-2xl bg-white border border-[#e5e4dc] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#717580] text-xs">01</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] uppercase font-semibold">
                        DISCOVERY PHASE
                      </span>
                    </div>
                    <h4 className="font-extrabold text-[#090a0c] text-sm uppercase tracking-tight">IDEA</h4>
                    <p className="text-[#4b4e57] text-xs leading-relaxed">
                      Isolate user pain points, operational constraints, and product hypothesis before writing code.
                    </p>
                  </div>

                  {/* 02 DESIGN */}
                  <div className="p-4 rounded-2xl bg-white border border-[#e5e4dc] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#717580] text-xs">02</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f3ee] text-[#717580] border border-[#e5e4dc] uppercase font-semibold">
                        SYSTEMS PHASE
                      </span>
                    </div>
                    <h4 className="font-extrabold text-[#090a0c] text-sm uppercase tracking-tight">DESIGN</h4>
                    <p className="text-[#4b4e57] text-xs leading-relaxed">
                      Token-driven typography, dense interface hierarchies, and responsive tactile wireframes.
                    </p>
                  </div>

                  {/* 03 ENGINEERING */}
                  <div className="p-4 rounded-2xl bg-white border border-[#e5e4dc] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#717580] text-xs">03</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f3ee] text-[#717580] border border-[#e5e4dc] uppercase font-semibold">
                        BUILD PHASE
                      </span>
                    </div>
                    <h4 className="font-extrabold text-[#090a0c] text-sm uppercase tracking-tight">ENGINEERING</h4>
                    <p className="text-[#4b4e57] text-xs leading-relaxed">
                      Strict TypeScript typing, relational schema indexing, input validation, and security rate limits.
                    </p>
                  </div>

                  {/* 04 PRODUCT */}
                  <div className="p-4 rounded-2xl bg-[#090a0c] text-white border border-[#22252c] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#858994] text-xs">04</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1a2305] text-[#d2fc1e] border border-[#d2fc1e]/30 uppercase font-bold">
                        LAUNCH TARGET
                      </span>
                    </div>
                    <h4 className="font-extrabold text-white text-sm uppercase tracking-tight">PRODUCT</h4>
                    <p className="text-[#cfcfc4] text-xs leading-relaxed">
                      Fast, resilient software that real organizations depend on and use daily without friction.
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: IDEA -> DESIGN -> ENGINEERING -> PRODUCT */}
                <div className="pt-3 flex items-center justify-between text-xs font-mono font-bold text-[#717580] border-t border-[#e5e4dc]">
                  <span className="hover:text-[#090a0c] cursor-pointer">IDEA</span>
                  <span>→</span>
                  <span className="hover:text-[#090a0c] cursor-pointer">DESIGN</span>
                  <span>→</span>
                  <span className="hover:text-[#090a0c] cursor-pointer">ENGINEERING</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded bg-[#d2fc1e] text-[#090a0c] font-black shadow-sm">
                    PRODUCT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION D: SERVICES ===================== */}
      <section className="py-24 bg-white border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
                Full-Lifecycle Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-2 tracking-tight uppercase">
                Everything your product needs to move forward.
              </h2>
              <p className="text-sm text-[#4b4e57] mt-2 leading-relaxed">
                We engineer scalable web platforms, internal business tools, and mobile solutions designed around concrete operational requirements.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#090a0c] hover:text-black transition-colors group bg-[#faf9f5] px-4 py-2 rounded-xl border border-[#e5e4dc]"
            >
              <span>Explore All 11 Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#090a0c] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Structured Service Grid (11 principal services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION E: PRODUCT SHOWCASE ===================== */}
      <section className="py-24 bg-[#faf9f5] border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
                Interactive Mockups
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#717580] border border-[#e5e4dc]">
                Product Prototypes
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-2 tracking-tight uppercase">
              Designed with intent. Built to work.
            </h2>
            <p className="text-sm text-[#4b4e57] mt-2 leading-relaxed">
              Explore concrete examples of user interfaces, data structures, and operational controls we design
              and build. Each prototype illustrates our focus on usability, content density, and clean typography.
            </p>
          </div>

          {/* Showcase Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#e5e4dc] pb-4">
            <button
              onClick={() => setActiveShowcaseTab('saas')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeShowcaseTab === 'saas'
                  ? 'bg-[#090a0c] text-[#d2fc1e] font-bold shadow-sm'
                  : 'bg-white text-[#717580] hover:text-[#090a0c] border border-[#e5e4dc]'
              }`}
            >
              01 SaaS Platform Dashboard
            </button>
            <button
              onClick={() => setActiveShowcaseTab('mobile')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeShowcaseTab === 'mobile'
                  ? 'bg-[#090a0c] text-[#d2fc1e] font-bold shadow-sm'
                  : 'bg-white text-[#717580] hover:text-[#090a0c] border border-[#e5e4dc]'
              }`}
            >
              02 Mobile Operations App (Kami Client)
            </button>
            <button
              onClick={() => setActiveShowcaseTab('business')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeShowcaseTab === 'business'
                  ? 'bg-[#090a0c] text-[#d2fc1e] font-bold shadow-sm'
                  : 'bg-white text-[#717580] hover:text-[#090a0c] border border-[#e5e4dc]'
              }`}
            >
              03 Business Management Platform
            </button>
            <button
              onClick={() => setActiveShowcaseTab('analytics')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeShowcaseTab === 'analytics'
                  ? 'bg-[#090a0c] text-[#d2fc1e] font-bold shadow-sm'
                  : 'bg-white text-[#717580] hover:text-[#090a0c] border border-[#e5e4dc]'
              }`}
            >
              04 Latency & Telemetry Interface
            </button>
          </div>

          {/* Active Mockup Display */}
          <div className="transition-all duration-200">
            {activeShowcaseTab === 'saas' && <SaaSDashboardMockup />}
            {activeShowcaseTab === 'mobile' && <MobileAppMockup />}
            {activeShowcaseTab === 'business' && <BusinessPlatformMockup />}
            {activeShowcaseTab === 'analytics' && <AnalyticsInterfaceMockup />}
          </div>
        </div>
      </section>

      {/* ===================== SECTION F: SELECTED WORK ===================== */}
      <section className="py-24 bg-white border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
                Featured Work & Prototypes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-2 tracking-tight uppercase">
                A closer look at what we can build.
              </h2>
              <p className="text-sm text-[#4b4e57] mt-2">
                Detailed case studies highlighting real-world product engineering like Kami campus print platform,
                as well as high-throughput telemetry architectures.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#090a0c] hover:text-black transition-colors group bg-[#faf9f5] px-4 py-2 rounded-xl border border-[#e5e4dc]"
            >
              <span>View All Projects & Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#090a0c] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION G: DEVELOPMENT PROCESS ===================== */}
      <section className="py-24 bg-[#faf9f5] border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-2 tracking-tight uppercase">
              A clear path from idea to launch.
            </h2>
            <p className="text-sm text-[#4b4e57] mt-2">
              A six-stage disciplined methodology designed to eliminate ambiguity, manage technical debt,
              and ship reliable software on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.number}
                className="surface-card p-6 border border-[#e5e4dc] hover:border-[#090a0c] transition-all bg-white rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold font-mono text-[#090a0c] mb-2">
                    {stage.number}
                  </div>
                  <h4 className="text-base font-extrabold text-[#090a0c] mb-1">{stage.name}</h4>
                  <div className="text-xs font-mono font-semibold text-[#717580] mb-3">{stage.headline}</div>
                  <p className="text-xs text-[#4b4e57] leading-relaxed mb-4">{stage.description}</p>
                </div>

                <div className="pt-3 border-t border-[#e5e4dc]">
                  <span className="text-[10px] font-mono uppercase text-[#717580] font-semibold block mb-1.5">
                    Milestone Deliverables
                  </span>
                  <ul className="space-y-1">
                    {stage.deliverables.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-center text-[11px] text-[#4b4e57]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c] mr-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/process"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#090a0c] hover:text-black transition-colors bg-white px-5 py-2.5 rounded-xl border border-[#e5e4dc] shadow-sm"
            >
              <span>Read Full Process Documentation & Milestone Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#090a0c]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SECTION H: TEAM ===================== */}
      <section className="py-24 bg-white border-b border-[#e5e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
              Studio Leadership & Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-2 tracking-tight uppercase">
              The people behind WeCove.in.
            </h2>
            <p className="text-sm text-[#4b4e57] mt-2">
              Direct technical communication with Chetan Sharma P and our core engineering team building your software.
              No account managers or junior outsourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION I: FINAL CTA ===================== */}
      <section className="py-20 bg-[#090a0c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#181a20] text-[#cfcfc4] text-xs font-mono border border-[#22252c]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e]" />
            <span>Direct Project Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Have a product in mind?
          </h2>
          <p className="text-sm sm:text-base text-[#858994] max-w-xl mx-auto leading-relaxed">
            Let's discuss what you want to build, the problem you're solving, and the right way to approach it.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-[#d2fc1e] hover:bg-[#c3ec14] text-[#090a0c] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-lg space-x-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== INQUIRY FORM EMBED SECTION ===================== */}
      <section className="py-20 bg-[#faf9f5] border-t border-[#e5e4dc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};
