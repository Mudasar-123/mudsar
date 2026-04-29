import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket } from 'react-icons/fa';
import gsap from 'gsap';
import { personalInfo } from '../../utils/portfolioData';

const highlights = [
  { icon: FaCode, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: FaMobileAlt, title: 'Responsive', desc: 'Mobile-first design approach' },
  { icon: FaPaintBrush, title: 'UI/UX', desc: 'Beautiful, intuitive interfaces' },
  { icon: FaRocket, title: 'Performance', desc: 'Optimized for speed & efficiency' },
];

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Happy Clients' },
  { value: '∞', label: 'Lines of Code' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, [inView]);

  return (
    <section id="about" className="relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Get to know me better
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="rounded-2xl p-8 glass"
              style={{ border: '1px solid var(--border-color)' }}
            >
              <div className="mb-6">
                <span
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: 'var(--gradient-start)',
                    color: 'white',
                    opacity: 0.8,
                  }}
                >
                  WHO AM I?
                </span>
              </div>
              {personalInfo.bio.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="mb-4 leading-relaxed text-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {line.trim()}
                </p>
              ))}
              <div className="mt-6 flex gap-3">
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'var(--bg-card)',
                    color: 'var(--gradient-start)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  🎓 IUB Graduate
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'var(--bg-card)',
                    color: 'var(--gradient-end)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  📍 Multan, PK
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl p-6 text-center transition-all duration-300 group cursor-pointer"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px var(--shadow-color)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  }}
                >
                  <item.icon size={24} color="white" />
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
