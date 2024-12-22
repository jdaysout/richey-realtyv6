import React from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, ArrowRight } from 'lucide-react';
import { containerVariants } from '../../utils/animations';
import HeroHeading from './HeroHeading';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HeroHeading />
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <motion.a
              href="https://www.compass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-white text-black hover:bg-[#E6B325] transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Explore properties on Compass (opens in new tab)"
            >
              <Search className="w-5 h-5 mr-2" aria-hidden="true" />
              Explore Properties
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}