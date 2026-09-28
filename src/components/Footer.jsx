import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-28 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-muted)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[var(--text-main)]">Kavya Gupta</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JustKay1029"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
