import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    period: '2024 – Present',
    title: 'Frontend Developer Intern',
    company: 'Ace Connect Multan',
    subtitle: 'Through PSEB Program',
    description: 'Working on frontend development projects using React and modern web technologies, gaining hands-on experience in building real-world applications.',
    tasks: [
      'Building responsive web applications with React and Tailwind CSS',
      'Collaborating with team on UI/UX implementation',
      'Learning industry best practices for frontend development',
      'Working with version control and agile methodologies',
    ],
  },
  {
    period: '2023 – Present',
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    subtitle: 'Remote',
    description: 'Delivering high-quality frontend solutions for clients, focusing on responsive design and modern frameworks.',
    tasks: [
      'Building custom websites and web applications',
      'Converting designs to pixel-perfect code',
      'Implementing responsive and mobile-first designs',
      'Client communication and project management',
    ],
  },
  {
    period: '2022 – Present',
    title: 'Personal Projects & Open Source',
    company: 'Self-Initiated',
    subtitle: 'Continuous Learning',
    description: 'Building portfolio projects and contributing to open source to strengthen skills and explore new technologies.',
    tasks: [
      'Portfolio website with AI chatbot and PWA support',
      'E-commerce and dashboard UI projects',
      'Exploring TypeScript, Next.js, and modern tooling',
      'Active GitHub contributor',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; Experience /&gt;</span>
        <h2 className="section-title">
          Professional <span className="accent-text">Journey</span>
        </h2>
        <div className="section-line" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5"
            style={{ background: 'var(--border-color)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="relative pl-14 md:pl-16 mb-10 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Dot */}
              <div
                className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full border-2"
                style={{
                  background: 'var(--accent)',
                  borderColor: 'var(--accent)',
                  boxShadow: '0 0 10px var(--accent-glow)',
                }}
              />

              <div className="card">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: 'var(--accent-glow)',
                    color: 'var(--accent)',
                  }}
                >
                  {exp.period}
                </span>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {exp.title} — {exp.company}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {exp.subtitle}
                </p>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.description}
                </p>
                <ul className="space-y-1.5">
                  {exp.tasks.map((task) => (
                    <li
                      key={task}
                      className="text-sm flex items-start gap-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
