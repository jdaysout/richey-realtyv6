import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface HighlightProps {
  icon: React.ReactNode;
  text: string;
}

export default function PartnershipHighlight({ icon, text }: HighlightProps) {
  return (
    <motion.div 
      className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-2 bg-white text-black rounded-lg">
        {icon}
      </div>
      <p className="text-white text-sm">{text}</p>
    </motion.div>
  );
}