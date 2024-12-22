import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = '', isScrolled = false }: LogoProps) {
  const textColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <motion.div 
      className={`flex items-center space-x-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <Compass className={`w-8 h-8 ${textColor}`} />
        <motion.div 
          className="flex flex-col"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className={`text-xl font-bold tracking-wide ${textColor}`}>
            RICHEY REALTY
          </span>
          <span className={`text-sm tracking-wider ${textColor} opacity-80`}>
            MARK TODD & ASSOCIATES
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}