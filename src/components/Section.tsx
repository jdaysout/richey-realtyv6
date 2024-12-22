import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  background?: 'white' | 'gray' | 'black';
  fullWidth?: boolean;
}

export default function Section({ 
  children, 
  className,
  size = 'default',
  background = 'white',
  fullWidth = false
}: SectionProps) {
  return (
    <motion.section
      className={cn(
        'section-padding w-full',
        {
          'bg-white': background === 'white',
          'bg-gray-50': background === 'gray',
          'bg-black text-white': background === 'black',
          'py-12 md:py-16': size === 'sm',
          'py-16 md:py-24': size === 'default',
          'py-20 md:py-32': size === 'lg'
        },
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        'mx-auto',
        {
          'container': !fullWidth,
          'px-4 sm:px-6 lg:px-8': !fullWidth
        }
      )}>
        {children}
      </div>
    </motion.section>
  );
}