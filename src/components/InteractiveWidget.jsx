import React, { useState } from 'react';
import { Play, Sparkles, Cpu, Check, RefreshCw } from 'lucide-react';

export default function InteractiveWidget() {
  const [inputText, setInputText] = useState('This neural network model achieves remarkable efficiency with real-time inference latency.');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const samplePrompts = [
    "High accuracy with low compute requirements makes this model ideal for edge devices.",
    "The transformer attention mechanism struggles when sequence lengths exceed context limit.",
    "Autonomous agents with retrieval-augmented generation drastically reduce hallucinations."
  ];

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      // Simple heuristic for interactive preview demo
      const lower = inputText.toLowerCase();
      let sentiment = 'Positive';
      let confidence = 0.94;
      let latency = (Math.random() * 20 + 25).toFixed(1);

      if (lower.includes('struggle') || lower.includes('error') || lower.includes('fail') || lower.includes('issue')) {
        sentiment = 'Critical / Negative';
        confidence = 0.88;
      } else if (lower.includes('neutral') || lower.includes('average')) {
        sentiment = 'Neutral';
        confidence = 0.79;
      }

      setResult({
        sentiment,
        confidence: (confidence * 100).toFixed(1),
        tokens: inputText.split(/\s+/).length,
        latency: `${latency} ms`,
        category: lower.includes('model') || lower.includes('neural') || lower.includes('transformer')
          ? 'Deep Learning / NLP'
          : 'General Systems'
      });
      setAnalyzing(false);
    }, 700);
  };

  return (
    <section className="py-16 relative bg-slate-900/40 border-y border-slate-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/70 text-indigo-300 border border-indigo-800/50 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Mini AI Inference Simulator
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Test a client-side NLP token & sentiment classifier simulation live.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 sm:p-6 shadow-xl shadow-cyan-950/20">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Input Prompt / Text Sequence
              </label>
              <textarea
                rows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 p-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                placeholder="Enter any text to evaluate..."
              />
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Presets:</span>
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(p);
                    setResult(null);
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 transition-colors truncate max-w-[200px] sm:max-w-xs"
                >
                  "{p.slice(0, 30)}..."
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleAnalyze}
                disabled={analyzing}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50"
              >
                {analyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Tensors...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Model Inference</span>
                  </>
                )}
              </button>
            </div>

            {/* Analysis Output */}
            {result && (
              <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fadeIn">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Sentiment</div>
                  <div className="text-sm font-bold text-cyan-400 font-mono">{result.sentiment}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Confidence</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">{result.confidence}%</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Token Count</div>
                  <div className="text-sm font-bold text-indigo-400 font-mono">{result.tokens}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 mb-1">Latency</div>
                  <div className="text-sm font-bold text-amber-400 font-mono">{result.latency}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
