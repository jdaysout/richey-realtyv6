import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

export default function HeroActions() {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <motion.a
        href="#properties"
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
                 bg-white text-black rounded-full hover:bg-gray-100
                 transition-all duration-300 transform-gpu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Listings
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </motion.a>
      <motion.a
        href="#contact"
        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
                 border-2 border-white text-white rounded-full hover:bg-white/10
                 transition-all duration-300 transform-gpu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  );
}