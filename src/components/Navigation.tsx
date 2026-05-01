'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navItems = ['Auctane', 'WP Engine', 'Projects', 'About', 'Contact'];
  const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL || 'https://storybook.christophergarza.dev';

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* SSR guard */ }
  };

  const handleNavClick = () => setIsOpen(false);

  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );

  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 backdrop-blur-sm dark:bg-slate-950 sticky top-0 z-50">
      {/* Header row */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
          CG
        </h2>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a
                key={item}
                href={href}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Resume
          </a>
          <a
            href={storybookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            Component Library
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500/50 transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — slides open below the header row */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-4 flex flex-col gap-1 border-t border-slate-200 dark:border-slate-800">
          {navItems.map((item) => {
            const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a
                key={item}
                href={href}
                onClick={handleNavClick}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-3 border-b border-slate-100 dark:border-slate-800/60 last:border-0 transition-colors"
              >
                {item}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-3 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors w-fit"
          >
            Resume
          </a>
          <a
            href={storybookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-3 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/60 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors w-fit"
          >
            Component Library
          </a>
        </div>
      </div>
    </nav>
  );
}
