interface FooterProps {
  year: number;
  name: string;
  builtWith: string;
}

export function Footer({ year, name, builtWith }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
      <p>&copy; {year} {name}. Built with {builtWith}.</p>
    </footer>
  );
}
