import React from 'react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="surface-card p-6 flex flex-col justify-between border border-[#e5e4dc] hover:border-[#22252c] transition-all duration-300 hover:shadow-xl bg-white group">
      <div>
        {/* Monogram Box & Identification */}
        <div className="flex items-center space-x-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#090a0c] text-white flex items-center justify-center font-mono font-bold text-base tracking-wider shadow-sm group-hover:bg-[#14161b] transition-colors border border-[#22252c]">
            <span className="text-[#d2fc1e]">{member.initials}</span>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#090a0c]">
              {member.name}
            </h4>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="text-xs font-semibold text-[#4b4e57] font-mono">
                {member.role}
              </span>
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-[#090a0c] font-semibold mb-3 px-2 py-0.5 rounded bg-[#f4f3ee] border border-[#e5e4dc] inline-block uppercase tracking-wider">
          {member.titleBadge}
        </div>

        <p className="text-xs text-[#4b4e57] leading-relaxed mb-5">
          {member.bioSnippet}
        </p>
      </div>

      <div className="pt-4 border-t border-[#f1f0e9]">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#717580] font-semibold block mb-2">
          Engineering & Architecture Focus
        </span>
        <div className="flex flex-wrap gap-1">
          {member.focus.map((item) => (
            <span
              key={item}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f3ee] text-[#4b4e57] border border-[#e5e4dc]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
