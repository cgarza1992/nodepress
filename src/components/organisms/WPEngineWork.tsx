'use client';

import type { ReactNode } from 'react';
import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import { NarrativeSection } from '../molecules/NarrativeSection';
import type { NarrativeItem } from '../molecules/NarrativeSection';
import type { WorkHighlight } from './AuctaneWork';

interface Metric {
  value: string;
  label: string;
}

interface WPEngineWorkProps {
  description: ReactNode;
  metrics: Metric[];
  narrative: NarrativeItem[];
  projects: WorkHighlight[];
}

export function WPEngineWork({ description, metrics, narrative, projects }: WPEngineWorkProps) {
  return (
    <section id="wp-engine" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Work Experience
        </p>
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          WP Engine
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center shadow-sm dark:shadow-none">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {metric.value}
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      <NarrativeSection items={narrative} />

      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Projects & Deliverables</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item) => (
          <WorkHighlightCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
