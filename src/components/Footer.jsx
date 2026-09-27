import React from 'react';
import { ArrowUp, Heart, BrainCircuit } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
              <BrainCircuit className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-white">
              {personalInfo.name}
            </span>
            <span className="text-slate-500 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
