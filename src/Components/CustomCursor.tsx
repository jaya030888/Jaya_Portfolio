import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for highly performant cursor tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!isActive) setIsActive(true);
    };

    const handleMouseLeave = () => setIsActive(false);

    // Interactive element handling
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const link = target.closest('a, button');
      const projectCard = target.closest('[data-project-card]');

      if (projectCard) {
        cursor.classList.add('hovering-project');
        setCursorText("VIEW");
      } else if (link) {
        cursor.classList.add('hovering-link');
        setCursorText("");
      } else {
        cursor.classList.remove('hovering-link', 'hovering-project');
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isActive]);

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor ${isActive ? 'active' : ''}`}
    >
      {cursorText && <span className="absolute mix-blend-difference z-50 text-white tracking-widest">{cursorText}</span>}
    </div>
  );
};

export default CustomCursor;
