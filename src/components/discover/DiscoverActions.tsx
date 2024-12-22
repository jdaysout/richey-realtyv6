import React from 'react';
import { Search, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

export default function DiscoverActions() {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-6 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Button
        href="https://www.compass.com/"
        variant="primary"
        icon={Search}
        external
      >
        Explore Properties
      </Button>

      <Button
        href="#contact"
        variant="secondary"
        icon={Mail}
      >
        Contact Us
      </Button>
    </motion.div>
  );
}