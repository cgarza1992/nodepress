'use client';

import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import { NarrativeSection } from '../molecules/NarrativeSection';
import type { NarrativeItem } from '../molecules/NarrativeSection';
import type { WorkHighlight } from './AuctaneWork';

interface Metric {
  value: string;
  label: string;
}

interface WPEngineWorkProps {
  metrics: Metric[];
  narrative: NarrativeItem[];
  projects: WorkHighlight[];
}

export function WPEngineWork({ metrics, narrative, projects }: WPEngineWorkProps) {
  return (
    <section id="wp-engine" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">WP Engine</span>{' '}Work
        </h2>
        <p className="text-slate-400 text-lg">
          Grew from intern to Senior Web Developer over 7 years at WP Engine, a{' '}
          <span className="text-emerald-400 font-semibold">$134M ARR</span> WordPress platform.
          Built and maintained the marketing and product web ecosystem across multiple brands.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              {metric.value}
            </div>
            <div className="text-slate-400 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      <NarrativeSection items={narrative} />

      <h3 className="text-xl font-semibold text-white mb-6">Projects & Deliverables</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item) => (
          <WorkHighlightCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
