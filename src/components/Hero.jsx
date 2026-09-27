import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-inner shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for AI / ML Roles & Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">
                {personalInfo.role}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-sm sm:text-base font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/40 bg-slate-950/40 text-slate-400 hover:text-cyan-300 text-sm sm:text-base transition-colors"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code/Terminal Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-slate-800/90 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>model_pipeline.py</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto leading-relaxed">
                <div className="text-slate-500"># Initializing Neural Architecture</div>
                <div>
                  <span className="text-indigo-400">import</span> torch
                </div>
                <div>
                  <span className="text-indigo-400">import</span> torch.nn{' '}
                  <span className="text-indigo-400">as</span> nn
                </div>
                <div>
                  <span className="text-indigo-400">from</span> transformers{' '}
                  <span className="text-indigo-400">import</span> AutoModel
                </div>
                <div className="pt-2">
                  <span className="text-cyan-400">class</span>{' '}
                  <span className="text-amber-300">IntelligenceCore</span>(nn.Module):
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self):
                </div>
                <div className="pl-8 text-slate-400">
                  super().<span className="text-blue-400">__init__</span>()
                </div>
                <div className="pl-8 text-slate-200">
                  self.backbone = <span className="text-emerald-400">"SOTA-Transformer"</span>
                </div>
                <div className="pl-8 text-slate-200">
                  self.precision = <span className="text-emerald-400">"FP16-Optimized"</span>
                </div>
                <div className="pl-4 pt-1">
                  <span className="text-cyan-400">def</span>{' '}
                  <span className="text-blue-400">predict</span>(self, tensor):
                </div>
                <div className="pl-8 text-cyan-300">
                  return self.forward(tensor)
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Pipeline Ready
                  </span>
                  <span className="text-slate-500">Loss: 0.0124</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
