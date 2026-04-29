import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import { education } from '../../utils/portfolioData';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="education"
      className="relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          My academic background
        </motion.p>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
            whileHover={{
              boxShadow: '0 20px 60px var(--shadow-color)',
            }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: 'var(--gradient-start)' }}
            />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <FaGraduationCap size={36} color="white" />
                </motion.div>

                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {education.degree}
                  </h3>
                  <p
                    className="text-lg font-semibold gradient-text mb-1"
                  >
                    {education.institution}
                  </p>
                  <p
                    className="text-sm font-mono"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {education.period}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaBook style={{ color: 'var(--gradient-start)' }} />
                  <h4
                    className="font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Relevant Coursework
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {education.coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="px-5 py-2.5 rounded-full text-sm font-medium"
                      style={{
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                      }}
                      whileHover={{
                        background:
                          'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                        color: 'white',
                        scale: 1.05,
                      }}
                    >
                      {course}
                    </motion.span>
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
