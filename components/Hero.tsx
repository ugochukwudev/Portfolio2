import Image from 'next/image';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ugochukwudev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ugochukwu-paul-b62b53258/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/impulsejs',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-12 md:gap-16">

          {/* Left — text */}
          <div className="flex-1">
            {/* Role labels */}
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--accent)' }}>
              Software Engineer &bull; Technical Writer &bull; Community Leader
            </p>

            {/* Greeting */}
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight mb-4">
              Hello, I&apos;m{' '}
              <span className="accent">Ugochukwu</span>!
            </h2>

            {/* Tagline */}
            <p className="text-[var(--text-muted)] mb-3 leading-relaxed">
              Fullstack developer building scalable web products, front to back.
            </p>

            {/* Description */}
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              I&apos;ve spent 4+ years shipping software across the entire stack — crafting
              clean interfaces with React and Next.js, and building reliable APIs with Node.js,
              Express, and PostgreSQL. I also write technical content and help build engineering
              communities.
            </p>

            {/* Connect with me */}
            <div>
              <p className="text-sm font-semibold text-[var(--text)] mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                width: 260,
                height: 320,
                background: 'var(--border)',
                boxShadow: '0 0 0 1.5px var(--border), 0 0 0 3.5px var(--accent), 0 0 0 5px var(--border)',
              }}
            >
              <Image
                src="/profile.png"
                alt="Ikegbulam Ugochukwu Paul"
                width={260}
                height={320}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
