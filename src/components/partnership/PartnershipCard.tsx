import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PartnershipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function PartnershipCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: PartnershipCardProps) {
  return (
    <motion.div
      className="group flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + delay }}
      whileHover={{ y: -4 }}
    >
      <div className="p-4 bg-white text-black rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}