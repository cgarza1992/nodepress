interface WorkHighlightCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export function WorkHighlightCard({ title, description, tags, href }: WorkHighlightCardProps) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300
        hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1
        ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-slate-900 dark:text-white font-semibold text-base leading-snug">{title}</h4>
        {href && (
          <span className="text-xs text-blue-600 dark:text-blue-400 whitespace-nowrap shrink-0">
            View Live →
          </span>
        )}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
