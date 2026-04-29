import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; Education /&gt;</span>
        <h2 className="section-title">
          Academic <span className="accent-text">Background</span>
        </h2>
        <div className="section-line" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'var(--accent-glow)' }}
              >
                <i className="fas fa-graduation-cap text-2xl" style={{ color: 'var(--accent)' }} />
              </div>

              <div className="flex-1">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
                >
                  2021 – 2025
                </span>

                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Bachelor of Science in Information Technology
                </h3>

                <p className="text-sm mb-4" style={{ color: 'var(--accent)' }}>
                  Islamia University of Bahawalpur
                </p>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Specializing in Web Development and Software Engineering with a strong
                  foundation in programming, databases, and modern web technologies.
                </p>

                <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Key Coursework:
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Web Development',
                    'Data Structures & Algorithms',
                    'Database Systems',
                    'Software Engineering',
                    'Object-Oriented Programming',
                    'Computer Networks',
                  ].map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span style={{ color: 'var(--accent)' }}>•</span>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
