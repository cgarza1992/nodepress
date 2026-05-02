export function FastSpringPreview() {
  return (
    <div className="w-full h-44 bg-[#080d1a] overflow-hidden relative flex flex-col select-none">

      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 shrink-0">
        <div>
          <div className="text-white text-[10px] font-bold tracking-wide">DevMetrics</div>
          <div className="text-[7px] text-blue-400/70">Powered by FastSpring</div>
        </div>
        <div className="flex gap-3">
          <span className="text-[9px] text-blue-400 font-medium">Home</span>
          <span className="text-[9px] text-slate-500">Store</span>
        </div>
      </div>

      {/* Locale badge */}
      <div className="flex items-center justify-center gap-1.5 pt-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
        <span className="text-[7px] text-slate-400">
          Localized pricing ·{' '}
          <span className="relative inline-block" style={{ width: '2rem' }}>
            <span className="fs-usd absolute left-0">USD</span>
            <span className="fs-eur absolute left-0">EUR</span>
          </span>
        </span>
      </div>

      {/* Plans */}
      <div className="flex gap-2 px-3 py-2 flex-1 min-h-0">

        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col items-center justify-center gap-0.5">
          <div className="text-[8px] text-slate-400">Starter</div>
          <div className="relative h-5 w-full flex items-center justify-center">
            <span className="fs-usd absolute text-sm font-bold text-white">$29</span>
            <span className="fs-eur absolute text-sm font-bold text-white">€27</span>
          </div>
          <div className="text-[7px] text-slate-500">/mo</div>
        </div>

        <div
          className="flex-1 border border-blue-500/40 rounded-lg p-2 flex flex-col items-center justify-center gap-0.5 fs-glow"
          style={{ background: 'rgba(37,99,235,0.12)' }}
        >
          <div className="text-[7px] text-blue-400 font-semibold">★ Popular</div>
          <div className="text-[8px] text-blue-300">Pro</div>
          <div className="relative h-5 w-full flex items-center justify-center">
            <span className="fs-usd absolute text-sm font-bold text-white">$79</span>
            <span className="fs-eur absolute text-sm font-bold text-white">€74</span>
          </div>
          <div className="text-[7px] text-slate-400">/mo</div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col items-center justify-center gap-0.5">
          <div className="text-[8px] text-slate-400">Enterprise</div>
          <div className="relative h-5 w-full flex items-center justify-center">
            <span className="fs-usd absolute text-sm font-bold text-white">$199</span>
            <span className="fs-eur absolute text-sm font-bold text-white">€185</span>
          </div>
          <div className="text-[7px] text-slate-500">/mo</div>
        </div>
      </div>

      {/* Checkout drawer — slides up */}
      <div className="fs-checkout absolute bottom-0 left-0 right-0 bg-[#0f172a] border-t border-white/10 px-4 py-3">
        <div className="text-[7px] text-slate-500 uppercase tracking-wider mb-1.5">Checkout</div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] text-white font-medium">DevMetrics Pro</span>
          <span className="relative text-[10px] font-bold text-blue-400" style={{ minWidth: '5rem', textAlign: 'right' }}>
            <span className="fs-usd absolute right-0">$79.00/mo</span>
            <span className="fs-eur absolute right-0">€74.00/mo</span>
          </span>
        </div>
        <div className="bg-blue-600 rounded-md text-center text-[9px] text-white py-1.5 font-semibold">
          Complete Purchase
        </div>
      </div>

    </div>
  );
}
