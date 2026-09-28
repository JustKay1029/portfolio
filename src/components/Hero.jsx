import React, { useEffect, useState } from 'react';
import { ArrowDown, Code2, FolderGit2, Users, Star, Sparkles, ExternalLink } from 'lucide-react';
import { AeroShards } from './backgrounds/AeroShards';
import { AnimatedNumber } from './core/animated-number';
import { fetchLiveGitHubProfile, DEFAULT_PROFILE } from '../services/github';
import { GithubIcon } from './Icons';

export function Hero() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  useEffect(() => {
    fetchLiveGitHubProfile().then((data) => {
      if (data) setProfile(data);
    });
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Dynamic Aero Shards Canvas Backdrop */}
      <AeroShards className="opacity-90 dark:opacity-100" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
        {/* Avatar with Glow Ring */}
        <div className="inline-block relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#3a31d8] via-[#0600c2] to-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[var(--border-subtle)] object-cover shadow-2xl"
          />
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)]" title="Available for projects & collaboration" />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3a31d8]/30 bg-[#3a31d8]/10 text-xs font-medium text-[#3a31d8] dark:text-[#ebe9fc] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#3a31d8]" />
          <span>Building AI systems, ML pipelines & open source tools</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[var(--text-main)]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#3a31d8] via-[#5c54f5] to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Software engineer focusing on Machine Learning, transformer architectures, and generative AI systems. Building practical projects from scratch to production.
          </p>
        </div>

        {/* Live GitHub Stats Row with Motion Primitives AnimatedNumber */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto py-2">
          <div className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <FolderGit2 className="w-3.5 h-3.5 text-[#3a31d8]" />
              <span>Public Repos</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-main)]">
              <AnimatedNumber value={profile.public_repos || 29} />
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <Code2 className="w-3.5 h-3.5 text-[#0600c2]" />
              <span>Core Stack</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text-main)] mt-1">
              Python/TS
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>Network</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-main)]">
              <AnimatedNumber value={profile.followers || 2} />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#3a31d8] hover:bg-[#0600c2] text-[#ebe9fc] shadow-lg shadow-[#3a31d8]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Real Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/JustKay1029"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-main)] hover:border-[#3a31d8]/50 shadow-sm transition-all hover:scale-[1.02]"
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
