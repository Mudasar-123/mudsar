import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{ background: 'var(--bg-primary, #0a0a1a)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        {/* Animated robot face */}
        <motion.svg
          viewBox="0 0 120 120"
          className="w-32 h-32 mx-auto mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#00D4AA" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="80" height="70" rx="20" fill="url(#loaderGrad)" />
          <motion.ellipse
            cx="45" cy="50" rx="8" ry="8"
            fill="white"
            animate={{ ry: [8, 1, 8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.ellipse
            cx="75" cy="50" rx="8" ry="8"
            fill="white"
            animate={{ ry: [8, 1, 8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M 40 72 Q 60 85 80 72"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line x1="60" y1="20" x2="60" y2="5" stroke="#6C63FF" strokeWidth="3" />
          <motion.circle
            cx="60" cy="3" r="4" fill="#00D4AA"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.svg>

        <motion.div
          className="flex gap-2 justify-center mb-4"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-lg font-mono"
          style={{ color: 'var(--text-secondary, #b4b4d0)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
