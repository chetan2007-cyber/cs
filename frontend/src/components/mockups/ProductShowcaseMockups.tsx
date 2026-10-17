import React, { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  Database,
  Download,
  Filter,
  Globe,
  Layers,
  LineChart,
  Lock,
  MoreVertical,
  Plus,
  RefreshCw,
  Search,
  Server,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';

/* -------------------------------------------------------------
   1. SaaS Dashboard Mockup
   ------------------------------------------------------------- */
export const SaaSDashboardMockup: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
      {/* Chrome Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-2.5 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="font-mono text-zinc-600 pl-2">dashboard.saas-platform.com/metrics</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono text-[11px] border border-emerald-200">
            Live Production • Railway
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200/80">
            <span className="text-xs text-zinc-500 font-medium block">Annual Recurring Revenue</span>
            <div className="text-2xl font-bold text-zinc-900 mt-1 font-mono">$142,850</div>
            <span className="text-[11px] text-emerald-600 font-medium flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +18.4% vs last quarter
            </span>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200/80">
            <span className="text-xs text-zinc-500 font-medium block">Net Revenue Retention</span>
            <div className="text-2xl font-bold text-zinc-900 mt-1 font-mono">114.2%</div>
            <span className="text-[11px] text-emerald-600 font-medium flex items-center mt-1">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Healthy tier benchmark
            </span>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200/80">
            <span className="text-xs text-zinc-500 font-medium block">Active Workspaces</span>
            <div className="text-2xl font-bold text-zinc-900 mt-1 font-mono">2,418</div>
            <span className="text-[11px] text-zinc-500 font-medium flex items-center mt-1">
              Across 32 countries
            </span>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200/80">
            <span className="text-xs text-zinc-500 font-medium block">API Uptime SLA</span>
            <div className="text-2xl font-bold text-zinc-900 mt-1 font-mono">99.98%</div>
            <span className="text-[11px] text-blue-600 font-medium flex items-center mt-1">
              0 unplanned downtime
            </span>
          </div>
        </div>

        {/* Recent Workspaces Table */}
        <div className="border border-zinc-200 rounded-lg overflow-hidden">
          <div className="bg-zinc-50/70 px-4 py-2.5 border-b border-zinc-200 flex items-center justify-between text-xs">
            <span className="font-semibold text-zinc-800">Recent Customer Accounts</span>
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 rounded bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 text-[11px] flex items-center space-x-1">
                <Filter className="w-3 h-3" />
                <span>Filter</span>
              </button>
              <button className="px-2.5 py-1 rounded bg-zinc-900 text-white text-[11px] font-medium flex items-center space-x-1">
                <Plus className="w-3 h-3" />
                <span>Add Tenant</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 text-zinc-500 font-mono text-[11px] uppercase border-b border-zinc-200">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Workspace</th>
                  <th className="px-4 py-2.5 font-medium">Plan</th>
                  <th className="px-4 py-2.5 font-medium">Monthly Usage</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                  <th className="px-4 py-2.5 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-mono text-zinc-700">
                <tr>
                  <td className="px-4 py-3 font-sans font-medium text-zinc-900 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                      A
                    </span>
                    <span>Acme Corp Global</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-sans text-xs">Enterprise</span>
                  </td>
                  <td className="px-4 py-3 text-zinc-600">842k API calls</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px]">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-600 hover:underline text-xs font-sans">Manage</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-sans font-medium text-zinc-900 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
                      L
                    </span>
                    <span>Linear Logistics</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-sans text-xs">Growth</span>
                  </td>
                  <td className="px-4 py-3 text-zinc-600">319k API calls</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px]">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-600 hover:underline text-xs font-sans">Manage</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-sans font-medium text-zinc-900 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                      O
                    </span>
                    <span>OmniHealth Labs</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-sans text-xs">Enterprise</span>
                  </td>
                  <td className="px-4 py-3 text-zinc-600">1.2M API calls</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px]">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-600 hover:underline text-xs font-sans">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   2. Mobile Application Mockup (Kami Campus Client)
   ------------------------------------------------------------- */
