import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <div className="text-center mt-16">
      <motion.a
        href="#properties"
        className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        aria-label="Scroll to properties section"
        whileHover={{ y: -2 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <span className="text-sm font-medium">Explore Our Properties</span>
        <ArrowDown className="w-6 h-6" aria-hidden="true" />
      </motion.a>
    </div>
  );
}