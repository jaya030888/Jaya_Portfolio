import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoverText, setHoverText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Exact position for the small dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Delayed spring position for the outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if mobile/touch
    if (window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window)) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const book = target.closest('.book');
      const clickable = target.closest('a, button, input, textarea');
      
      if (book) {
        setIsHovering(true);
        setHoverText('VIEW');
      } else if (clickable) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring / Hover State */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: isHovering && hoverText ? 80 : isHovering ? 50 : 36,
          height: isHovering && hoverText ? 80 : isHovering ? 50 : 36,
          backgroundColor: isHovering && hoverText ? 'var(--pink)' : 'transparent',
          borderColor: isHovering && hoverText ? 'transparent' : 'var(--ink)',
          scale: isHovering && !hoverText ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {hoverText && (
          <motion.span 
            className="cursor-text"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
