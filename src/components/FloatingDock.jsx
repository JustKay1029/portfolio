import React from 'react';
import { Dock, DockIcon } from './core/dock';
import { Home, User, FolderGit2, Sun, Moon, MessageSquarePlus } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export function FloatingDock() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto">
        <Dock className="shadow-2xl shadow-black/30">
          <DockIcon
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Home"
          >
            <Home className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            title="About"
          >
            <User className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            title="Projects"
          >
            <FolderGit2 className="w-5 h-5" />
          </DockIcon>

          <a
            href="https://github.com/JustKay1029"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <DockIcon>
              <GithubIcon className="w-5 h-5" />
            </DockIcon>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <DockIcon>
              <LinkedinIcon className="w-5 h-5" />
            </DockIcon>
          </a>

          <DockIcon
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-[#3a31d8]" />
            )}
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
