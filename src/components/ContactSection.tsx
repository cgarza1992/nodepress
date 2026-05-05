'use client';

import { CopyButton } from '@/components/CopyButton';

interface ContactSectionProps {
  email: string;
  message: string;
  linkedin: string;
}

export function ContactSection({ email, message, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center shadow-sm dark:shadow-none">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          {message}
        </p>

        {/* Email address display with copy button */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-sm font-mono text-slate-600 dark:text-slate-300 select-all">
            {email}
          </span>
          <CopyButton textToCopy={email} ariaLabel="Copy email address" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${email}`}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
          >
            Send Me an Email
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold rounded-lg transition-all duration-300 text-center"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
