import React, { useState } from 'react';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { caseStudiesData } from '../utils/data';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Info } from 'lucide-react';

const categories = ['All Disciplines', 'Campus Technology', 'Data Platform', 'Productivity Systems', 'Design Systems', 'Infrastructure'];

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');

  const filteredStudies =
    selectedCategory === 'All Disciplines'
      ? caseStudiesData
      : caseStudiesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 pt-24 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#e5e4dc] text-[#090a0c] text-xs font-mono shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2fc1e] border border-[#090a0c]" />
            <span>Architecture & Prototypes</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#090a0c] tracking-tight uppercase leading-[1.08]">
            A closer look at what we can build.
          </h1>
          <p className="text-base sm:text-lg text-[#4b4e57] leading-relaxed">
            We believe the best way to demonstrate engineering and design capability is through working systems.
            Explore our technical concepts showcasing high-throughput data processing, collaborative graph interfaces,
            token-driven design systems, and edge security.
          </p>

          {/* Transparent Concept Disclaimer */}
          <div className="p-4 rounded-xl bg-white border border-[#e5e4dc] flex items-start space-x-3 text-xs text-[#090a0c] mt-4 shadow-subtle">
            <Info className="w-4 h-4 text-[#717580] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold">Demonstration Concepts:</strong> The case studies below are technical prototypes engineered in-house to validate architectural patterns, latency benchmarks, and UI component behavior. They represent our design and software engineering standards.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* Bottom Project CTA */}
        <div className="surface-card p-8 sm:p-12 border border-[#22252c] bg-[#090a0c] text-white rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need a similar architecture built for your product?
            </h3>
            <p className="text-xs sm:text-sm text-[#858994] leading-relaxed">
              We can engineer a tailored system around your performance constraints, data models, and team roadmap.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-[#d2fc1e] hover:bg-[#c3ec14] text-[#090a0c] font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-lg space-x-2 self-start md:self-center"
          >
            <span>Start a Project Discussion</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
