interface Plan {
  name: string;
  price: string;
  featured?: boolean;
}

interface PricingPreviewProps {
  brand: string;
  plans: Plan[];
  accentHex: string;
}

export function PricingPreview({ brand, plans, accentHex }: PricingPreviewProps) {
  return (
    <div className="w-full h-44 overflow-hidden flex flex-col select-none bg-slate-50">
      <div className="px-4 py-2.5 flex items-center justify-between shrink-0" style={{ background: accentHex }}>
        <span className="text-white text-[10px] font-bold">{brand}</span>
        <span className="text-white/60 text-[8px] uppercase tracking-wider">Pricing</span>
      </div>

      <div className="flex gap-2 p-3 flex-1 min-h-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 rounded-lg p-2 flex flex-col items-center justify-center gap-0.5 border"
            style={plan.featured ? {
              background: `${accentHex}12`,
              borderColor: accentHex,
              boxShadow: `0 0 10px ${accentHex}25`,
            } : {
              background: '#fff',
              borderColor: '#e2e8f0',
            }}
          >
            {plan.featured && (
              <div className="text-[7px] font-semibold mb-0.5" style={{ color: accentHex }}>★ Popular</div>
            )}
            <div className="text-[8px] text-slate-500 font-medium">{plan.name}</div>
            <div className="text-sm font-bold text-slate-900 leading-none mt-0.5">{plan.price}</div>
            <div className="text-[7px] text-slate-400">/mo</div>
          </div>
        ))}
      </div>

      <div className="px-3 pb-3 shrink-0">
        <div
          className="w-full rounded-md text-center text-[9px] text-white py-1.5 font-semibold"
          style={{ background: accentHex }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
}
