import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  icon: string;
  category: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website with AI Chat',
    description: 'Personal portfolio with AI chatbot, 4 themes, PWA support, animated characters, particle backgrounds, and glassmorphism UI.',
    icon: 'fas fa-robot',
    category: 'featured',
    tags: ['React', 'TypeScript', 'Tailwind', 'PWA'],
    year: '2025',
    featured: true,
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Responsive admin dashboard for e-commerce with charts, product management, and order tracking.',
    icon: 'fas fa-chart-line',
    category: 'frontend',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    year: '2024',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with location search, forecasts, and beautiful animations.',
    icon: 'fas fa-cloud-sun',
    category: 'frontend',
    tags: ['JavaScript', 'API', 'CSS3'],
    year: '2024',
  },
  {
    title: 'Task Manager',
    description: 'Full-featured to-do application with drag & drop, categories, priorities, and local storage.',
    icon: 'fas fa-tasks',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'DnD'],
    year: '2024',
  },
  {
    title: 'Restaurant Landing Page',
    description: 'Modern restaurant website with menu showcase, reservation form, and responsive gallery.',
    icon: 'fas fa-utensils',
    category: 'frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    year: '2023',
  },
  {
    title: 'Blog Platform UI',
    description: 'Clean blog platform interface with article cards, categories, and reading time estimates.',
    icon: 'fas fa-blog',
    category: 'frontend',
    tags: ['React', 'Bootstrap', 'Responsive'],
    year: '2023',
  },
];

const filters = ['all', 'featured', 'frontend'];

export default function Projects() {
  const [active, setActive] = useState('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; Projects /&gt;</span>
        <h2 className="section-title">
          Things I&apos;ve <span className="accent-text">built</span>
        </h2>
        <div className="section-line" />

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all border-none capitalize"
              style={{
                background: active === f ? 'var(--accent)' : 'var(--bg-card)',
                color: active === f ? '#000' : 'var(--text-secondary)',
                border: active === f ? 'none' : '1px solid var(--border-color)',
              }}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className="card relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {project.featured && (
                <span
                  className="absolute top-3 right-3 px-2 py-0.5 text-xs font-bold rounded"
                  style={{ background: 'var(--accent)', color: '#000' }}
                >
                  Featured
                </span>
              )}

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'var(--accent-glow)',
                }}
              >
                <i className={project.icon} style={{ color: 'var(--accent)', fontSize: '1.3rem' }} />
              </div>

              <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <i className="far fa-calendar" />
                <span>{project.year}</span>
              </div>

              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      background: 'var(--bg-secondary)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
