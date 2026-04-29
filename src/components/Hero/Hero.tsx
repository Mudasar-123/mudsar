import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import gsap from 'gsap';
import AnimatedCharacter from '../AnimatedCharacter/AnimatedCharacter';
import { personalInfo } from '../../utils/portfolioData';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { width: 0 },
        {
          width: '100%',
          duration: 1.5,
          stagger: 0.3,
          ease: 'power3.inOut',
          delay: 0.5,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const typingSequence = personalInfo.typingTexts.flatMap((text) => [text, 2000]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--gradient-start)', top: '-10%', left: '-10%' }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'var(--gradient-end)', bottom: '-10%', right: '-10%' }}
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="section-container grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.p
            className="text-sm font-mono mb-4 tracking-widest uppercase"
            style={{ color: 'var(--gradient-end)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to my world
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <div className="hero-line h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))' }} />

          <div className="text-2xl md:text-3xl font-semibold mb-6 h-12" style={{ color: 'var(--text-secondary)' }}>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <motion.p
            className="text-lg mb-8 max-w-xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building beautiful, responsive web experiences with modern technologies.
            Turning ideas into pixel-perfect reality.
          </motion.p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--shadow-color)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
              style={{
                border: '2px solid var(--gradient-start)',
                color: 'var(--text-primary)',
              }}
              whileHover={{ scale: 1.05, background: 'var(--bg-card)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
              style={{
                border: '2px solid var(--gradient-end)',
                color: 'var(--text-primary)',
              }}
              whileHover={{ scale: 1.05, background: 'var(--bg-card)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Resume
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt style={{ color: 'var(--gradient-start)' }} />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope style={{ color: 'var(--gradient-end)' }} />
              {personalInfo.email}
            </span>
          </div>
        </motion.div>

        {/* Animated character */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <AnimatedCharacter className="w-64 h-80 md:w-80 md:h-96" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: '2px solid var(--gradient-start)' }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ background: 'var(--gradient-start)' }}
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
