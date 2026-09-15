import { useRef } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface MarqueeProps {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export default function Marquee({ children, baseVelocity = 2, className }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax ${className}`} style={{ overflow: 'hidden', margin: 0, whiteSpace: 'nowrap', display: 'flex', flexWrap: 'nowrap' }}>
      <motion.div className="scroller" style={{ x, display: 'flex', whiteSpace: 'nowrap', gap: '20px' }}>
        <span style={{ display: 'block' }}>{children} </span>
        <span style={{ display: 'block' }}>{children} </span>
        <span style={{ display: 'block' }}>{children} </span>
        <span style={{ display: 'block' }}>{children} </span>
      </motion.div>
    </div>
  );
}
