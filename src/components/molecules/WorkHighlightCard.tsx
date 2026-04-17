interface WorkHighlightCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export function WorkHighlightCard({ title, description, tags, href }: WorkHighlightCardProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/50 transition-colors duration-300">
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-white font-semibold text-base leading-snug">{title}</h4>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-400 hover:text-blue-300 whitespace-nowrap shrink-0 transition-colors"
          >
            View Live →
          </a>
        )}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 border border-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
