import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollShowcase({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (mql.matches || prefersReducedMotion) {
      return () => mql.removeEventListener('change', handler); // Do not apply horizontal scroll on mobile or if reduced motion is preferred
    }

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return () => mql.removeEventListener('change', handler);

    // Calculate how much we need to scroll horizontally
    // It's the total width of the container minus the viewport width
    const getScrollAmount = () => {
      return -(container.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(container, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1, // Smooth scrubbing
        end: () => `+=${container.scrollWidth}`, // The pinning lasts for the width of the container
        invalidateOnRefresh: true, // Recalculate on resize
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      mql.removeEventListener('change', handler);
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ overflow: 'hidden', backgroundColor: 'var(--cream)', color: 'var(--ink)', paddingTop: isMobile ? '50px' : '100px', paddingBottom: isMobile ? '50px' : '100px' }}>
      <div className="container" style={{ paddingLeft: '5vw', marginBottom: '50px' }}>
        <h2 style={{ fontSize: 'clamp(47px, 5.3vw, 80px)', margin: 0, lineHeight: 0.84 }}>SELECTED WORKS</h2>
        <p style={{ marginTop: '20px', maxWidth: '500px', fontWeight: 600 }}>Hover to interact and view previews.</p>
      </div>
      <div 
        ref={containerRef} 
        style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'max-content',
          padding: '0 5vw',
          gap: isMobile ? '30px' : '40px',
          paddingBottom: '50px'
        }}
        className="horizontal-container"
      >
        {children}
      </div>
    </section>
  );
}
