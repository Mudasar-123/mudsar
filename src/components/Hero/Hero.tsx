import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: '-10%', right: '-5%',
            background: 'var(--accent)',
            opacity: 0.06,
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            bottom: '10%', left: '-10%',
            background: 'var(--gradient-end)',
            opacity: 0.05,
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge mb-6">
              <span className="badge-dot" />
              Available for Work
            </span>

            <p className="text-base mb-2" style={{ color: 'var(--text-secondary)' }}>
              Hi, I&apos;m
            </p>

            <h1
              className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Muhammad{' '}
              <span style={{ color: 'var(--accent)' }}>Mudasar</span>
            </h1>

            <div
              className="text-lg mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-code)', color: 'var(--text-secondary)' }}
            >
              <span style={{ color: 'var(--accent)' }}>&gt;</span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'React Specialist', 2000,
                  'UI/UX Enthusiast', 2000,
                  'Web Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span
                className="inline-block w-0.5 h-5 ml-1"
                style={{
                  background: 'var(--accent)',
                  animation: 'pulse 1s step-end infinite',
                }}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-code" /> View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-envelope" /> Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="terminal-title">mudasar@portfolio:~$</span>
              </div>
              <div className="terminal-body">
                <p><span className="cmd">&gt; whoami</span></p>
                <p className="result">Frontend Developer | React Specialist</p>
                <p className="cmd">&gt; skills --top</p>
                <p className="result">React, JavaScript, TypeScript, Tailwind CSS</p>
                <p><span className="cmd">&gt; location</span></p>
                <p className="result">Multan, Pakistan</p>
                <p><span className="cmd">&gt; education</span></p>
                <p className="result">Islamia University Bahawalpur (2021-2025)</p>
                <p><span className="cmd">&gt; status</span></p>
                <p className="result">&#9989; Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
          Scroll to explore
        </p>
        <i className="fas fa-chevron-down text-sm" style={{ color: 'var(--accent)' }} />
      </motion.div>
    </section>
  );
}
