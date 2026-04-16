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
      <h2 className="text-4xl font-bold mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Skills</span> & Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-blue-400">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
