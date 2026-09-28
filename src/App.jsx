import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/core/scroll-progress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-[#3a31d8]/30 selection:text-[#ebe9fc] transition-colors relative">
        {/* Spring-animated Reading / Page Scroll Progress Bar */}
        <ScrollProgress
          className="bg-gradient-to-r from-[#3a31d8] via-[#0600c2] to-cyan-400"
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />

        <Navbar />

        <main className="space-y-4">
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />

        {/* macOS Floating Dock */}
        <FloatingDock />
      </div>
    </ThemeProvider>
  );
}
