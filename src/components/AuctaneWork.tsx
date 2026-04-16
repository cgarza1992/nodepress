import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

interface Metric {
  value: string;
  label: string;
}

interface AuctaneWorkProps {
  metrics: Metric[];
  pricingProjects: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}

export function AuctaneWork({ metrics, pricingProjects }: AuctaneWorkProps) {
  return (
    <section id="auctane" className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Auctane</span>
          {' '}Work
        </h2>
        <p className="text-slate-400 text-lg">
          Led pricing and platform consolidation initiatives across the Auctane shipping and logistics portfolio, driving 
          <span className="text-blue-400 font-semibold"> 185% revenue growth</span> while managing 
          <span className="text-blue-400 font-semibold"> $134M+ in ARR</span> across 10 shipping and logistics brands.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
              {metric.value}
            </div>
            <div className="text-slate-400">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Pricing Projects */}
      <div className="mb-20">
        <SectionHeader title="Pricing & Billing Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {pricingProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              url={project.url}
              description={project.description}
              gradient="from-blue-500 to-cyan-500"
              emoji="💳"
            />
          ))}
        </div>
      </div>

      {/* Brand Consolidation */}
      <div>
        <SectionHeader title="Platform Consolidation Journey" />
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Multi-Brand Consolidation</h3>
            <p className="text-slate-300 leading-relaxed">
              Managed the strategic consolidation and integration of 10 shipping & logistics brands (ShipStation, ShipEngine, Stamps.com, Packlink, MetaPack, Endicia, ShippingEasy, ShipWorks, GlobalPost, Return Rabbit). This involved migrating pricing models, consolidating billing systems, and creating unified API experiences that served logistics partners and merchants globally.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Reusable Component Architecture</h3>
            <p className="text-slate-300 leading-relaxed">
              Built scalable component libraries in React and Vue that powered redesigns across multiple Auctane brands and websites. These reusable systems enabled consistent branding, faster development cycles, and reduced code duplication across the entire portfolio while maintaining flexibility for brand-specific customizations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Multi-Brand Ecosystem</h3>
            <p className="text-slate-300 leading-relaxed">
              Successfully managed pricing strategies across Auctane&apos;s diverse shipping brand portfolio (ShipStation, ShipNetwork, 
              ShipBob partners), ensuring seamless data pipeline integrations with HubSpot, Salesforce, Tray, and other enterprise APIs while maintaining distinct brand identities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Data Pipeline & Analytics Architecture</h3>
            <p className="text-slate-300 leading-relaxed">
              Architected and implemented data pipelines that captured user tracking data from Google Analytics and Segment, then routed customer data to appropriate CRM and business tools (HubSpot, Salesforce, etc.) based on territories and business rules. Used Tray.io to facilitate large-scale data movement and orchestration across Auctane brands and systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
