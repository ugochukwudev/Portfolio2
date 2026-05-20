const groups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'Socket.io'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
  },
  {
    label: 'Tools & Cloud',
    items: ['Git', 'Docker', 'AWS', 'Google Cloud', 'Railway', 'Jest', 'Webpack'],
  },
];

export default function Skills() {
  return (
    <>
      <hr className="section-divider" />
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-10">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold text-[var(--text)] mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full border text-[var(--text-muted)]"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
