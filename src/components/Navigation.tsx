export function Navigation() {
  const navItems = ["Auctane", "WP Engine", "Projects", "About", "Contact"];

  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CG</h2>
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const href = `#${item.toLowerCase().replace(" ", "")}`;
            return (
              <a
                key={item}
                href={href}
                className="relative text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            );
          })}
          <a
            href="https://storybook.christophergarza.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Component Library
          </a>
        </div>
      </div>
    </nav>
  );
}
