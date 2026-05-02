const CARDS = [
  { letter: 'S', label: 'Stripe',   bg: '#635bff', type: 'payments'  },
  { letter: 'M', label: 'Mixpanel', bg: '#7856ff', type: 'analytics' },
  { letter: 'H', label: 'HubSpot',  bg: '#ff7a59', type: 'other'     },
  { letter: 'Z', label: 'Zapier',   bg: '#ff4a00', type: 'other'     },
  { letter: 'D', label: 'Datadog',  bg: '#632ca6', type: 'analytics' },
  { letter: 'P', label: 'PayPal',   bg: '#003087', type: 'payments'  },
];

export function DirectoryPreview() {
  return (
    <div className="w-full h-44 bg-slate-50 overflow-hidden p-3 flex flex-col gap-2.5 select-none">

      {/* Filter chips */}
      <div className="flex gap-1.5 shrink-0">
        <span className="dir-chip dir-chip-all text-[8px] px-2 py-0.5 rounded-full border font-semibold">All</span>
        <span className="dir-chip dir-chip-analytics text-[8px] px-2 py-0.5 rounded-full border font-semibold">Analytics</span>
        <span className="dir-chip dir-chip-payments text-[8px] px-2 py-0.5 rounded-full border font-semibold">Payments</span>
        <span className="dir-chip text-[8px] px-2 py-0.5 rounded-full border font-semibold text-slate-300 border-slate-200 bg-transparent">CRM</span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
        {CARDS.map((card) => (
          <div
            key={card.label}
            className={`dir-card dir-card-${card.type} bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-1 py-1.5`}
          >
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
              style={{ background: card.bg }}
            >
              <span className="text-white text-[9px] font-bold">{card.letter}</span>
            </div>
            <span className="text-[7px] text-slate-400 font-medium leading-none">{card.label}</span>
          </div>
        ))}
      </div>

      {/* Relevance label */}
      <div className="shrink-0 text-[7px] text-slate-400 flex items-center gap-1">
        <span className="inline-block w-1 h-1 rounded-full bg-green-400" />
        Relevance scoring · filter to see algorithm
      </div>

    </div>
  );
}
