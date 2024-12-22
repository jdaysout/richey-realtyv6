import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function BenefitCard({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}: BenefitCardProps) {
  return (
    <motion.div
      className="group p-8 rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + delay }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="p-4 bg-black text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-xl font-semibold">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}