import React from 'react';
import {
  Globe,
  Layout,
  Smartphone,
  Layers,
  Cpu,
  Terminal,
  PenTool,
  GitMerge,
  Database,
  ShoppingBag,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-5 h-5 text-[#d2fc1e]" />,
  layout: <Layout className="w-5 h-5 text-[#d2fc1e]" />,
  smartphone: <Smartphone className="w-5 h-5 text-[#d2fc1e]" />,
  layers: <Layers className="w-5 h-5 text-[#d2fc1e]" />,
  cpu: <Cpu className="w-5 h-5 text-[#d2fc1e]" />,
  terminal: <Terminal className="w-5 h-5 text-[#d2fc1e]" />,
  'pen-tool': <PenTool className="w-5 h-5 text-[#d2fc1e]" />,
  'git-merge': <GitMerge className="w-5 h-5 text-[#d2fc1e]" />,
  database: <Database className="w-5 h-5 text-[#d2fc1e]" />,
  'shopping-bag': <ShoppingBag className="w-5 h-5 text-[#d2fc1e]" />,
  zap: <Zap className="w-5 h-5 text-[#d2fc1e]" />,
  'shield-check': <ShieldCheck className="w-5 h-5 text-[#d2fc1e]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="surface-card p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#22252c] hover:shadow-xl bg-white">
      <div>
        {/* Header: Number and Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#090a0c] border border-[#22252c] flex items-center justify-center shadow-sm">
            {iconMap[service.icon] || <Globe className="w-5 h-5 text-[#d2fc1e]" />}
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-[#858994] font-semibold">{service.number}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#f4f3ee] text-[#4b4e57] border border-[#e5e4dc]">
              {service.category}
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-[#090a0c] mb-2 group-hover:text-black transition-colors flex items-center justify-between">
          <span>{service.title}</span>
          <ArrowUpRight className="w-4 h-4 text-[#858994] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>

        <p className="text-xs text-[#4b4e57] leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Deliverables snippet */}
        <ul className="space-y-1.5 mb-5 border-t border-[#f1f0e9] pt-3">
          {service.deliverables.slice(0, 2).map((item, i) => (
            <li key={i} className="flex items-start text-[11px] text-[#4b4e57]">
              <Check className="w-3.5 h-3.5 text-[#090a0c] mr-1.5 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f3ee] text-[#4b4e57] border border-[#e5e4dc]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center text-xs font-semibold font-mono uppercase tracking-wider text-[#090a0c] group-hover:text-black transition-colors"
        >
          <span>Start with this capability</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#090a0c]" />
        </Link>
      </div>
    </div>
  );
};
