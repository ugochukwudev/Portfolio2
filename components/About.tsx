const tags = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express',
  'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs',
  'Tailwind CSS', 'Docker', 'AWS', 'Git',
];

export default function About() {
  return (
    <>
      <hr className="section-divider" />
      <section id="about" className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-8">About</h2>
          <div className="max-w-2xl space-y-4 text-[var(--text-muted)] leading-relaxed">
            <p>
              I&apos;m Ugochukwu — a fullstack software engineer based in Nigeria with 4+ years of
              experience building web products end to end. I enjoy working across the whole stack:
              clean, accessible UIs on the frontend and well-structured, performant services on
              the backend.
            </p>
            <p>
              My frontend work is centered on React and Next.js. On the backend I reach for Node.js
              (Express and NestJS), PostgreSQL, and MongoDB. I&apos;ve shipped fintech platforms,
              developer tools, content platforms, and community products.
            </p>
            <p>
              Beyond engineering, I write technical content and help build developer communities.
              I believe good software is built by people who communicate clearly — in code and in
              writing.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full border border-[var(--border)] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
