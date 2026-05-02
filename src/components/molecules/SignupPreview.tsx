interface SignupPreviewProps {
  brand: string;
  accentHex: string;
}

export function SignupPreview({ brand, accentHex }: SignupPreviewProps) {
  return (
    <div className="w-full h-44 overflow-hidden flex flex-col select-none bg-white">
      <div className="px-4 py-2.5 flex items-center justify-between shrink-0" style={{ background: accentHex }}>
        <span className="text-white text-[10px] font-bold">{brand}</span>
        <span className="text-white/60 text-[8px] uppercase tracking-wider">Free Trial</span>
      </div>

      <div className="flex gap-1 px-4 pt-2.5 pb-1 shrink-0">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className="h-0.5 flex-1 rounded-full"
            style={{ background: step <= 2 ? accentHex : '#e2e8f0' }}
          />
        ))}
      </div>
      <div className="px-4 pb-1 shrink-0">
        <span className="text-[7px] text-slate-400">Step 2 of 3 — Tell us about your business</span>
      </div>

      <div className="px-4 flex-1 flex flex-col gap-1.5 pt-1 min-h-0">
        <div className="flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 bg-slate-50">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentHex }} />
          <span className="text-[8px] text-slate-500 truncate">user@company.com</span>
        </div>

        <div
          className="flex items-center justify-between border rounded-md px-2 py-1.5"
          style={{ borderColor: accentHex, background: `${accentHex}0d` }}
        >
          <span className="text-[8px] text-slate-600">Monthly shipments</span>
          <span className="text-[8px] font-semibold" style={{ color: accentHex }}>500–2,500 ▾</span>
        </div>

        <div className="flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 bg-slate-50">
          <span className="text-[8px] text-slate-300">Company name</span>
        </div>
      </div>

      <div className="px-4 pb-3 shrink-0">
        <div
          className="w-full rounded-md text-center text-[9px] text-white py-1.5 font-semibold"
          style={{ background: accentHex }}
        >
          Continue →
        </div>
      </div>
    </div>
  );
}
