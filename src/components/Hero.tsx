interface CTA {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
}

export function Hero({ title, subtitle, image, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              Christopher Garza
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={ctaPrimary.href}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition transform hover:scale-105"
            >
              {ctaPrimary.text}
            </a>
            <a
              href={ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-400 rounded-lg font-semibold transition"
            >
              {ctaSecondary.text}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-2xl opacity-20"></div>
            <img
              src={image}
              alt="Christopher on motorcycle"
              className="relative rounded-xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 w-full max-w-xs object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
