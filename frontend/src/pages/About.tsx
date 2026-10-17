import React from 'react';
import { teamData } from '../utils/data';
import { TeamCard } from '../components/TeamCard';
import { Mail, Phone, MapPin, Terminal, Code2, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
            <span>About WeCove.in</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            An independent software & digital product studio.
          </h1>
          <p className="text-base sm:text-lg text-[#4b4e57] leading-relaxed">
            WeCove.in was founded with a straightforward philosophy: build reliable, exceptionally designed
            software around real business requirements. We work directly with founders, engineering leads,
            and organizations that value craft, clarity, and maintainability.
          </p>
        </div>

        {/* Studio Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="surface-card p-8 border border-[#e5e4dc] bg-white rounded-2xl space-y-3 shadow-sm hover:border-[#090a0c] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#090a0c] border border-[#22252c] flex items-center justify-center text-[#d2fc1e]">
              <Code2 className="w-5 h-5 text-[#d2fc1e]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#090a0c] uppercase tracking-tight">Direct Engineering Craft</h3>
            <p className="text-xs sm:text-sm text-[#4b4e57] leading-relaxed">
              We do not operate as an agency middleman. When you collaborate with WeCove, you communicate directly
              with the forward deployed engineers and developers building the React interfaces, MongoDB schemas, and API pipelines.
            </p>
          </div>

          <div className="surface-card p-8 border border-[#e5e4dc] bg-white rounded-2xl space-y-3 shadow-sm hover:border-[#090a0c] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#090a0c] border border-[#22252c] flex items-center justify-center text-[#d2fc1e]">
              <Zap className="w-5 h-5 text-[#d2fc1e]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#090a0c] uppercase tracking-tight">Restraint & Usability First</h3>
            <p className="text-xs sm:text-sm text-[#4b4e57] leading-relaxed">
              We favor crisp typography, sensible information hierarchy, and sub-second performance over
              superficial animations or generic visual effects. Our work is built to be used daily by real people.
            </p>
          </div>
        </div>

        {/* Team Leadership Section */}
        <div className="mb-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#717580] uppercase tracking-wider">
              Studio Leadership & Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090a0c] mt-1 uppercase tracking-tight">
              The people behind WeCove.in.
            </h2>
            <p className="text-xs sm:text-sm text-[#4b4e57] mt-2">
              Authentic craft. Direct communication. Clear technical ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Studio Coordinates & Contact Reassurance */}
        <div className="surface-card p-8 sm:p-10 border border-zinc-200 bg-zinc-50/60 rounded-2xl">
          <h3 className="text-lg font-bold text-zinc-950 mb-6">
            Official Studio Coordinates & Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">Official Email</span>
              <p className="font-semibold text-zinc-900 text-sm">
                <a href="mailto:wecove.in@gmail.com" className="hover:text-blue-600 transition-colors font-mono">
                  wecove.in@gmail.com
                </a>
              </p>
              <p className="text-zinc-500 text-[11px]">Direct inbox to leadership</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">Direct Telephone</span>
              <p className="font-semibold text-zinc-900 text-sm">
                <a href="tel:8660534989" className="hover:text-blue-600 transition-colors font-mono">
                  +91 8660534989
                </a>
              </p>
              <p className="text-zinc-500 text-[11px]">Available Mon - Sat for technical discussions</p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block font-semibold">Studio Location</span>
              <p className="font-semibold text-zinc-900 text-sm font-mono">India</p>
              <p className="text-zinc-500 text-[11px]">WeCove.in Digital Product Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
