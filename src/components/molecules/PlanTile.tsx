'use client';

import { PlanBadge } from '../atoms/PlanBadge';
import { Button } from '../atoms/Button';
import { GradientText } from '../atoms/GradientText';

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface PlanTileData {
  id: string;
  name: string;
  price?: string;
  priceLabel?: string;
  badge?: { label: string; variant: 'popular' | 'value' | 'enterprise' };
  tagline: string;
  features: PlanFeature[];
  ctaLabel?: string;
  ctaHref?: string;
  contribution?: string;
  gradient: string;
}

interface PlanTileProps {
  plan: PlanTileData;
  isFlipped: boolean;
  onFlip: (id: string) => void;
}

export function PlanTile({ plan, isFlipped, onFlip }: PlanTileProps) {
  return (
    <div
      className="relative h-96 cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={() => onFlip(plan.id)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-slate-700 group-hover:border-blue-500/50 group-hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 bg-slate-800/50"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`h-1 bg-gradient-to-r ${plan.gradient}`} />
          <div className="flex flex-col flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              {plan.badge && <PlanBadge label={plan.badge.label} variant={plan.badge.variant} />}
            </div>

            {plan.price && (
              <div className="mb-3">
                <GradientText className="text-3xl font-bold">{plan.price}</GradientText>
                {plan.priceLabel && <span className="text-slate-400 text-sm ml-1">{plan.priceLabel}</span>}
              </div>
            )}

            <p className="text-slate-400 text-sm mb-4 flex-1">{plan.tagline}</p>

            <ul className="space-y-1.5 mb-4">
              {plan.features.slice(0, 3).map((feature) => (
                <li key={feature.label} className="flex items-center gap-2 text-sm">
                  <span className={feature.included ? 'text-cyan-400' : 'text-slate-600'}>
                    {feature.included ? '✓' : '✕'}
                  </span>
                  <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-slate-500 text-center">Click to see my contribution →</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-blue-500/50 bg-slate-900 overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className={`h-1 bg-gradient-to-r ${plan.gradient}`} />
          <div className="flex flex-col flex-1 p-6 min-h-0">
            <h3 className="text-lg font-bold mb-1 shrink-0">
              <GradientText>{plan.name}</GradientText>
            </h3>
            <p className="text-xs text-slate-500 mb-3 uppercase tracking-wide shrink-0">My Contribution</p>

            <p className="text-slate-300 text-sm leading-relaxed overflow-y-auto flex-1 pr-1">
              {plan.contribution || `Built the ${plan.name} pricing page, including responsive layout, feature comparison logic, and CRM integrations.`}
            </p>

            {plan.ctaHref && (
              <div className="mt-4 shrink-0" onClick={(e) => e.stopPropagation()}>
                <Button
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                >
                  View Live
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
