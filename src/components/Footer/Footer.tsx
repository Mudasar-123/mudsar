import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../utils/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Decorative top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--gradient-start), var(--gradient-end), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.02 }}
          >
            {'<Mudasar />'}
          </motion.h2>
          <p
            className="max-w-md mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building the web, one pixel at a time.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {[
            { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
            {
              icon: FaEnvelope,
              href: `mailto:${personalInfo.email}`,
              label: 'Email',
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
              }}
              whileHover={{
                y: -4,
                background:
                  'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                color: 'white',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div
          className="text-center text-sm py-6"
          style={{
            borderTop: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
          }}
        >
          <p className="flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500" size={12} /> by{' '}
            <span className="gradient-text font-semibold">Muhammad Mudasar</span>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center text-white z-50"
        style={{
          background:
            'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
        }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
