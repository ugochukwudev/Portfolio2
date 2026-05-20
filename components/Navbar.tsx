'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume', isPage: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pt-10 pb-8 text-center border-b border-[var(--border)]">
      <div className="container-custom">
        {/* Name */}
        <a href="#" className="inline-block">
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

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-8">
          {links.map((l) =>
            l.isPage ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close ✕' : 'Menu ☰'}
          </button>
          {menuOpen && (
            <nav className="flex flex-col items-center gap-4 mt-4">
              {links.map((l) =>
                l.isPage ? (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
