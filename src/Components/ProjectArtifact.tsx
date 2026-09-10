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
      initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto rounded-[32px] md:rounded-[48px] p-8 md:p-16 my-16 md:my-24 shadow-2xl relative overflow-hidden"
      style={{ backgroundColor: bg, color: color }}
    >
      {/* Decorative ear/shape - mimicking Aardvark's style */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 bg-white rounded-bl-full pointer-events-none" />
      
      <div className="relative z-10 text-left flex flex-col h-full">
        <p className="font-[family-name:--font-script] text-2xl md:text-3xl mb-4 opacity-80">{number}</p>
        <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">{title}</h3>
        
        <div className="text-lg md:text-xl mb-12 opacity-90 leading-relaxed font-medium max-w-2xl">
          {children}
        </div>
        
        <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-white/20">
          {tags.map((tag, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider"
              style={{ backgroundColor: tag.bg || 'rgba(0,0,0,0.1)', color: tag.color || 'inherit' }}
            >
              {tag.text}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
