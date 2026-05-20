import Link from 'next/link';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume', isPage: true },
];

export default function Navbar() {
  return (
    <header className="pt-10 pb-8 text-center border-b border-[var(--border)]">
      <div className="container-custom">
        {/* Name */}
        <a href="#">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight">
            Ikegbulam{' '}
            <span className="accent">U.</span>{' '}
            Paul
          </h1>
        </a>

        {/* Subtitle */}
        <p className="text-[var(--text-muted)] mt-2 mb-6 text-sm md:text-base">
          Software Engineer. Technical Writer. Community Leader.
        </p>

        {/* Nav — always visible, scrollable on mobile */}
        <nav className="flex justify-center gap-6 overflow-x-auto pb-1 scrollbar-hide">
          {links.map((l) =>
            l.isPage ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors whitespace-nowrap flex-shrink-0"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors whitespace-nowrap flex-shrink-0"
              >
                {l.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
