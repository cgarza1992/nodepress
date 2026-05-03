import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

const topMetrics = [
  { value: '+14%', label: 'ICP Trial CVR, Organic Channel', brand: 'ShipStation' },
  { value: '+12%', label: 'ICP Trial CVR, App UI Test', brand: 'ShipStation' },
  { value: '+9.3%', label: 'ICP Trial CVR, Headline Test', brand: 'ShipStation' },
  { value: '+6.6%', label: 'Accounts Created', brand: 'Stamps.com' },
  { value: '+8%', label: 'Registration Views', brand: 'Stamps.com' },
  { value: '+6.6%', label: 'WebReg Entries (6.21% → 6.64%)', brand: 'Stamps.com' },
];

type Test = {
  name: string;
  date: string;
  hypothesis: string;
  results: string;
  tags: string[];
  highlight?: boolean;
};

const homepageTests: Test[] = [
  {
    name: 'RD3 Follow-Up: Header Copy',
    date: 'July 15 – Aug 1, 2025 · 17 days · 156K visitors',
    hypothesis: 'Keeping the original CTA and main image while swapping in new copy and callouts would improve conversion over the prior redesign, which had shown low engagement on certain sections.',
    results: 'Flat overall. ICP slightly worse (-4%, not stat sig). Scroll depth dropped significantly: 8% fewer users scrolled past the header. Confirmed copy changes alone were not the lever. Led to the decision to test layout and content length directly.',
    tags: ['Homepage', 'Copy'],
  },
  {
    name: 'Multi-Headline Test',
    date: 'Aug 19 – 28, 2025 · 9 days · 108K visitors',
    hypothesis: 'Testing three headline variants ("Goodbye Busywork, Hello Business Growth," "Big Shipping Power. Small Shipping Costs.," and "Take your shipping from so-so to sensational") to identify which messaging frame converts best.',
    results: '"Big Shipping Power. Small Shipping Costs." showed +5.4% overall trial lift with +9.3% ICP, the strongest individual result across all homepage copy tests. The aspirational "sensational" variant was flat. "Shipping Power" became the established control for subsequent redesign tests.',
    tags: ['Homepage', 'Copy', 'A/B'],
    highlight: true,
  },
  {
    name: 'RD4: Shortened Content',
    date: 'October 2025 · 21 days',
    hypothesis: 'Removing low-engagement sections identified in the RD2 heatmap would reduce cognitive load and improve page conversion.',
    results: '+2.8% all trial conversions, non-ICP +3.7%. ICP marginally worse (-0.85%). Channel breakdown revealed more signal: Campaigns +4%, Organic +14% ICP. Direct, Paid, and Referral traffic performed worse (-3%, -2%, -6%). Established channel-level segmentation as a required lens for all future tests.',
    tags: ['Homepage', 'Redesign', 'Segmentation'],
    highlight: true,
  },
  {
    name: 'App UI Background Test',
    date: 'Oct 13 – Nov 3, 2025 · 21 days',
    hypothesis: 'Surfacing the platform UI in the hero would answer the pre-signup question enterprise users bring: what does this actually look like to use?',
    results: 'Flat overall (-1% combined). ICP trials up +12%, non-ICP down -5%. The design worked for enterprise buyers who valued software evidence; smaller businesses needed social proof and simplicity instead. Hardened the ICP/non-ICP segmentation as a durable testing framework.',
    tags: ['Homepage', 'UI', 'ICP'],
    highlight: true,
  },
  {
    name: 'RD4 V2: UI Adjustment',
    date: 'Nov 4 – Nov 24, 2025 · 19 days',
    hypothesis: '"Start Shipping Now" had performed well in control. Pairing it with improved visual contrast and the "Shipping Power" copy from the multi-headline test would drive overall lift.',
    results: '+4% trials overall (ICP +2%, non-ICP +5%). Direct traffic bucked the trend: -8.7% overall, ICP -10%, non-ICP -6%. Identified direct as a distinct audience requiring its own dedicated LP rather than further global optimizations.',
    tags: ['Homepage', 'CTA', 'UI'],
  },
  {
    name: 'ICP-Focused LP: Direct Traffic Only',
    date: 'Dec 3, 2025 – Jan 6, 2026 · 34 days',
    hypothesis: 'Given consistent direct-traffic underperformance across prior redesign tests, tailored messaging for enterprise/direct audiences would recover that channel\'s conversion rate.',
    results: '+6% ICP leads through mid-December. Results flattened during holiday weeks (12/22 – 1/2); organic demand dropped and distorted the signal. Follow-up test in progress to re-run with clean non-holiday traffic. Most promising channel-specific test to date.',
    tags: ['Landing Page', 'ICP', 'Direct'],
  },
];

