import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) { clearInterval(timer); return 100; }
        return prev + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{ background: '#0a0f1c' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-code, monospace)', color: '#00e676' }}
      >
        &lt;/MM&gt;
      </div>
      <div className="text-sm mb-4" style={{ color: '#8892a8' }}>
        Loading Portfolio
      </div>
      <div
        className="w-48 h-1 rounded-full overflow-hidden"
        style={{ background: '#1e2a45' }}
      >
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{ width: `${percent}%`, background: '#00e676' }}
        />
      </div>
      <div className="mt-3 text-xs" style={{ color: '#5a6478' }}>
        {percent}%
      </div>
    </motion.div>
  );
}
