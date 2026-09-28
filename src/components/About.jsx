import React, { useState } from 'react';
import { AnimatedBackground } from './core/animated-background';
import { Sparkles, Terminal, Code2, GraduationCap, Cpu, Layers } from 'lucide-react';

export function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Story & Engineering' },
    { id: 'stack', label: 'Real Tech Stack' },
    { id: 'focus', label: 'Current Capstones & Goals' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xs uppercase tracking-widest text-[#3a31d8] font-bold mb-2">
          About Me
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Engineering from Scratch
        </h3>
        <p className="mt-2 text-sm text-[var(--text-muted)] max-w-lg mx-auto">
          Passionate about building functional software, deep learning architectures, and learning by implementing.
        </p>
      </div>

      {/* Motion Primitives AnimatedBackground Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-2xl bg-[var(--bg-surface)] p-1.5 border border-[var(--border-subtle)] shadow-inner">
          <AnimatedBackground
            defaultValue="story"
            onValueChange={(val) => setActiveTab(val)}
            className="rounded-xl bg-[#3a31d8]/15 border border-[#3a31d8]/40"
            transition={{
              type: 'spring',
              bounce: 0.15,
              duration: 0.35,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                data-id={tab.id}
                type="button"
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#3a31d8] dark:text-[#ebe9fc]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xl backdrop-blur-md">
        {activeTab === 'story' && (
          <div className="space-y-4 text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
            <div className="flex items-center gap-2 text-[#3a31d8] font-semibold text-xs uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Student & Systems Builder</span>
            </div>
            <p>
              I am a first-year engineering student dedicated to understanding systems from the ground up. Rather than treating AI and deep learning as black boxes, my passion lies in writing implementations from first principles — like coding a generative transformer architecture directly from scratch based on NeetCode ML coursework.
            </p>
            <p className="text-[var(--text-muted)]">
              From analyzing real-world rental valuations using Pandas to building automated AI pull-request review tools for maintainers (<span className="text-[#3a31d8] font-mono">pr-pulse</span>), I focus on shipping real software and contributing to open projects.
            </p>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#3a31d8] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>AI, Machine Learning & Data</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'Transformers', 'Pandas', 'NumPy', 'Scikit-Learn', 'FastAPI', 'Jupyter'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#3a31d8] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Web, Tools & Environments</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Git / GitHub', 'Linux / Bash'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'focus' && (
          <div className="space-y-4 text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
            <div className="flex items-center gap-2 text-[#3a31d8] font-semibold text-xs uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Current Initiatives</span>
            </div>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a31d8] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[var(--text-main)]">Autonomous PR Reviewing:</strong> Developing <code className="text-[#3a31d8] font-mono">pr-pulse</code> to automate pull request diff analysis and maintainer summaries with LLMs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a31d8] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[var(--text-main)]">AI Tool Routing:</strong> Developing <code className="text-[#3a31d8] font-mono">CORUS</code> to classify task intent and dynamically route workloads to optimal specialized models.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a31d8] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[var(--text-main)]">Deep Learning from Scratch:</strong> Implementing neural architectures (<code className="text-[#3a31d8] font-mono">neetcode-gpt</code>) and signal processing models (<code className="text-[#3a31d8] font-mono">earguard</code>).
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
