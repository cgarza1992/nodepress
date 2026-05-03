import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

const metrics = [
  { value: '+22%', label: 'Transactions' },
  { value: '+19%', label: 'MRR' },
  { value: '+185%', label: 'eComm Plans Purchased' },
  { value: '+289%', label: 'Bookings (Sales-Assisted)' },
  { value: '+105%', label: 'Add-ons Purchased' },
  { value: '+101%', label: 'ARPU (Sales-Assisted)' },
  { value: '+38%', label: 'Opportunities Created' },
  { value: '+25%', label: 'SDR Chats' },
];

const iterations = [
  {
    year: '2016',
    label: 'Inherited from Agency',
    src: '/case-studies/wpe-plans/2016-plan-tiles.png',
    description: 'The original plan tiles when I joined as an intern. Inherited from an agency using the Genesis theme — static, no multicurrency, no localization.',
    href: 'https://web.archive.org/web/20160708082158/https://wpengine.com/plans/',
  },
  {
    year: '2020',
    label: '4-Column Layout',
    src: '/case-studies/wpe-plans/2020-plan-tiles.png',
    description: 'A 4-column layout showing per-plan feature lists inline. Better than the original but created friction when users tried to compare add-on pricing across plans.',
    href: 'https://web.archive.org/web/20200304175208/https://wpengine.com/plans/',
  },
  {
    year: '2021',
    label: 'Tabbed Plan Slider',
    src: '/case-studies/wpe-plans/2021-plan-tiles-tabbed.png',
    description: 'A tabbed slider letting users navigate across product types and plan sizes. Added multicurrency and geolocated pricing via the in-house billing API. The tabs solved product navigation but hid plans behind clicks — most users never saw what was behind each tab.',
    href: 'https://web.archive.org/web/20210502003904/https://wpengine.com/plans/',
  },
  {
    year: '2022',
    label: 'Swimlane Redesign',
    src: '/case-studies/wpe-plans/2022-plan-tiles.png',
    description: 'The swimlane redesign surfaced all plan types simultaneously, leading users to self-identify their solution before selecting a size. Dramatically reduced decision paralysis and increased eCommerce plan purchases by 185%. Dedicated and enterprise tiers routed directly into sales-assisted flows.',
    href: 'https://web.archive.org/web/20230201043223/https://wpengine.com/plans/',
  },
  {
    year: '2022',
    label: 'Chat Trigger State',
    src: '/case-studies/wpe-plans/2022-plan-tiles-trigger-chat.png',
    description: 'Dedicated and enterprise plan selections triggered a proactive chat prompt, routing high-value prospects directly to a sales rep rather than a self-serve checkout. Contributed to +25% SDR chats and +38% opportunities created.',
  },
  {
    year: '2022',
    label: 'Localized Pricing (GBP)',
    src: '/case-studies/wpe-plans/2022-plans-tiles-gbp-state.png',
    description: 'Geolocated pricing rendered in the visitor\'s local currency — GBP, EUR, AUD, CAD — powered by the billing API. Prices updated without a page reload based on detected region.',
  },
  {
    year: '2023+',
    label: 'Current — React + Redux',
    images: [
      { src: '/brands/WP%20Engine/WP%20Engine/short-current-wpengine-plans-page.png', caption: 'Standard Plans' },
      { src: '/brands/WP%20Engine/WP%20Engine/short-current-wpengine-ecommerce-plans-page.png', caption: 'eCommerce Plans' },
      { src: '/brands/WP%20Engine/WP%20Engine/long-current-wpengine-plans-page.png', caption: 'Standard Plans — full page' },
      { src: '/brands/WP%20Engine/WP%20Engine/long-current-wpengine-ecommerce-plans-page.png', caption: 'eCommerce Plans — full page' },
    ],
    description: 'The final form of the plans page, built in React with Redux for global state management. The eCommerce swimlane became its own full-page experience — purpose-built for high-traffic storefronts, with distinct plan sizes, messaging, and a sales-assisted path for enterprise tiers. That separation is what drove +185% eCommerce plan purchases and +289% sales-assisted bookings. Much of the reactive state has since been simplified as the page stabilized, but the swimlane structure and UX patterns established here remain in place today.',
  },
];

export default function WPEPlansPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white">
      <Navigation />

      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link href="/#work-wpengine" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          ← Back to portfolio
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">WP Engine · 2016–2022</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Conversion Optimization</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          WP Engine Hosting Plans
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Six years of iterating on WP Engine&apos;s core purchase funnel — from an agency-built static page to a React-powered, geolocated, A/B-tested swimlane experience that drove the company&apos;s most significant conversion lift.
        </p>
      </header>

      {/* Metrics */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-12 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">2021 Q4 A/B Test Results</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{m.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Goal */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">The Problem</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The plans page offered solution-based packages with 5 unique plan sizes across 4 different tabs. Most plans were hidden behind tab interactions, making it unclear what options existed. WP Engine wasn&apos;t effectively showcasing the value of each solution, causing confusion and decision paralysis — particularly for the new eCommerce tier.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">The Goal</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Reduce the number of visible plan options. Surface all solution types simultaneously so users could self-identify their swimlane before selecting a size. Increase overall signups, grow eCommerce plan adoption, and route dedicated and enterprise prospects into sales-assisted channels.
            </p>
          </div>
        </div>
      </section>

      {/* Iterations */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-12">Evolution</h2>
        <div className="flex flex-col gap-20">
          {iterations.map((it) => (
            'images' in it && it.images ? (
              <div key={it.year + it.label} className="flex flex-col gap-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">{it.year}</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1 mb-3">{it.label}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">{it.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {it.images.map((img) => (
                    <div key={img.src} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                      <div className="px-3 py-2 bg-white dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-700">
                        <span className="text-xs text-slate-500 dark:text-slate-400">{img.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={it.year + it.label} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                  {'href' in it && it.href ? (
                    <a href={it.href} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={(it as { src: string }).src}
                        alt={it.label}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </a>
                  ) : (
                    <Image
                      src={(it as { src: string }).src}
                      alt={it.label}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  )}
                </div>
                <div className="pt-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">{it.year}</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1 mb-3">{it.label}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{it.description}</p>
                  {'href' in it && it.href && (
                    <a href={it.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-cyan-500 transition-colors">
                      View on Wayback Machine →
                    </a>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/#work-wpengine" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
