'use client';

import { PlanGrid } from './PlanGrid';
import { SectionHeader } from '../SectionHeader';
import type { PlanTileData } from '../molecules/PlanTile';

interface WPEngineWorkProps {
  managedPlans: PlanTileData[];
  ecommercePlans: PlanTileData[];
}

export function WPEngineWork({ managedPlans, ecommercePlans }: WPEngineWorkProps) {
  return (
    <section id="wpengine" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WP Engine</span>{' '}Work
        </h2>
        <p className="text-slate-400 text-lg">
          Built and optimized pricing pages for WP Engine&apos;s WordPress portfolio, supporting{' '}
          <span className="text-blue-400 font-semibold">150K+ managed WordPress sites</span>.{' '}
          Click any plan to see my contribution.
        </p>
      </div>

      <div className="mb-20">
        <SectionHeader title="Managed WordPress Plans" />
        <PlanGrid plans={managedPlans} />
      </div>

      <div>
        <SectionHeader title="eCommerce Plans" />
        <PlanGrid plans={ecommercePlans} />
      </div>
    </section>
  );
}
