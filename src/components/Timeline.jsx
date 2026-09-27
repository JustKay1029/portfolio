import React from 'react';
import { experienceData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Background & Milestones</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & Journey
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Track record of continuous engineering, research, and technical growth.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-sm shadow-cyan-400/50" />

              {/* Date label for larger screens */}
              <div className="sm:absolute sm:-left-36 top-1 text-xs font-mono font-medium text-cyan-400 sm:text-right sm:w-28 mb-1 sm:mb-0">
                {item.period}
              </div>

              {/* Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.role}
                </h4>
                <div className="text-xs font-medium text-slate-400 mb-3">
                  {item.institution}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
