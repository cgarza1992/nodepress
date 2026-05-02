export function ComponentLibraryPreview() {
  return (
    <div className="w-full h-44 overflow-hidden flex flex-col select-none bg-[#1c1e26]">
      {/* Storybook-style header */}
      <div className="px-3 py-2 border-b border-white/5 shrink-0 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <span className="text-white/30 text-[9px] tracking-wide">PlanCard</span>
        <span className="text-white/15 text-[9px]">/</span>
        <span className="comp-nav-btns text-[9px] rounded px-1">ShipStation</span>
        <span className="comp-nav-forms text-[9px] rounded px-1">ShipEngine</span>
        <span className="comp-nav-cards text-[9px] rounded px-1">Stamps.com</span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-20 border-r border-white/5 py-2 shrink-0 flex flex-col gap-0.5 px-2">
          {['PlanCard', 'HeroSection', 'SignupForm', 'NavBar', 'CTABlock'].map((name, i) => (
            <div
              key={name}
              className="text-[7px] px-1.5 py-0.5 rounded truncate"
              style={i === 0 ? { background: '#ffffff12', color: '#ffffffcc' } : { color: '#ffffff30' }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Canvas — 3 brand instances cycle */}
        <div className="flex-1 relative overflow-hidden p-3">

          {/* ShipStation — light consumer SaaS */}
          <div className="comp-btns absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e2f5fa' }}>
              <div className="px-3 py-2 flex items-center gap-1.5" style={{ background: '#1a9fc008', borderBottom: '1px solid #e2f5fa' }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#1a9fc0' }} />
                <span className="text-[7px] font-semibold" style={{ color: '#1a9fc0' }}>ShipStation</span>
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] text-slate-400 mb-0.5">Standard Plan</div>
                <div className="text-[15px] font-bold text-slate-900 leading-none mb-1">$29<span className="text-[7px] text-slate-400 font-normal">/mo</span></div>
                <div className="text-[6px] text-slate-400 mb-2">Up to 5,000 shipments/month</div>
                <div className="w-full rounded text-center text-[7px] text-white py-1 font-semibold" style={{ background: '#1a9fc0' }}>Start Free Trial</div>
              </div>
            </div>
          </div>

          {/* ShipEngine — dark developer API */}
          <div className="comp-forms absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#0d1b2e', border: '1px solid #1B3A8F50' }}>
              <div className="px-3 py-2 flex items-center justify-between" style={{ borderBottom: '1px solid #1B3A8F40' }}>
                <span className="text-[7px] font-semibold text-white/80">ShipEngine</span>
                <span className="text-[6px] font-mono px-1.5 py-0.5 rounded" style={{ background: '#1B3A8F30', color: '#7b9fe8' }}>API</span>
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] text-white/40 mb-0.5">Starter</div>
                <div className="text-[15px] font-bold text-white leading-none mb-1">$49<span className="text-[7px] text-white/30 font-normal">/mo</span></div>
                <div className="text-[6px] text-white/30 font-mono mb-2">5,000 API calls/month</div>
                <div className="w-full rounded text-center text-[7px] text-white py-1 font-semibold" style={{ background: '#1B3A8F' }}>Get API Access</div>
              </div>
            </div>
          </div>

          {/* Stamps.com — clean white business */}
          <div className="comp-cards absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #fde8e8' }}>
              <div className="px-3 py-2 flex items-center gap-1.5" style={{ background: '#CC202708', borderBottom: '1px solid #fde8e8' }}>
                <div className="w-1.5 h-1.5 rounded-sm" style={{ background: '#CC2027' }} />
                <span className="text-[7px] font-semibold" style={{ color: '#CC2027' }}>Stamps.com</span>
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] text-slate-400 mb-0.5">Pro Plan</div>
                <div className="text-[15px] font-bold text-slate-900 leading-none mb-1">$19<span className="text-[7px] text-slate-400 font-normal">/mo</span></div>
                <div className="text-[6px] text-slate-400 mb-2">Unlimited postage printing</div>
                <div className="w-full rounded text-center text-[7px] text-white py-1 font-semibold" style={{ background: '#CC2027' }}>Get Started</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
