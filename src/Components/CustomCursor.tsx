import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoverText, setHoverText] = useState('');
  const [hoverPreview, setHoverPreview] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea');
      const textCursor = target.closest('[data-cursor-text]') as HTMLElement;
      const previewCursor = target.closest('[data-cursor-preview]') as HTMLElement;
      
      if (textCursor) {
        setIsHovering(true);
        setHoverText(textCursor.getAttribute('data-cursor-text') || '');
        setHoverPreview('');
      } else if (previewCursor) {
        setIsHovering(true);
        setHoverText('VIEW');
        setHoverPreview(previewCursor.getAttribute('data-cursor-preview') || '');
      } else if (clickable) {
        setIsHovering(true);
        setHoverText('');
        setHoverPreview('');
      } else {
        setIsHovering(false);
        setHoverText('');
        setHoverPreview('');
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
      <motion.div
        className="cursor-ring"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          width: (isHovering && hoverText) || hoverPreview ? 80 : isHovering ? 50 : 36,
          height: (isHovering && hoverText) || hoverPreview ? 80 : isHovering ? 50 : 36,
          backgroundColor: 'transparent',
          borderColor: hoverPreview ? 'transparent' : 'var(--ink)',
          scale: isHovering && !hoverText && !hoverPreview ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {hoverPreview && (
          <motion.img 
            src={hoverPreview} 
            alt="Preview"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', position: 'absolute' }}
          />
        )}
        {hoverText && (
          <motion.span 
            className="cursor-text"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{ position: 'relative', zIndex: 2, color: hoverPreview ? 'white' : 'var(--ink)', textShadow: hoverPreview ? '0 2px 4px rgba(0,0,0,0.5)' : 'none' }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="cursor-dot"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%"
        }}
        animate={{
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
