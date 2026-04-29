import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'muhammadmudasar0625@gmail.com',
    href: 'mailto:muhammadmudasar0625@gmail.com',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+92 309 862 4009',
    href: 'tel:+923098624009',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Multan, Pakistan',
    href: null,
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/Mudasar-123',
    href: 'https://github.com/Mudasar-123',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container" ref={ref}>
        <span className="section-tag">&lt; Contact /&gt;</span>
        <h2 className="section-title">
          Get in <span className="accent-text">Touch</span>
        </h2>
        <div className="section-line" />

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="card">
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Information
            </h3>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              I&apos;m open to freelance projects, internships, and collaboration
              opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-3 rounded-lg transition-all hover:translate-x-1"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent-glow)' }}
                  >
                    <i className={item.icon} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-medium block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium no-underline hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="mailto:muhammadmudasar0625@gmail.com"
                className="btn btn-primary"
              >
                <i className="fas fa-paper-plane" /> Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
