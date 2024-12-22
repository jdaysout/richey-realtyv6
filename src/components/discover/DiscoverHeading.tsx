import React from 'react';
import { motion } from 'framer-motion';

export default function DiscoverHeading() {
  return (
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
        Discover Your Dream Home
      </h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Leverage our innovative technology and local expertise to find your perfect property. 
        From exclusive listings to personalized guidance, we're here to make your real estate 
        journey seamless.
      </motion.p>
    </motion.div>
  );
}