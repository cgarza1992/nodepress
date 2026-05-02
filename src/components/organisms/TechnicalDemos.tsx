'use client';

import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import type { WorkHighlight } from './AuctaneWork';

interface TechnicalDemosProps {
  demos: WorkHighlight[];
}

export function TechnicalDemos({ demos }: TechnicalDemosProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
        Open Source
      </p>
      <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        Technical Demos
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl">
        Generalized, open-source versions of patterns I built for enterprise clients at WP Engine and Auctane.
        The production work lives behind corporate firewalls — these are the concepts, made visible and runnable.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {demos.map((demo) => (
          <WorkHighlightCard key={demo.title} {...demo} />
        ))}
      </div>
    </section>
  );
}
