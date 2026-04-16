interface AboutSectionProps {
  profileImage: string;
  title: string;
  bio: string;
  highlights: string[];
}

export function AboutSection({ profileImage, title, bio, highlights }: AboutSectionProps) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">About</span> Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {bio}
          </p>
          <div className="space-y-4">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-1 h-1 mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                <p className="text-slate-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profile"
            className="w-64 h-64 rounded-2xl border border-slate-700 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
