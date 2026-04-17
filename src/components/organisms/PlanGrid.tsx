'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { flipTile, selectPlan } from '@/store/slices/planSlice';
import { PlanTile } from '../molecules/PlanTile';
import type { PlanTileData } from '../molecules/PlanTile';

interface PlanGridProps {
  plans: PlanTileData[];
  title?: string;
  description?: string;
}

export function PlanGrid({ plans, title, description }: PlanGridProps) {
  const dispatch = useAppDispatch();
  const flippedTileId = useAppSelector((state) => state.plans.flippedTileId);
  const selectedPlanId = useAppSelector((state) => state.plans.selectedPlanId);

  return (
    <div>
      {(title || description) && (
        <div className="mb-8">
          {title && <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>}
          {description && <p className="text-slate-400">{description}</p>}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <PlanTile
            key={plan.id}
            plan={plan}
            isFlipped={flippedTileId === plan.id}
            isSelected={selectedPlanId === plan.id}
            onFlip={(id) => dispatch(flipTile(id))}
            onSelect={(id) => dispatch(selectPlan(id))}
          />
        ))}
      </div>

      {selectedPlanId && (
        <p className="mt-4 text-center text-sm text-slate-500">
          Selected: <span className="text-blue-400">{plans.find(p => p.id === selectedPlanId)?.name}</span>
        </p>
      )}
    </div>
  );
}
