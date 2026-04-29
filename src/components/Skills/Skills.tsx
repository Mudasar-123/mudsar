import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../utils/portfolioData';

const categories = ['All', 'Frontend', 'Framework', 'Tools'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Technologies I work with
        </motion.p>

        {/* Category filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background:
                  activeCategory === cat
                    ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                    : 'var(--bg-card)',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-color)'}`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl p-6 text-center cursor-pointer transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px ${skill.color}20`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}10, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon size={40} color={skill.color} />
                  </motion.div>

                  <h3
                    className="font-bold text-sm mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {skill.name}
                  </h3>

                  {/* Skill bar */}
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                    />
                  </div>
                  <span
                    className="text-xs mt-2 block font-mono"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
