import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const StorySection = ({ children, className = '', id }: StorySectionProps) => {
  return (
    <section 
      id={id}
      className={`relative w-full py-20 px-6 md:px-12 flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export const StoryText = ({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`w-full ${className}`}
  >
    {children}
  </motion.div>
);
