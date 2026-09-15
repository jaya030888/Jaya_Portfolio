import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (isMobile) {
    useEffect(() => onComplete(), [onComplete]);
    return null;
  }

  return (
    <motion.div
      initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--ink)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--cream)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '0.2em' }}>JAYA PATEL</span>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          style={{ height: '2px', backgroundColor: 'var(--pink)', marginTop: '10px' }}
        />
      </motion.div>
    </motion.div>
  );
}
