interface ProjectCardProps {
  name: string;
  url: string;
  description: string;
  gradient: string;
  emoji: string;
}

export function ProjectCard({ name, url, description, gradient, emoji }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all group shadow-sm dark:shadow-none"
    >
      <div className={`h-1 bg-gradient-to-r ${gradient}`}></div>
      <div className="pt-6 px-6 pb-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">{name}</h3>
          <span className="text-2xl">{emoji}</span>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
      </div>
    </a>
  );
}
