import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import Button from './shared/Button';
import { Search } from 'lucide-react';

export default function Properties() {
  return (
    <Section id="properties" size="lg" background="white">
      <Container size="default">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            href="https://www.compass.com/homes-for-sale/_map/mapview=34.0085186,-117.2036143,33.2699418,-118.3571787/"
            variant="primary"
            icon={Search}
            external
          >
            View All Listings
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}