import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={fadeInUp}
        >
          <div className="p-4 bg-black text-white rounded-full">
            <Home className="w-8 h-8" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          variants={fadeInUp}
        >
          Find Your Perfect Property
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
            Expert Guidance for Buyers and Sellers
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          variants={fadeInUp}
        >
          Expert guidance to help you buy smart, sell fast, and invest confidently in today's dynamic real estate market
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.a
            href="#properties"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full 
                     bg-black text-white hover:bg-gray-800 
                     transition-all duration-300 transform-gpu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Properties
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full 
                     text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white
                     transition-all duration-300 transform-gpu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 transform rotate-90 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}