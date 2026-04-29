import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../utils/portfolioData';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Some of my recent work
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
              >
                {/* Project image/emoji area */}
                <div
                  className="h-48 flex items-center justify-center text-7xl relative overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--bg-secondary), var(--bg-card))',
                  }}
                >
                  <motion.span
                    animate={
                      hoveredIndex === i
                        ? { scale: 1.3, rotate: 10 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.span>

                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === i ? 0.2 : 0 }}
                  />

                  {/* Hover links */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--gradient-start)',
                          border: '1px solid var(--border-color)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))',
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
