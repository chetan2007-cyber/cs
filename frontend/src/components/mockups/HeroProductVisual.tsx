import React, { useState, useRef } from 'react';
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Database,
  Layers,
  Lock,
  Search,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Cpu,
  Zap,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const HeroProductVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'schema' | 'components'>('telemetry');
  const [scrubIndex, setScrubIndex] = useState<number>(14);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const histogramData = [34, 48, 62, 54, 70, 86, 78, 94, 90, 96, 92, 85, 98, 93, 100, 91, 95, 93, 97, 99];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-6xl mx-auto pt-4 pb-14 select-none"
      style={{ perspective: 1400 }}
    >
      {/* Subtle Architectural Glow & Grid Floor */}
      <div className="absolute inset-0 -top-6 bg-gradient-to-b from-[#d2fc1e]/8 via-transparent to-transparent rounded-3xl filter blur-3xl pointer-events-none -z-10" />

      {/* Main Orchestrated Container with restrained 3D tilt */}
      <motion.div
        animate={{
          rotateY: shouldReduceMotion ? 0 : mousePos.x * 3.5,
          rotateX: shouldReduceMotion ? 0 : -mousePos.y * 3.5,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 180 }}
        className="relative"
      >
        {/* ========================================================================
            CENTRAL ANCHOR: The Software Engineering Studio Engine
            ======================================================================== */}
        <div className="bg-[#090a0c] text-white rounded-2xl border border-[#22252c] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* OS Chrome Header */}
          <div className="bg-[#0e1014] border-b border-[#22252c] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-[#262830]" />
              <span className="w-3 h-3 rounded-full bg-[#262830]" />
              <span className="w-3 h-3 rounded-full bg-[#262830]" />
              <div className="hidden sm:flex items-center space-x-2 pl-3 ml-2 border-l border-[#22252c] text-xs font-mono text-[#858994]">
                <span className="px-2 py-0.5 rounded bg-[#16181f] text-[#cfcfc4] border border-[#22252c]">
                  app.wecove.in
                </span>
                <span>/</span>
                <span>production-engine</span>
                <span>/</span>
                <span className="text-[#d2fc1e] font-semibold">{activeTab}</span>
              </div>
            </div>

            {/* Interactive Tab Selectors */}
            <div className="flex items-center space-x-1 bg-[#13151b] p-1 rounded-xl border border-[#22252c]">
              <button
                type="button"
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-[#22252c] text-[#d2fc1e] font-bold shadow-sm'
                    : 'text-[#858994] hover:text-white'
                }`}
              >
                01 Telemetry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('schema')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTab === 'schema'
                    ? 'bg-[#22252c] text-[#d2fc1e] font-bold shadow-sm'
                    : 'text-[#858994] hover:text-white'
                }`}
              >
                02 Relational Schema
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('components')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  activeTab === 'components'
                    ? 'bg-[#22252c] text-[#d2fc1e] font-bold shadow-sm'
                    : 'text-[#858994] hover:text-white'
                }`}
              >
                03 Design Tokens
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-xs font-mono">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#131902] text-[#d2fc1e] border border-[#d2fc1e]/30 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] mr-1.5 animate-pulse" />
                Cluster: 60 FPS / &lt;8ms
              </span>
            </div>
          </div>

          {/* Workspace Interior */}
          <div className="grid grid-cols-12 bg-[#090a0c] min-h-[410px]">
            {/* Left Nav Bar */}
            <div className="hidden lg:block lg:col-span-3 border-r border-[#22252c] p-4 bg-[#0d0f13]/80 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#858994] font-semibold px-2">
                Active Architecture
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-[#14161c] text-white border border-[#22252c]">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-3.5 h-3.5 text-[#d2fc1e]" />
                    <span className="font-semibold">Core Gateway</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d2fc1e] bg-[#1a2305] px-1.5 py-0.5 rounded border border-[#d2fc1e]/20">
                    Live
                  </span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[#858994] hover:text-white hover:bg-[#14161c] transition-colors">
                  <div className="flex items-center space-x-2">
                    <Database className="w-3.5 h-3.5 text-[#858994]" />
                    <span>MongoDB Atlas</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d2fc1e]">Connected</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[#858994] hover:text-white hover:bg-[#14161c] transition-colors">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-3.5 h-3.5 text-[#858994]" />
                    <span>Honeypot Shield</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d2fc1e]">99.9%</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[#858994] hover:text-white hover:bg-[#14161c] transition-colors">
                  <div className="flex items-center space-x-2">
                    <Layers className="w-3.5 h-3.5 text-[#858994]" />
                    <span>Railway Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#cfcfc4]">Synced</span>
                </div>
              </div>

              {/* Resource Utilization Badge */}
              <div className="pt-4 border-t border-[#22252c] px-2 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#858994]">
                  <span>Buffer Memory</span>
                  <span className="font-mono text-[#cfcfc4]">48.2 KB</span>
                </div>
                <div className="w-full bg-[#16181f] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#d2fc1e] h-full rounded-full w-[94%]" />
                </div>
                <div className="text-[10px] text-[#858994] font-mono">
                  Zero memory leak threshold
                </div>
              </div>
            </div>

            {/* Central Stage View */}
            <div className="col-span-12 lg:col-span-9 p-5 sm:p-7 space-y-5">
              {activeTab === 'telemetry' && (
                <div className="space-y-4">
                  {/* Top Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-[#111318] border border-[#22252c]">
                      <span className="text-[10px] font-mono uppercase text-[#858994] block">Sustained Events</span>
                      <span className="text-xl font-bold font-mono text-white">48,200/s</span>
                      <span className="text-[10px] text-[#d2fc1e] flex items-center mt-0.5">
                        <TrendingUp className="w-2.5 h-2.5 mr-1" />
                        Optimal throughput
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#111318] border border-[#22252c]">
                      <span className="text-[10px] font-mono uppercase text-[#858994] block">API Latency p95</span>
                      <span className="text-xl font-bold font-mono text-white">11.8 ms</span>
                      <span className="text-[10px] text-[#d2fc1e] flex items-center mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                        Sub-16ms target
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#111318] border border-[#22252c]">
                      <span className="text-[10px] font-mono uppercase text-[#858994] block">Relational Queries</span>
                      <span className="text-xl font-bold font-mono text-white">0.8 ms</span>
                      <span className="text-[10px] text-[#858994] font-mono mt-0.5 block">BTREE index hit</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#111318] border border-[#22252c]">
                      <span className="text-[10px] font-mono uppercase text-[#858994] block">Spam Bot Filter</span>
                      <span className="text-xl font-bold font-mono text-white">99.9%</span>
                      <span className="text-[10px] text-[#d2fc1e] font-mono mt-0.5 block">0 false positives</span>
                    </div>
                  </div>

                  {/* Telemetry Stream Graph with interactive scrub */}
                  <div className="p-4 rounded-xl bg-[#111318] border border-[#22252c] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-white">Throughput & Frame Continuity</span>
                        <span className="text-[10px] font-mono text-[#d2fc1e] bg-[#1a2305] px-2 py-0.5 rounded border border-[#d2fc1e]/20">
                          60 FPS STABLE
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#858994]">
                        Point {scrubIndex + 1}/20: {histogramData[scrubIndex] * 480} ops/sec
                      </span>
                    </div>

                    {/* Interactive Wave Bars */}
                    <div className="h-20 flex items-end space-x-1 pt-2">
                      {histogramData.map((h, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onMouseEnter={() => setScrubIndex(idx)}
                          className={`flex-1 rounded-t transition-all group relative cursor-pointer ${
                            scrubIndex === idx ? 'bg-[#d2fc1e]' : 'bg-[#1e2129] hover:bg-[#2c313d]'
                          }`}
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className={`w-full rounded-t transition-all ${
                              scrubIndex === idx ? 'bg-[#ffffff]' : 'bg-[#d2fc1e]'
                            }`}
                            style={{ height: `${Math.max(6, h * 0.4)}%` }}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Stream Table */}
                    <div className="overflow-x-auto pt-2 border-t border-[#22252c]">
                      <table className="w-full text-left font-mono text-[11px] text-[#cfcfc4]">
                        <thead>
                          <tr className="text-[#858994] text-[10px] uppercase">
                            <th className="pb-1.5 font-medium">Endpoint</th>
                            <th className="pb-1.5 font-medium">Controller</th>
                            <th className="pb-1.5 font-medium">Validation</th>
                            <th className="pb-1.5 text-right font-medium">Latency</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1e26]">
                          <tr>
                            <td className="py-2 text-white">POST /api/v1/inquiries</td>
                            <td className="py-2 text-[#858994]">inquiry.controller.ts</td>
                            <td className="py-2 text-[#d2fc1e]">Zod Schema Validated</td>
                            <td className="py-2 text-right text-[#cfcfc4]">12ms</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-white">GET /api/v1/health</td>
                            <td className="py-2 text-[#858994]">health.routes.ts</td>
                            <td className="py-2 text-[#d2fc1e]">200 OK (DB Ping)</td>
                            <td className="py-2 text-right text-[#cfcfc4]">2ms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'schema' && (
                <div className="p-4 rounded-xl bg-[#111318] border border-[#22252c] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#858994] border-b border-[#22252c] pb-2 text-[11px]">
                    <span className="text-white font-semibold">backend/src/models/Inquiry.ts</span>
                    <span className="text-[#d2fc1e]">MongoDB Atlas Document Storage</span>
                  </div>
                  <pre className="text-[11px] text-[#cfcfc4] leading-relaxed overflow-x-auto py-2">
{`interface InquiryDocument {
  _id?: ObjectId;
  name: string;
  email: string;        // Indexed for sub-second retrieval
  company?: string;
  phone?: string;
  projectType: string;
  budgetRange?: string;
  description: string;
  ipAddress?: string;
  createdAt: Date;      // Compound indexed: { email: 1, createdAt: -1 }
}`}
                  </pre>
                  <div className="p-2.5 rounded bg-[#16181f] border border-[#22252c] text-[11px] text-[#858994] flex items-center justify-between">
                    <span>Index status: Compound indexed on [email, createdAt]</span>
                    <span className="text-[#d2fc1e]">Atlas Cluster Verified</span>
                  </div>
                </div>
              )}

              {activeTab === 'components' && (
                <div className="p-4 rounded-xl bg-[#111318] border border-[#22252c] space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#858994] border-b border-[#22252c] pb-2 font-mono">
                    <span className="text-white font-semibold">Design System Specimen</span>
                    <span className="text-[#d2fc1e]">Orbit Token Engine</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#16181f] border border-[#22252c] space-y-2">
                      <span className="text-[10px] font-mono text-[#858994] block uppercase">Primary Accent</span>
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-md bg-[#d2fc1e] shadow-sm" />
                        <span className="font-mono text-white text-xs font-bold">#D2FC1E</span>
                      </div>
                      <span className="text-[10px] text-[#858994] font-mono">Contrast: WCAG 2.1 AAA</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#16181f] border border-[#22252c] space-y-2">
                      <span className="text-[10px] font-mono text-[#858994] block uppercase">Type Stack</span>
                      <div className="font-mono text-white text-xs font-bold">Geist + Inter</div>
                      <span className="text-[10px] text-[#858994] font-mono">Tight metrics: -0.035em</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#16181f] border border-[#22252c] space-y-2">
                      <span className="text-[10px] font-mono text-[#858994] block uppercase">Surface Contrast</span>
                      <div className="font-mono text-white text-xs font-bold">Warm Bone / Pitch Ink</div>
                      <span className="text-[10px] text-[#858994] font-mono">Hairline 1px borders</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================
            OVERLAPPING COMPOSITIONAL ELEMENT 1: API / Code Panel (Top-Left)
            ======================================================================== */}
        <motion.div
          animate={{
            x: shouldReduceMotion ? 0 : mousePos.x * 12,
            y: shouldReduceMotion ? 0 : mousePos.y * 12,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="hidden lg:flex absolute -top-8 -left-8 w-72 bg-[#090a0c] text-white rounded-xl p-4 border border-[#22252c] shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-2.5 z-20 backdrop-blur-md font-mono text-[11px]"
        >
          <div className="flex items-center justify-between text-[10px] text-[#858994] border-b border-[#22252c] pb-2">
            <div className="flex items-center space-x-1.5">
              <Terminal className="w-3 h-3 text-[#d2fc1e]" />
              <span className="text-white font-semibold">inquiry.validator.ts</span>
            </div>
            <span className="text-[#d2fc1e] text-[9px] px-1.5 py-0.5 rounded bg-[#131902] border border-[#d2fc1e]/20">
              Strict Zod
            </span>
          </div>
          <div className="text-[#858994] space-y-1 leading-snug">
            <p className="text-[#cfcfc4]">
              <span className="text-[#d2fc1e]">const</span> payload = schema.parse(req.body);
            </p>
            <p className="text-[#858994]">await inquiries.insertOne(payload);</p>
            <p className="text-[10px] text-[#d2fc1e]/80">// 100% deterministic type safety</p>
          </div>
        </motion.div>

        {/* ========================================================================
            OVERLAPPING COMPOSITIONAL ELEMENT 2: Analytics Sparkline Card (Top-Right)
            ======================================================================== */}
        <motion.div
          animate={{
            x: shouldReduceMotion ? 0 : mousePos.x * -10,
            y: shouldReduceMotion ? 0 : mousePos.y * -10,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="hidden md:flex absolute -top-6 -right-6 w-64 bg-[#090a0c] text-white rounded-xl p-3.5 border border-[#22252c] shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-2 z-20 backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-[#22252c] pb-1.5 text-xs">
            <div className="flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#d2fc1e]" />
              <span className="font-semibold text-white">Event Engine</span>
            </div>
            <span className="text-[10px] font-mono text-[#d2fc1e]">50,000 evt/s</span>
          </div>
          <div className="flex items-baseline justify-between text-[11px] font-mono">
            <span className="text-[#858994]">Hardware Acceleration:</span>
            <span className="text-[#cfcfc4]">Instanced WebGL</span>
          </div>
          <div className="w-full bg-[#16181f] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#d2fc1e] h-full rounded-full w-[88%]" />
          </div>
        </motion.div>

        {/* ========================================================================
            OVERLAPPING COMPOSITIONAL ELEMENT 3: Mobile Native Frame (Bottom-Right)
            ======================================================================== */}
        <motion.div
          animate={{
            x: shouldReduceMotion ? 0 : mousePos.x * -14,
            y: shouldReduceMotion ? 0 : mousePos.y * -14,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="hidden md:flex absolute -bottom-10 -right-6 lg:-right-10 w-64 bg-[#090a0c] text-white rounded-2xl p-4 border border-[#22252c] shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-3 z-20 backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-[#22252c] pb-2">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-3.5 h-3.5 text-[#d2fc1e]" />
              <span className="text-xs font-semibold text-white">Orbit Native Client</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#16181f] text-[#cfcfc4]">
              iOS Native
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-[#111318] border border-[#22252c] space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#858994]">Offline Sync Queue</span>
                <span className="font-mono text-[#d2fc1e]">Synced (0 wait)</span>
              </div>
              <div className="w-full bg-[#1e2129] h-1 rounded-full overflow-hidden">
                <div className="bg-[#d2fc1e] h-full rounded-full w-full" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#858994]">
              <span>Hardware Biometrics</span>
              <span className="text-white">Active (FaceID)</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================
            OVERLAPPING COMPOSITIONAL ELEMENT 4: Design Tokens Card (Bottom-Left)
            ======================================================================== */}
        <motion.div
          animate={{
            x: shouldReduceMotion ? 0 : mousePos.x * 10,
            y: shouldReduceMotion ? 0 : mousePos.y * 10,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="hidden lg:flex absolute -bottom-8 -left-6 w-60 bg-[#090a0c] text-white rounded-xl p-3.5 border border-[#22252c] shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-2.5 z-20 backdrop-blur-md font-mono text-xs"
        >
          <div className="flex items-center justify-between border-b border-[#22252c] pb-2 text-[10px] text-[#858994]">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d2fc1e]" />
              <span className="text-white font-semibold">tokens.theme.css</span>
            </div>
            <span className="text-[#cfcfc4]">Design System</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#858994]">Accent Token:</span>
            <span className="text-[#d2fc1e] font-bold">#D2FC1E</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#858994]">Hairline Border:</span>
            <span className="text-[#cfcfc4]">1px Solid</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
