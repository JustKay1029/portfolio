import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Layers, Terminal, Database, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30 border-y border-slate-900/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Technical Arsenal</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tools, Frameworks & Technologies
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Core stack leveraged to build high-performance data workflows and deep learning models.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white tracking-wide">
                  {group.category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
