import Reveal from './Reveal';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: 'Afrimetrics',
    description:
      'Makes it easy for everyday investors to get clarity on NGX-listed stocks. Uses AI to gather raw market data and turn it into structured, sentiment-scored insight, with human analysts kept in the loop for accuracy.',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB', 'Puppeteer', 'LangChain.js'],
    github: '',
    live: 'https://afrimetrics.com',
  },
  {
    title: 'Blockroll',
    description:
      'A fintech platform for managing and tracking investments. Built a full dashboard with real-time data visualization, portfolio analytics, and secure transaction flows.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/ugochukwudev',
    live: 'https://blockroll.app',
  },
  {
    title: 'Daba School',
    description:
      'Tech education platform offering structured programming courses. Implemented content management, student progress tracking, and a video streaming module.',
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Contentful CMS', 'Tailwind CSS'],
    github: '',
    live: 'https://daba.school',
  },
  {
    title: 'DeeXOptions',
    description:
      'A trading platform for buying, selling, and swapping crypto in seconds. Also handles gift card trades, with live rates and a fast order flow.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: '',
    live: 'https://deexoptions.com',
  },
  {
    title: 'Techgix',
    description:
      'A tech blog and community platform. Built a full CMS-driven publishing system with author profiles, comment threads, and newsletter integration.',
    tags: ['Next.js', 'Sanity CMS', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/ugochukwudev',
    live: 'https://techgix.ng',
  },
  {
    title: 'Arewabooks',
    description:
      'A platform built to allow the Hausa community to buy and sell books in their native language. Ships across web and mobile with a shared backend.',
    tags: ['Next.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/ugochukwudev',
    live: 'https://arewabooks.com',
  },
  {
    title: 'Node API Logs',
    description:
      'Developer dashboard for monitoring API health and request logs. Features real-time log streaming, error aggregation, and response time charts.',
    tags: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'Express'],
    github: 'https://github.com/ugochukwudev/Node-API-LOGS',
    live: '',
  },
  {
    title: 'Nuban Prediction',
    description:
      'Predicts the bank a Nigerian NUBAN account number belongs to, without making an API call. Pure logic based on the NUBAN standard.',
    tags: ['Node.js'],
    github: 'https://github.com/ugochukwudev/nuban-prediction',
    live: '',
  },
  {
    title: 'Ivara',
    description:
      'Website for a UK-based tech agency. Integrated Sanity CMS for content editing, with fast static generation and smooth page transitions.',
    tags: ['Next.js', 'Sanity CMS', 'TypeScript', 'Tailwind CSS'],
    github: '',
    live: 'https://ivara.co.uk',
  },
  {
    title: 'Sendmail',
    description:
      'Email delivery API service. Designed a clean REST API for sending transactional emails with template support, delivery tracking, and rate limiting.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'REST API'],
    github: 'https://github.com/ugochukwudev/sendMail',
    live: '',
  },
  {
    title: 'Rust Todo CLI',
    description:
      'A command-line todo app built in Rust. Supports adding, listing, completing, and deleting tasks with persistent local storage.',
    tags: ['Rust'],
    github: 'https://github.com/ugochukwudev/rust_todo_cli',
    live: '',
  },
];

const featured = projects.slice(0, 4);
const rest = projects.slice(4);

function Links({ project }: { project: Project }) {
  return (
    <div className="flex gap-3 ml-4 flex-shrink-0">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
        >
          GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--accent)] hover:underline transition-colors"
        >
          Live ↗
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <hr className="section-divider" />
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Projects</h2>
            <p className="text-[var(--text-muted)] mb-10 text-sm">A selection of things I&apos;ve built.</p>

            {/* Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((project) => (
                <article
                  key={project.title}
                  className="border rounded-lg p-6 transition-colors hover:border-[var(--accent)]"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-[var(--text)]">{project.title}</h3>
                    <Links project={project} />
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded border text-[var(--text-muted)]"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* The rest — compact list */}
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mt-14 mb-2">
              More projects
            </p>
            <div>
              {rest.map((project) => (
                <article
                  key={project.title}
                  className="py-5 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {/* links share the title row so the description spans the full width */}
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-semibold text-[var(--text)]">{project.title}</h3>
                    <Links project={project} />
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">{project.description}</p>
                  <p className="text-xs text-[var(--text-muted)]">{project.tags.join(' · ')}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
