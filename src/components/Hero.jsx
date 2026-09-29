import React, { useEffect, useState } from 'react';
import { ArrowDown, Code2, FolderGit2, Sparkles, ExternalLink } from 'lucide-react';
import { AeroShards } from './backgrounds/AeroShards';
import { AnimatedNumber } from './core/animated-number';
import { LiveActivity } from './LiveActivity';
import { fetchLiveGitHubProfile, DEFAULT_PROFILE } from '../services/github';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Hero() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  useEffect(() => {
    fetchLiveGitHubProfile().then((data) => {
      if (data) setProfile(data);
    });
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Dynamic 3D Orbital Crystal Engine Canvas */}
      <AeroShards className="opacity-80 dark:opacity-90" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Avatar with Sleek Subtle Ring */}
        <div className="inline-block relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700/60 dark:to-transparent blur-sm group-hover:scale-105 transition-all duration-500" />
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-zinc-300 dark:border-zinc-700/80 object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div
            className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)] shadow-sm"
            title="Available for projects & collaboration"
          />
        </div>

        {/* Live GitHub Commit Pulse Badge */}
        <div>
          <LiveActivity />
        </div>

        {/* Main Headline with 100% Solid Visible Typography in Both Themes */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-950 dark:text-white">
            Hi, I'm{' '}
            <span className="text-zinc-950 dark:text-white font-black underline decoration-zinc-300 dark:decoration-zinc-800 underline-offset-8">
              {profile.name}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Software engineer focused on Machine Learning architectures, transformer systems, and intelligent developer tooling.
          </p>
        </div>

        {/* Stats Row: Public Repos, Core Stack, LinkedIn Network */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-lg mx-auto py-2">
          {/* Public Repos */}
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all shadow-xs backdrop-blur-md group"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <FolderGit2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
              <span>Public Repos</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-main)]">
              <AnimatedNumber value={profile.public_repos || 29} />
            </div>
          </a>

          {/* Core Stack */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <Code2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
              <span>Core Stack</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text-main)] mt-1">
              Python / TS
            </div>
          </div>

          {/* LinkedIn Network */}
          <a
            href={profile.linkedin_url || "https://www.linkedin.com"}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all shadow-xs backdrop-blur-md group"
            title="View LinkedIn Profile"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <LinkedinIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-[var(--text-main)] transition-colors" />
              <span>LinkedIn</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-main)]">
              {profile.linkedin_network || "500+"}
            </div>
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Real Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-zinc-300 dark:border-zinc-800 bg-[var(--bg-surface)] text-[var(--text-main)] hover:border-zinc-500 dark:hover:border-zinc-600 shadow-xs transition-all hover:scale-[1.02]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
