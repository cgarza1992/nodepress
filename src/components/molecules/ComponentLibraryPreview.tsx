export function ComponentLibraryPreview() {
  return (
    <div className="w-full h-72 overflow-hidden flex flex-col select-none bg-[#1c1e26]">
      {/* Storybook-style header */}
      <div className="px-3 py-2 border-b border-white/5 shrink-0 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <span className="text-white/70 text-[9px] tracking-wide">PlanCard</span>
        <span className="text-white/40 text-[9px]">/</span>
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
              style={i === 0 ? { background: '#ffffff18', color: '#ffffff' } : { color: '#ffffff80' }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Canvas — 3 brand instances cycle */}
        <div className="flex-1 relative overflow-hidden p-3">

          {/* ShipStation */}
          <div className="comp-btns absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e8fdf2' }}>
              <div className="px-3 py-2 flex items-center" style={{ background: '#04E66408', borderBottom: '1px solid #e8fdf2' }}>
                <img src="/logos/shipstation.svg" alt="ShipStation" style={{ height: '14px', width: 'auto' }} />
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] mb-0.5" style={{ color: '#10003B99' }}>Standard Plan</div>
                <div className="text-[15px] font-bold leading-none mb-1" style={{ color: '#10003B' }}>$29<span className="text-[7px] font-normal" style={{ color: '#10003B99' }}>/mo</span></div>
                <div className="text-[6px] mb-2" style={{ color: '#10003B80' }}>Up to 5,000 shipments/month</div>
                <div className="w-full rounded text-center text-[7px] text-white py-1 font-semibold" style={{ background: '#01C456' }}>Start Free Trial</div>
              </div>
            </div>
          </div>

          {/* ShipStation API (formerly ShipEngine) */}
          <div className="comp-forms absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #d4e0d6' }}>
              <div className="px-3 py-2 flex items-center" style={{ background: '#04E66408', borderBottom: '1px solid #e8fdf2' }}>
                <img src="/logos/shipstation-api.svg" alt="ShipStation API" style={{ height: '14px', width: 'auto' }} />
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] mb-0.5" style={{ color: '#00331199' }}>Starter</div>
                <div className="text-[15px] font-bold leading-none mb-1" style={{ color: '#003311' }}>$49<span className="text-[7px] font-normal" style={{ color: '#00331199' }}>/mo</span></div>
                <div className="text-[6px] font-mono mb-2" style={{ color: '#00331180' }}>5,000 API calls/month</div>
                <div className="w-full rounded text-center text-[7px] py-1 font-semibold" style={{ background: '#23EE88', color: '#003311' }}>Get API Access</div>
              </div>
            </div>
          </div>

          {/* Stamps.com */}
          <div className="comp-cards absolute inset-3 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden" style={{ background: '#fff', border: '1px solid #e8e6fb' }}>
              <div className="px-3 py-2 flex items-center" style={{ background: '#4E44D908', borderBottom: '1px solid #e8e6fb' }}>
                <img src="/logos/stamps.svg" alt="Stamps.com" style={{ height: '14px', width: 'auto' }} />
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[7px] mb-0.5" style={{ color: '#10003B99' }}>Pro Plan</div>
                <div className="text-[15px] font-bold leading-none mb-1" style={{ color: '#10003B' }}>$19<span className="text-[7px] font-normal" style={{ color: '#10003B99' }}>/mo</span></div>
                <div className="text-[6px] mb-2" style={{ color: '#10003B80' }}>Unlimited postage printing</div>
                <div className="w-full rounded text-center text-[7px] text-white py-1 font-semibold" style={{ background: '#4E44D9' }}>Get Started</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
