import React from 'react';
import { TrendingUp, Clock, Home, Award, Users, Building2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';
import AboutMetrics from './about/AboutMetrics';
import AboutContent from './about/AboutContent';
import PartnershipSection from './about/PartnershipSection';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Meet Jared
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Huntington Beach Neighbor, Tech Visionary, and Trusted Real Estate Expert
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <AboutMetrics />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}