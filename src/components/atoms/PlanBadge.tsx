interface PlanBadgeProps {
  label: string;
  variant?: 'popular' | 'value' | 'enterprise';
}

const variants = {
  popular: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
  value: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
  enterprise: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
};

export function PlanBadge({ label, variant = 'popular' }: PlanBadgeProps) {
  return (
    <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap ${variants[variant]}`}>
      {label}
    </span>
  );
}
