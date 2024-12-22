import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';
import Section from '../Section';
import Container from '../Container';

export default function CompassFeature() {
  return (
    <Section id="compass-exclusive" background="black" size="default">
      <Container size="default">
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative z-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium text-white/90">Compass Exclusive</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              Unlock Exclusive Off-Market Properties
            </h3>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Gain early access to private listings and rare opportunities only available through Compass's cutting-edge platform. Don't miss out—discover your dream home today.
            </p>
            
            <motion.a
              href="https://www.compass.com/homes-for-sale/_map/mapview=34.0085186,-117.2036143,33.2699418,-118.3571787/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-white text-black hover:bg-[#E6B325] transition-all duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Listings
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Image with layered effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-black/50 to-transparent z-10" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Luxury Property"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E6B325]/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Background decorative elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#E6B325]/5 rounded-full blur-3xl" />
        </div>
      </Container>
    </Section>
  );
}