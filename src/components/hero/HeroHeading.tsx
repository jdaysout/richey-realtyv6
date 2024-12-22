import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function HeroHeading() {
  return (
    <motion.div 
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4">
        Richey Realty
      </h1>
      <p className="text-base sm:text-lg tracking-wider text-gray-300 uppercase">
        in partnership with Mark Todd & Associates
      </p>
      <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
        Exceptional properties, unparalleled service
      </p>
    </motion.div>
  );
}