const socials = [
  { label: 'GitHub', href: 'https://github.com/ugochukwudev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ugochukwu-paul-b62b53258/' },
  { label: 'Twitter / X', href: 'https://x.com/impulsejs' },
];

export default function Contact() {
  return (
    <>
      <hr className="section-divider" />
      <section id="contact" className="section-padding">
        <div className="container-custom">
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
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <hr className="section-divider" />
      <footer className="py-6">
        <div className="container-custom">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Ikegbulam Ugochukwu Paul. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
