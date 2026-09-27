import React from 'react';
import { Cpu, Network, GitBranch, LineChart, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Model Architecture & Tuning",
      description: "Fine-tuning transformer models, CNNs, and ensemble predictors for low-latency edge and server deployments."
    },
    {
      icon: <Network className="w-6 h-6 text-indigo-400" />,
      title: "GenAI & LLM Solutions",
      description: "Building production RAG systems, embedding vector indexing, and autonomous reasoning agents."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-emerald-400" />,
      title: "End-to-End MLOps",
      description: "Containerizing model serving with FastAPI and Docker, orchestrating data pipelines and continuous validation."
    },
    {
      icon: <LineChart className="w-6 h-6 text-amber-400" />,
      title: "Data Science & Insights",
      description: "Deep exploratory analysis, statistical modeling, feature selection, and data visualization."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Transforming Complex Data into Autonomous Intelligence
          </h3>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            {personalInfo.about}
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