export const MobileAppMockup: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-zinc-950 text-zinc-100 rounded-[2.5rem] p-3.5 border-4 border-zinc-800 shadow-2xl shadow-zinc-950/20">
      {/* Device Notch */}
      <div className="w-32 h-5 bg-zinc-900 rounded-b-xl mx-auto mb-3 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 mr-2" />
        <div className="w-10 h-1 bg-zinc-800 rounded-full" />
      </div>

      {/* Screen Body */}
      <div className="bg-zinc-900 rounded-[2rem] p-5 space-y-5 border border-zinc-800/80">
        {/* Top App Bar */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase">Kami Platform</span>
            <h4 className="text-sm font-bold text-white">Campus Print Queue</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            CS
          </div>
        </div>

        {/* Live Status Banner */}
        <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-zinc-200">Shop Queue: 4 min wait</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">Order #KM-882</span>
        </div>

        {/* Task Cards */}
        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Engineering Lab Manual</span>
              <span className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 text-[10px] font-mono">
                Printing
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Pages: 42 (Duplex, Spiral Bound)</span>
              <span>₹84.00 Paid</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Final Seminar Presentation File</span>
              <span className="px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-300 text-[10px] font-mono">
                Ready for Pickup
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span>Counter: Central Campus Shop A</span>
              <span>Pickup OTP: 7421</span>
            </div>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="pt-2">
          <button className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Upload New Document</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   3. Business Management Platform Mockup
   ------------------------------------------------------------- */
export const BusinessPlatformMockup: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
      {/* Platform Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 px-5 py-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase">Enterprise Operations</span>
          <h4 className="text-sm font-bold text-zinc-900">Project Delivery Pipeline</h4>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-zinc-200/60 text-zinc-700">
            Sprint 26 • Active
          </span>
        </div>
      </div>

      {/* Kanban / Workflow Columns */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1: Discovery & Architecture */}
        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/70 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
            <span>01 Architectural Discovery</span>
            <span className="font-mono text-zinc-400 text-[11px]">2 tasks</span>
          </div>

          <div className="p-3 rounded bg-white border border-zinc-200 shadow-subtle space-y-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
              MongoDB
            </span>
            <div className="text-xs font-medium text-zinc-900">Document Schema & Indexing</div>
            <div className="text-[11px] text-zinc-500">Target: High-speed queries on Atlas</div>
          </div>

          <div className="p-3 rounded bg-white border border-zinc-200 shadow-subtle space-y-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700">
              API Contract
            </span>
            <div className="text-xs font-medium text-zinc-900">Zod DTO Schema Specifications</div>
            <div className="text-[11px] text-zinc-500">Shared between web & mobile</div>
          </div>
        </div>

        {/* Column 2: Implementation & Tests */}
        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/70 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
            <span>02 Engineering Sprints</span>
            <span className="font-mono text-zinc-400 text-[11px]">2 tasks</span>
          </div>

          <div className="p-3 rounded bg-white border border-zinc-200 shadow-subtle space-y-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
              In Review
            </span>
            <div className="text-xs font-medium text-zinc-900">React & Tailwind Optimization</div>
            <div className="text-[11px] text-zinc-500">Target gzip under 50KB</div>
          </div>

          <div className="p-3 rounded bg-white border border-zinc-200 shadow-subtle space-y-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
              Active
            </span>
            <div className="text-xs font-medium text-zinc-900">Sliding Window Rate Limiter</div>
            <div className="text-[11px] text-zinc-500">Spam shield on /contact endpoint</div>
          </div>
        </div>

        {/* Column 3: Ready for Deployment */}
        <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/70 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
            <span>03 Production Release</span>
            <span className="font-mono text-zinc-400 text-[11px]">1 ready</span>
          </div>

          <div className="p-3 rounded bg-white border border-zinc-200 shadow-subtle space-y-1.5">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
              Verified
            </span>
            <div className="text-xs font-medium text-zinc-900">Railway Cloud Deployment</div>
            <div className="text-[11px] text-zinc-500">Automated build pipeline confirmed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   4. Analytics & Telemetry Interface Mockup
   ------------------------------------------------------------- */
export const AnalyticsInterfaceMockup: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-zinc-100 rounded-xl border border-zinc-800 overflow-hidden shadow-sm">
      {/* Analytics Terminal Bar */}
      <div className="bg-zinc-900/90 border-b border-zinc-800 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-white">Cluster Telemetry & Latency Monitor</span>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
          <span>p99: 14.2ms</span>
          <span>•</span>
          <span className="text-emerald-400">Throughput: 48,200 req/s</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Metric Strips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono uppercase block">Total Queries</span>
            <span className="text-lg font-bold font-mono text-white">12.8M</span>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono uppercase block">Error Rate</span>
            <span className="text-lg font-bold font-mono text-emerald-400">0.008%</span>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono uppercase block">Median Round-Trip</span>
            <span className="text-lg font-bold font-mono text-blue-400">6.1ms</span>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono uppercase block">Worker Threads</span>
            <span className="text-lg font-bold font-mono text-white">16 / 16</span>
          </div>
        </div>

        {/* Visual Latency Histogram */}
        <div className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Latency Distribution (ms)</span>
            <span className="font-mono text-[10px]">99.2% requests served under 25ms</span>
          </div>

          <div className="h-16 flex items-end space-x-1 pt-2">
            {[15, 28, 45, 78, 95, 90, 82, 60, 42, 28, 18, 12, 8, 5, 4, 2, 2, 1, 1, 1].map(
              (val, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-blue-500/25 hover:bg-blue-400/50 rounded-t transition-colors"
                  style={{ height: `${val}%` }}
                />
              )
            )}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-1 border-t border-zinc-800">
            <span>0ms</span>
            <span>10ms</span>
            <span>20ms</span>
            <span>30ms</span>
            <span>50ms+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
