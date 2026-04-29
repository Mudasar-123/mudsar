import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percent: number;
  icon: string;
  category: string;
  level: string;
}

const skills: Skill[] = [
  { name: 'HTML5', percent: 90, icon: 'fab fa-html5', category: 'frontend', level: 'Expert' },
  { name: 'CSS3', percent: 85, icon: 'fab fa-css3-alt', category: 'frontend', level: 'Expert' },
  { name: 'JavaScript', percent: 80, icon: 'fab fa-js-square', category: 'frontend', level: 'Advanced' },
  { name: 'TypeScript', percent: 65, icon: 'fas fa-code', category: 'frontend', level: 'Intermediate' },
  { name: 'React', percent: 75, icon: 'fab fa-react', category: 'framework', level: 'Advanced' },
  { name: 'Tailwind CSS', percent: 80, icon: 'fas fa-wind', category: 'framework', level: 'Advanced' },
  { name: 'Bootstrap', percent: 85, icon: 'fab fa-bootstrap', category: 'framework', level: 'Expert' },
  { name: 'Git', percent: 75, icon: 'fab fa-git-alt', category: 'tools', level: 'Advanced' },
  { name: 'GitHub', percent: 80, icon: 'fab fa-github', category: 'tools', level: 'Advanced' },
  { name: 'VS Code', percent: 90, icon: 'fas fa-laptop-code', category: 'tools', level: 'Expert' },
  { name: 'Vite', percent: 75, icon: 'fas fa-bolt', category: 'tools', level: 'Advanced' },
  { name: 'Figma', percent: 60, icon: 'fab fa-figma', category: 'tools', level: 'Intermediate' },
  { name: 'Vercel', percent: 70, icon: 'fas fa-cloud', category: 'tools', level: 'Intermediate' },
  { name: 'Netlify', percent: 65, icon: 'fas fa-server', category: 'tools', level: 'Intermediate' },
];

const filters = ['all', 'frontend', 'framework', 'tools'];

function SkillCircle({ percent, inView }: { percent: number; inView: boolean }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-20 h-20 mx-auto mb-3">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="6"
        />
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-sm font-semibold"
        style={{ color: 'var(--text-primary)' }}
      >
        {percent}%
      </span>
    </div>
  );
}

function levelColor(level: string) {
  switch (level) {
    case 'Expert': return '#00e676';
    case 'Advanced': return '#00b0ff';
    case 'Intermediate': return '#ffab00';
    default: return '#ff5252';
  }
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; Skills /&gt;</span>
        <h2 className="section-title">
          Technologies I <span className="accent-text">work with</span>
        </h2>
        <div className="section-line" />

        {/* Filter buttons */}
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

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <SkillCircle percent={skill.percent} inView={inView} />
              <i
                className={`${skill.icon} text-xl mb-2`}
                style={{ color: 'var(--accent)' }}
              />
              <h4
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {skill.name}
              </h4>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  color: levelColor(skill.level),
                  background: `${levelColor(skill.level)}15`,
                }}
              >
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
