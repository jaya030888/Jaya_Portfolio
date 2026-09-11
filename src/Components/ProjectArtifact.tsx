import React from 'react';
import { motion } from 'framer-motion';

interface Tag {
  text: string;
  bg?: string;
  color?: string;
}

interface ProjectArtifactProps {
  number: string;
  title: string;
  bg: string;
  color: string;
  tags: Tag[];
  children?: React.ReactNode;
}

export const ProjectArtifact = ({ number, title, bg, color, tags, children }: ProjectArtifactProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, rotate: -0.5 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto rounded-[36px] md:rounded-[56px] p-8 md:p-16 my-8 md:my-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden text-left"
      style={{ backgroundColor: bg, color: color }}
    >
      {/* Signature Aardvark Card Ear Cutouts (Top-Left & Top-Right decorative SVG shapes) */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none flex justify-between opacity-25">
        <svg className="w-12 h-12 text-current" viewBox="0 0 44 45" fill="none">
          <path fill="currentColor" d="M1.335.198c.671-.316 1.5-.254 2.186.187C27.678 16.847 39.839 36.953 44 45h-6.048c-2.382-1.604-6.964-3.674-15.652-4.814C2.999 37.666-.665 14.174.09 2.04.152 1.28.589.515 1.335.198Z" />
        </svg>
        <svg className="w-8 h-20 text-current" viewBox="0 0 29 80" fill="none">
          <path fill="currentColor" d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Chapter Eyebrow Number */}
        <p className="font-script text-2xl md:text-4xl mb-3 opacity-90 tracking-wide font-bold">
          {number}
        </p>

        {/* Big Bold Title */}
        <h3 className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
          {title}
        </h3>
        
        {/* Narrative Description Content */}
        <div className="text-lg md:text-2xl mb-10 opacity-95 leading-relaxed font-medium max-w-3xl space-y-4">
          {children}
        </div>
        
        {/* Tech Stack Pills Footer */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-current/20 mt-auto">
          {tags.map((tag, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 + (idx * 0.05) }}
              className="tag-small"
              style={{ backgroundColor: tag.bg || 'rgba(255,255,255,0.15)', color: tag.color || 'inherit' }}
            >
              {tag.text}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectArtifact;
