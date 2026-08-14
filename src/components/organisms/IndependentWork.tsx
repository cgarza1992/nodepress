'use client';

import type { ReactNode } from 'react';
import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import type { WorkHighlight } from './AuctaneWork';

interface IndependentWorkProps {
  description: ReactNode;
  projects: WorkHighlight[];
}

export function IndependentWork({ description, projects }: IndependentWorkProps) {
  return (
    <section id="freelance" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Now · Independent
        </p>
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Freelance &amp; Independent Engineering
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl">
          {description}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((item) => (
          <WorkHighlightCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
