'use client';

import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Auctane", "WP Engine", "Projects", "About", "Contact"];
  const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL || 'https://storybook.christophergarza.dev';

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CG</h2>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
            href={storybookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Component Library
          </a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-slate-800 pt-4">
          {navItems.map((item) => {
            const href = `#${item.toLowerCase().replace(" ", "")}`;
            return (
              <a
                key={item}
                href={href}
                onClick={handleNavClick}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            );
          })}
          <a
            href={storybookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors w-fit"
          >
            Component Library
          </a>
        </div>
      </div>
    </nav>
  );
}
