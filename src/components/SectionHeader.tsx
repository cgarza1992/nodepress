interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  const [highlight, ...rest] = title.split(" ");

  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{highlight}</span> {rest.join(" ")}
      </h2>
      {description && <p className="text-slate-400">{description}</p>}
    </div>
  );
}
