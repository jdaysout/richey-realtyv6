import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import Container from '../Container';
import BenefitCard from './BenefitCard';
import { benefits } from './benefits.data';

export default function WhyChooseRichey() {
  return (
    <Section id="why-choose" background="white">
      <Container size="default">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[2.5rem] leading-tight font-bold mb-4">
            Why Choose Richey Realty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of technology and personal service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={benefit.title}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}