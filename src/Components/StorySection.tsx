import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const StorySection = ({ children, className = '', id }: StorySectionProps) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`min-h-screen flex flex-col justify-center items-center py-24 px-6 md:px-12 text-center relative z-10 ${className}`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
};

export const StoryText = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-8 md:mb-12 ${className}`}
  >
    {children}
  </motion.div>
);
