interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
        {label}
      </p>
      <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && <p className="text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}
