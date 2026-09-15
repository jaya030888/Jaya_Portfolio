import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ImageReveal({ children, className }: { children: ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
        animate={isInView ? { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)' } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%' }}
      >
        <motion.div
          initial={{ scale: 1.2, filter: 'blur(10px)' }}
          animate={isInView ? { scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
