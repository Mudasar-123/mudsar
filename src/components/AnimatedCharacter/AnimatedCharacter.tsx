import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  className?: string;
}

export default function AnimatedCharacter({ className = '' }: Props) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWaving, setIsWaving] = useState(false);
  const [blinkState, setBlinkState] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkState(true);
      setTimeout(() => setBlinkState(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const floatAnimation = async () => {
      while (true) {
        await controls.start({
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
          transition: { duration: 4, ease: 'easeInOut' },
        });
      }
    };
    floatAnimation();
  }, [controls]);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`cursor-pointer select-none ${className}`}
      animate={controls}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 200 300"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(108, 99, 255, 0.4))' }}
      >
        {/* Body */}
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--gradient-start, #6C63FF)" />
            <stop offset="100%" stopColor="var(--gradient-end, #00D4AA)" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#0a0a1a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Robot body */}
        <rect x="55" y="120" width="90" height="100" rx="15" fill="url(#bodyGrad)" opacity="0.9" />

        {/* Screen on chest */}
        <rect x="70" y="140" width="60" height="40" rx="8" fill="url(#screenGrad)" />
        
        {/* Code lines on screen */}
        <motion.rect
          x="78" y="150" width="35" height="3" rx="1.5" fill="#6C63FF"
          animate={{ width: [35, 20, 35] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="78" y="158" width="25" height="3" rx="1.5" fill="#00D4AA"
          animate={{ width: [25, 40, 25] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.rect
          x="78" y="166" width="30" height="3" rx="1.5" fill="#FF6B6B"
          animate={{ width: [30, 15, 30] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />

        {/* Head */}
        <rect x="60" y="50" width="80" height="65" rx="20" fill="url(#bodyGrad)" />

        {/* Antenna */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '100px 50px' }}
        >
          <line x1="100" y1="50" x2="100" y2="25" stroke="var(--gradient-start, #6C63FF)" strokeWidth="3" />
          <motion.circle
            cx="100" cy="20" r="6" fill="var(--gradient-end, #00D4AA)"
            filter="url(#glow)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        {/* Eyes */}
        <motion.ellipse
          cx="82" cy="75"
          rx="10" ry={blinkState ? 1 : 8}
          fill="white"
          transition={{ duration: 0.1 }}
        />
        <motion.ellipse
          cx="118" cy="75"
          rx="10" ry={blinkState ? 1 : 8}
          fill="white"
          transition={{ duration: 0.1 }}
        />
        {/* Pupils */}
        {!blinkState && (
          <>
            <motion.circle
              cx="84" cy="75" r="4" fill="#0a0a1a"
              animate={{ cx: [82, 86, 82] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
              cx="120" cy="75" r="4" fill="#0a0a1a"
              animate={{ cx: [118, 122, 118] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </>
        )}

        {/* Mouth */}
        <motion.path
          d="M 85 95 Q 100 108 115 95"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            d: isWaving
              ? 'M 85 92 Q 100 115 115 92'
              : 'M 85 95 Q 100 108 115 95',
          }}
        />

        {/* Left arm */}
        <motion.g
          animate={
            isWaving
              ? { rotate: [0, -30, 0, -30, 0] }
              : { rotate: [0, 5, 0] }
          }
          transition={
            isWaving
              ? { duration: 0.8, ease: 'easeInOut' }
              : { duration: 3, repeat: Infinity }
          }
          style={{ transformOrigin: '55px 140px' }}
        >
          <rect x="20" y="130" width="35" height="15" rx="7" fill="url(#bodyGrad)" opacity="0.8" />
          <circle cx="20" cy="137" r="10" fill="url(#bodyGrad)" opacity="0.9" />
        </motion.g>

        {/* Right arm */}
        <motion.g
          animate={
            isWaving
              ? { rotate: [0, 30, -10, 30, 0] }
              : { rotate: [0, -5, 0] }
          }
          transition={
            isWaving
              ? { duration: 0.8, ease: 'easeInOut' }
              : { duration: 3, repeat: Infinity, delay: 0.5 }
          }
          style={{ transformOrigin: '145px 140px' }}
        >
          <rect x="145" y="130" width="35" height="15" rx="7" fill="url(#bodyGrad)" opacity="0.8" />
          <circle cx="180" cy="137" r="10" fill="url(#bodyGrad)" opacity="0.9" />
        </motion.g>

        {/* Legs */}
        <motion.rect
          x="68" y="220" width="20" height="40" rx="8"
          fill="url(#bodyGrad)" opacity="0.8"
          animate={{ y: [220, 218, 220] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="112" y="220" width="20" height="40" rx="8"
          fill="url(#bodyGrad)" opacity="0.8"
          animate={{ y: [220, 222, 220] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Feet */}
        <ellipse cx="78" cy="262" rx="15" ry="6" fill="url(#bodyGrad)" opacity="0.7" />
        <ellipse cx="122" cy="262" rx="15" ry="6" fill="url(#bodyGrad)" opacity="0.7" />

        {/* Sparkles */}
        <motion.circle
          cx="40" cy="60" r="3" fill="var(--gradient-start, #6C63FF)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="160" cy="40" r="2" fill="var(--gradient-end, #00D4AA)"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
        />
        <motion.circle
          cx="170" cy="100" r="2.5" fill="#FF6B6B"
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
        />
      </svg>
    </motion.div>
  );
}
