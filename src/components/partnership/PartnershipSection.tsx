import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';
import Section from '../Section';
import Container from '../Container';
import PartnershipCard from './PartnershipCard';

const achievements = [
  {
    icon: Award,
    title: 'Top 1% Nationwide',
    description: 'Ranked in the top 1% of Compass teams nationwide',
  },
  {
    icon: Users,
    title: 'Extensive Network',
    description: 'Access to an extensive network of luxury real estate professionals',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Combined expertise delivering consistent market-leading results',
  },
];

export default function PartnershipSection() {
  return (
    <Section id="partnership" background="black">
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Mark Todd and Associates Partnership
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            As a key member of Mark Todd and Associates, one of Orange County's premier 
            luxury real estate teams, Richey Realty leverages collective expertise and 
            resources to deliver exceptional results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <PartnershipCard
              key={achievement.title}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}