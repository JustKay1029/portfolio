import React from 'react';
import { Dock, DockIcon } from './core/dock';
import { Home, User, FolderGit2, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export function FloatingDock() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto">
        <Dock className="shadow-2xl shadow-black/25 border-zinc-300/80 dark:border-zinc-800/80">
          <DockIcon
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Top / Home"
          >
            <Home className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            title="About Kavya"
          >
            <User className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            title="Projects Showcase"
          >
            <FolderGit2 className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            href="https://github.com/JustKay1029"
            target="_blank"
            rel="noreferrer"
            title="GitHub (@JustKay1029)"
          >
            <GithubIcon className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Network"
          >
            <LinkedinIcon className="w-5 h-5" />
          </DockIcon>

          <DockIcon
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-zinc-300" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-700" />
            )}
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
