import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div 
        className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <ArrowRight 
          className="w-6 h-6 transform rotate-90 text-gray-600" 
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}