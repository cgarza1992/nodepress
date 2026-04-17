export interface NarrativeItem {
  title: string;
  description: string;
}

interface NarrativeSectionProps {
  items: NarrativeItem[];
}

export function NarrativeSection({ items }: NarrativeSectionProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-20">
      {items.map((item) => (
        <div key={item.title} className="border-l-2 border-blue-500/40 pl-6">
          <h4 className="text-white font-semibold text-base mb-3">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
