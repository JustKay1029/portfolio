import React, { useState } from 'react';
import { SpotlightBorder } from './core/spotlight';
import { CURATED_PROJECTS } from '../services/github';
import { ExternalLink, Star, GitFork, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Deep Learning', 'GenAI & LLMs', 'Developer Tools & AI', 'Data Science & ML'];

  const filteredProjects = filter === 'All'
    ? CURATED_PROJECTS
    : CURATED_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[#3a31d8] font-bold mb-2">
          Real Works & Repositories
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Featured GitHub Projects
        </h3>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Authentic implementations spanning scratch-built neural networks, AI maintainer assistants, and data analysis.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-[#3a31d8] text-[#ebe9fc] shadow-md shadow-[#3a31d8]/30'
                : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with Motion Primitives SpotlightBorder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <SpotlightBorder key={project.name} className="h-full">
            <div className="p-6 flex flex-col justify-between h-full space-y-4">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#3a31d8]/10 text-[#3a31d8] border border-[#3a31d8]/20">
                    {project.category}
                  </span>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
                    title="View on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Desc */}
                <h4 className="text-lg font-bold text-[var(--text-main)] hover:text-[#3a31d8] transition-colors">
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>

              {/* Highlights & Tags */}
              <div className="space-y-3 pt-3 border-t border-[var(--border-subtle)]">
                {project.highlight && (
                  <div className="flex items-center gap-1.5 text-[11px] text-[#3a31d8] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project.highlight}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightBorder>
        ))}
      </div>
    </section>
  );
}