const trialTests: Test[] = [
  {
    name: 'Form-Only Layout',
    date: 'Aug 19 – 25, 2025 · 6 days',
    hypothesis: 'Prior trial page tests adding UI elements and copy produced little or negative lift. Stripping the page to a single-column form would reduce friction.',
    results: '-9.3% overall. ICP marginally better (+1.4%). Non-ICP significantly worse (-12.6%). Removing surrounding context (value props, testimonials) eliminated the reassurance smaller businesses needed before committing to a trial. The form alone was not enough.',
    tags: ['Trial Page', 'Form', 'Layout'],
  },
  {
    name: 'Shipment Volume Reorder',
    date: 'Dec 11 – 17, 2025 · 6 days',
    hypothesis: 'Surfacing high-volume shipment options (7,500+) at the top of the volume selector would better serve ICP users who self-identify there.',
    results: 'ICP leads +14%, non-ICP -24% (stat sig loss, stopped early). The clearest example of the ICP/non-ICP tradeoff in the test program: aggressively optimizing for enterprise qualification created friction for the majority of trial visitors. Requires a conditional or segmented form experience rather than a single field change.',
    tags: ['Trial Page', 'Form', 'ICP'],
    highlight: true,
  },
];

const stampsTests: Test[] = [
  {
    name: 'Homepage Redesign, Part 1',
    date: 'October 2025 · 20 days · 491K visitors',
    hypothesis: 'Promoting high-engagement elements (testimonials and product feature sections) to the top of the page would drive more users into the WebReg registration flow.',
    results: '+6.6% accounts created, +8% registration views, +5% Step 1 profile completions. The only segment that did not improve was referral account creation. Design and copy elements were shipped directly to production and are forming the foundation for all subsequent Stamps.com page redesigns.',
    tags: ['Homepage', 'Redesign', 'Registration'],
    highlight: true,
  },
  {
    name: 'Homepage Redesign, Part 2',
    date: 'Oct 3, 2025 · 20 days · 491K visitors',
    hypothesis: 'Promoting additional highly-engaged elements higher on the page would compound the gains from Part 1.',
    results: 'Consistent improvements across all funnel metrics: accounts created 0.80% → 0.81%, WebReg visits 6.21% → 6.64%, Step 1 completions 1.92% → 1.98%. Referral account creation slightly regressed (0.97% → 0.93%). Demonstrated that incremental iteration on an already-winning design continues to compound.',
    tags: ['Homepage', 'Funnel', 'Iteration'],
  },
];

function TestCard({ test }: { test: Test }) {
  return (
    <div className={`rounded-xl border p-6 ${test.highlight ? 'border-blue-500/40 bg-white dark:bg-slate-800/60' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30'}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{test.name}</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{test.date}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end shrink-0">
          {test.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">{tag}</span>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Hypothesis</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{test.hypothesis}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Results & Learning</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{test.results}</p>
        </div>
      </div>
    </div>
  );
}

export default function AuctaneCROPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link href="/#auctane" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          ← Back to portfolio
        </Link>
      </div>

      <header className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">ShipStation · Stamps.com · 2025</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Conversion Rate Optimization</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Auctane CRO Program
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          A systematic A/B testing program across ShipStation and Stamps.com, focused on trial and registration conversion. Each test built on the prior one, eventually surfacing a durable insight that now drives the strategy: ICP and non-ICP users require fundamentally different experiences.
        </p>
      </header>

      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-12 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">Top Results</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {topMetrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{m.value}</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-snug">{m.label}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">{m.brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">How Tests Were Run</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              All tests ran through Optimizely with traffic segmented by ICP (100+ shipments/month) and non-ICP (&lt;100 shipments/month), and further broken out by channel: Direct, Organic, Campaign, Referral, and Paid. That granularity exposed patterns that aggregate results would have buried.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">The Pattern That Emerged</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              What converts enterprise shippers tends to hurt smaller businesses, and vice versa. ICP users (high-volume, often evaluating for a team) responded to app UI, feature depth, and value-forward copy. Non-ICP users needed social proof, simplicity, and trust signals. Tests that lifted both simultaneously were the exception.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">ShipStation: Homepage</h2>
        <div className="flex flex-col gap-5">
          {homepageTests.map((test) => <TestCard key={test.name} test={test} />)}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">ShipStation: Trial Page</h2>
        <div className="flex flex-col gap-5">
          {trialTests.map((test) => <TestCard key={test.name} test={test} />)}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">Stamps.com: Homepage</h2>
        <div className="flex flex-col gap-5">
          {stampsTests.map((test) => <TestCard key={test.name} test={test} />)}
        </div>
      </section>

      <div className="border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/#auctane" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
