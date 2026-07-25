'use client';

import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Reveal from './Reveal';

const socials = [
  { label: 'GitHub', href: 'https://github.com/ugochukwudev', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ugochukwu-paul-b62b53258/', icon: FaLinkedinIn },
  { label: 'Twitter', href: 'https://x.com/impulsejs', icon: FaXTwitter },
];

export default function Contact() {
  return (
    <>
      <hr className="section-divider" />
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Get in touch</h2>
            <p className="text-[var(--text-muted)] mb-8 text-sm max-w-md">
              Open to new opportunities, collaborations, or just a good conversation about software
              and developer communities. Drop me a line.
            </p>

            <a
              href="mailto:paulambrose5002@gmail.com"
              className="inline-block font-medium hover:underline mb-8"
              style={{ color: 'var(--accent)' }}
            >
              paulambrose5002@gmail.com
            </a>

            <div className="flex gap-6 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <s.icon size={16} aria-hidden="true" />
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <hr className="section-divider" />
      <footer className="py-6">
        <div className="container-custom">
          <p className="text-xs text-[var(--text-muted)] text-center">
            &copy; {new Date().getFullYear()} Ikegbulam Ugochukwu Paul.
          </p>
        </div>
      </footer>
    </>
  );
}
