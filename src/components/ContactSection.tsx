interface ContactSectionProps {
  email: string;
  message: string;
}

export function ContactSection({ email, message }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center shadow-sm dark:shadow-none">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
          Let's Connect
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
          {message}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
