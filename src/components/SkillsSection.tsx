interface Skill {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Expertise
        </p>
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Skills & Tools
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm dark:shadow-none">
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400 mb-6">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={process.env.NEXT_PUBLIC_STORYBOOK_URL || 'https://storybook.christophergarza.dev'}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>View my component library</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
