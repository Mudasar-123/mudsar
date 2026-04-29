import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const themeIcons: Record<string, string> = {
  dark: '🌙',
  light: '☀️',
  cyberpunk: '🤖',
  sunset: '🌅',
};

const themeLabels: Record<string, string> = {
  dark: 'Dark',
  light: 'Light',
  cyberpunk: 'Cyber',
  sunset: 'Sunset',
};

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full transition-all"
        style={{
          background: 'var(--bg-card)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
        }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPalette size={18} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="absolute right-0 mt-2 p-3 rounded-2xl glass min-w-[160px]"
            style={{ border: '1px solid var(--border-color)' }}
          >
            {themes.map((t) => (
              <motion.button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  theme === t ? 'ring-2' : ''
                }`}
                style={{
                  background: theme === t ? 'var(--bg-card-hover)' : 'transparent',
                  color: 'var(--text-primary)',
                  ['--tw-ring-color' as string]: 'var(--gradient-start)',
                }}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg">{themeIcons[t]}</span>
                {themeLabels[t]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
