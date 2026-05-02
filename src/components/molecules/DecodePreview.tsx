export function DecodePreview() {
  return (
    <div className="w-full h-44 overflow-hidden flex flex-col select-none" style={{ background: '#0a1628' }}>
      {/* WP Engine Decode header */}
      <div className="px-4 py-2.5 shrink-0 flex items-center justify-between border-b" style={{ borderColor: '#40BFB510' }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm flex items-center justify-center" style={{ background: '#40BFB5' }}>
            <span className="text-[7px] font-black text-white">W</span>
          </div>
          <div>
            <span className="text-white text-[9px] font-bold tracking-widest uppercase">Decode</span>
            <span className="text-[8px] font-light ml-1.5" style={{ color: '#40BFB5' }}>by WP Engine</span>
          </div>
        </div>
        <div className="relative w-20 h-5">
          <div className="decode-login absolute inset-0 flex items-center justify-end">
            <div className="rounded text-[7px] px-1.5 py-0.5 border font-medium" style={{ borderColor: '#40BFB550', color: '#40BFB5' }}>
              Sign In →
            </div>
          </div>
          <div className="decode-sent absolute inset-0 flex items-center justify-end">
            <div className="rounded text-[7px] px-1.5 py-0.5 border font-medium" style={{ borderColor: '#40BFB5', color: '#40BFB5', background: '#40BFB515' }}>
              ✓ Link Sent
            </div>
          </div>
        </div>
      </div>

      {/* Session grid */}
      <div className="flex-1 p-2.5 grid grid-cols-2 gap-2 min-h-0">
        {[
          { time: '9:00 AM', track: 'Main Stage', title: 'Keynote: Future of WordPress', speaker: 'Matt Williams', accent: '#40BFB5' },
          { time: '10:30 AM', track: 'Workshop A', title: 'Building with Gutenberg Blocks', speaker: 'Sarah Chen', accent: '#7c5cbf' },
          { time: '1:00 PM', track: 'Track B', title: 'Performance at Scale', speaker: 'Jordan Lee', accent: '#f59e0b' },
          { time: '2:30 PM', track: 'Main Stage', title: 'Headless WordPress in Practice', speaker: 'Alex Rivera', accent: '#40BFB5' },
        ].map((session) => (
          <div
            key={session.title}
            className="rounded-lg p-2 flex flex-col gap-0.5"
            style={{ background: '#ffffff08', border: '1px solid #ffffff0d' }}
          >
            <div className="text-[6px] font-semibold" style={{ color: session.accent }}>{session.time} · {session.track}</div>
            <div className="text-[7px] text-white font-semibold leading-tight flex-1">{session.title}</div>
            <div className="text-[6px]" style={{ color: '#ffffff40' }}>{session.speaker}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
