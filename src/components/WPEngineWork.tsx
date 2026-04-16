import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

interface WPEngineWorkProps {
  pricingProjects: Array<{
    name: string;
    url: string;
    description: string;
  }>;
  platformProducts: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}

export function WPEngineWork({ pricingProjects, platformProducts }: WPEngineWorkProps) {
  return (
    <section id="wpengine" className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WP Engine</span>
          {' '}Work
        </h2>
        <p className="text-slate-400 text-lg">
          Built and optimized pricing pages and platform products for WP Engine&apos;s WordPress-focused portfolio, supporting 
          <span className="text-blue-400 font-semibold"> 150K+ managed WordPress sites</span> and enabling key revenue streams.
        </p>
      </div>

      {/* Pricing Projects */}
      <div className="mb-20">
        <SectionHeader title="Pricing & Plan Pages" />
        <div className="grid md:grid-cols-2 gap-6">
          {pricingProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              url={project.url}
              description={project.description}
              gradient="from-emerald-500 to-teal-500"
              emoji="💰"
            />
          ))}
        </div>
      </div>

      {/* Platform Products */}
      <div>
        <SectionHeader title="WordPress Platform Products" />
        <div className="grid md:grid-cols-3 gap-6">
          {platformProducts.map((product, idx) => (
            <ProjectCard
              key={idx}
              name={product.name}
              url={product.url}
              description={product.description}
              gradient="from-purple-500 to-pink-500"
              emoji="📦"
            />
          ))}
        </div>
      </div>

      {/* Impact Statement */}
      <div className="mt-20 bg-slate-800/30 border border-slate-700 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-4 text-blue-400">Platform Innovation</h3>
        <p className="text-slate-300 leading-relaxed">
          Developed and maintained cutting-edge WordPress platform products that empower agencies and developers. From managed 
          hosting (WP Engine) to local development tools (LocalWP) to website builders (StudioPress), created cohesive pricing 
          and product experiences that drove adoption and retention across the entire ecosystem.
        </p>
      </div>
    </section>
  );
}
