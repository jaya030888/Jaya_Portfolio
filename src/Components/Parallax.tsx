import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

export default function Parallax({ 
  children, 
  offset = 50,
  clamp = false,
  className,
  style
}: { 
  children?: ReactNode;
  offset?: number;
  clamp?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], clamp ? [0, -offset] : [offset, -offset]);
  const y = useSpring(rawY, { stiffness: 400, damping: 90, mass: 0.1 });

  if (prefersReducedMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ overflow: 'visible', ...style }}>
      <motion.div style={{ y, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    </div>
  );
}
