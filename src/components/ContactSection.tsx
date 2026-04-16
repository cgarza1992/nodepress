interface ContactSectionProps {
  email: string;
  message: string;
}

export function ContactSection({ email, message }: ContactSectionProps) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
        </h2>
        <p className="text-lg text-slate-300 mb-8">
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
