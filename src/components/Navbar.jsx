import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NotePopover } from './NotePopover';
import { GithubIcon } from './Icons';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--glass-bg)] border-b border-[var(--border-subtle)] backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3a31d8] to-[#0600c2] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#3a31d8]/30 group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[var(--text-main)] group-hover:text-[#3a31d8] transition-colors">
              Kavya Gupta
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              @JustKay1029
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
          <a
            href="#about"
            className="hover:text-[var(--text-main)] hover:text-[#3a31d8] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--text-main)] hover:text-[#3a31d8] transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/JustKay1029"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-main)] hover:text-[#3a31d8] transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <NotePopover />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#3a31d8]/40 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#3a31d8]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
