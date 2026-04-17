'use client';

import { PlanGrid } from './PlanGrid';
import { SectionHeader } from '../SectionHeader';
import { WorkHighlightCard } from '../molecules/WorkHighlightCard';
import type { PlanTileData } from '../molecules/PlanTile';

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
  pricingPlans: PlanTileData[];
  workHighlights: WorkHighlight[];
}

export function AuctaneWork({ metrics, pricingPlans, workHighlights }: AuctaneWorkProps) {
  return (
    <section id="auctane" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Auctane</span>{' '}Work
        </h2>
        <p className="text-slate-400 text-lg">
          Led pricing and platform consolidation across the Auctane shipping portfolio, driving{' '}
          <span className="text-blue-400 font-semibold">185% revenue growth</span> while managing{' '}
          <span className="text-blue-400 font-semibold">$134M+ in ARR</span> across 10 brands.
          Click any plan to see my contribution.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
              {metric.value}
            </div>
            <div className="text-slate-400 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <SectionHeader title="Pricing & Billing" />
        <PlanGrid plans={pricingPlans} />
      </div>

      <div>
        <SectionHeader title="Other Engineering Work" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workHighlights.map((item) => (
            <WorkHighlightCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
