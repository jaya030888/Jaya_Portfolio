import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import type { ElementType } from 'react';

type AnimatedTextProps = {
  text: string | string[];
  el?: ElementType;
  className?: string;
  delay?: number;
};

const defaultAnimations: Variants = {
  hidden: { y: '120%' },
  visible: { 
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 1 }
  },
};

export default function AnimatedText({
  text,
  el: Wrapper = 'p',
  className,
  delay = 0
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className} ref={ref}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
        style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.2em' }}
      >
        {textArray.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
            <motion.span
              style={{ display: 'inline-block', transformOrigin: 'bottom' }}
              variants={defaultAnimations}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
