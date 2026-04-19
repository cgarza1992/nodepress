'use client';

import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import { NarrativeSection } from '../molecules/NarrativeSection';
import type { NarrativeItem } from '../molecules/NarrativeSection';

interface Metric {
  value: string;
  label: string;
}

export interface WorkHighlight {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

interface AuctaneWorkProps {
  metrics: Metric[];
  narrative: NarrativeItem[];
  projects: WorkHighlight[];
}

export function AuctaneWork({ metrics, narrative, projects }: AuctaneWorkProps) {
  return (
    <section id="auctane" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Work Experience
        </p>
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Auctane
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Led technical implementation of enterprise brand consolidation, merging{' '}
          <span className="text-slate-900 dark:text-white font-semibold">10 separate brands</span> under unified
          corporate standards. Architected and executed complex site migrations, full-stack redesigns,
          and modernized legacy codebases across the Auctane shipping portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
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
