import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
        {count}+
      </div>
      <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; About Me /&gt;</span>
        <h2 className="section-title">
          Get to know me <span className="accent-text">better</span>
        </h2>
        <div className="section-line" />

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Counter target={2} label="Years Experience" />
          <Counter target={6} label="Projects Built" />
          <Counter target={14} label="Technologies" />
          <Counter target={50} label="GitHub Commits" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Profile photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <div
                className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: 'var(--accent)' }}
              >
                <img
                  src="/assets/images/profile.jpg"
                  alt="Muhammad Mudasar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="absolute -top-3 -left-3 px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  background: 'var(--accent)',
                  color: '#000',
                }}
              >
                2+ Years
              </span>
              <span
                className="absolute -top-3 -right-3 px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  background: 'var(--accent)',
                  color: '#000',
                }}
              >
                6+ Projects
              </span>
              <span
                className="absolute -bottom-3 right-4 px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  background: 'var(--accent)',
                  color: '#000',
                }}
              >
                Developer
              </span>
            </div>
          </motion.div>

          {/* Code editor about */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="code-editor mb-6">
              <div className="code-header">
                <div className="dots flex gap-1.5">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="code-filename">about.js</span>
                <span className="code-lang">JavaScript</span>
              </div>
              <div className="code-body">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
{`const `}<span className="var">mudasar</span>{` = {
  `}<span className="prop">name</span>{`: `}<span className="str">&quot;Muhammad Mudasar&quot;</span>{`,
  `}<span className="prop">title</span>{`: `}<span className="str">&quot;Frontend Developer&quot;</span>{`,
  `}<span className="prop">location</span>{`: `}<span className="str">&quot;Multan, Pakistan&quot;</span>{`,
  `}<span className="prop">education</span>{`: `}<span className="str">&quot;BS IT - IUB&quot;</span>{`,
  `}<span className="prop">passions</span>{`: [`}<span className="str">&quot;Clean Code&quot;</span>{`, `}<span className="str">&quot;React&quot;</span>{`,
    `}<span className="str">&quot;Web Dev&quot;</span>{`, `}<span className="str">&quot;UI Design&quot;</span>{`],
  `}<span className="prop">available</span>{`: `}<span className="bool">true</span>{`,
};`}
                </pre>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a passionate Frontend Developer crafting beautiful, responsive web
              experiences with modern technologies. Currently pursuing BS IT at{' '}
              <span className="accent-text">Islamia University Bahawalpur</span>, I
              specialize in React, Tailwind CSS, and JavaScript. I love turning creative
              designs into pixel-perfect, high-performance web applications.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'fas fa-rocket', text: 'Passionate Developer' },
                { icon: 'fas fa-briefcase', text: 'Available for Work' },
                { icon: 'fas fa-map-marker-alt', text: 'Multan, Pakistan' },
                { icon: 'fas fa-graduation-cap', text: 'BS IT — IUB (2021-2025)' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="card flex items-center gap-3 !p-3"
                >
                  <i className={item.icon} style={{ color: 'var(--accent)', fontSize: '0.9rem' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
