import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Sparkles, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Machine Learning', 'GenAI & LLMs', 'Computer Vision', 'NLP'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Portfolio Showcase</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Projects & Research
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Production-ready AI systems, deep learning architectures, and data engineering projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 group"
            >
              <div>
                {/* Header: Category & Links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-800/50 text-cyan-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Metric Banner */}
                {project.metrics && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-emerald-400 font-mono mb-5">
                    <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 text-slate-400"
                  >
                    #{tag}
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
