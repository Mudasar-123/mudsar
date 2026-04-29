import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../utils/portfolioData';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="experience"
      className="relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          My professional journey
        </motion.p>

        <VerticalTimeline lineColor="var(--border-color)">
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px var(--shadow-color)',
                borderRadius: '16px',
                padding: '2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid var(--border-color)',
              }}
              date={exp.period}
              dateClassName="text-sm font-mono"
              iconStyle={{
                background:
                  'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                boxShadow: '0 0 20px var(--shadow-color)',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              icon={<span>{exp.icon}</span>}
            >
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {exp.title}
              </h3>
              <h4
                className="text-base font-semibold mb-4 gradient-text"
              >
                {exp.company}
              </h4>
              <ul className="space-y-2">
                {exp.description.map((desc, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + j * 0.1 }}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                      }}
                    />
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
