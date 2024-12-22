import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';
import PartnershipSection from './PartnershipSection';

export default function AboutContent() {
  const features = [
    {
      title: 'Innovative Technology Integration',
      description: 'Leveraging AI and digital media for enhanced property marketing and data-driven insights',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Cross-Industry Expertise',
      description: 'Combining experience in real estate, customer service, and creative industries for unique solutions',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Client-Centered Approach',
      description: 'Delivering personalized strategies and seamless experiences from start to finish',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="lg:col-span-7 space-y-8">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At Richey Realty, we believe real estate should be personal, seamless, and rewarding. Founder Jared Richey blends cutting-edge innovation with Mark Todd's three decades of expertise in real estate, marketing, and customer care. By harnessing the power of AI-driven strategies and digital tools, Jared transforms the buying and selling experience, ensuring exceptional results every time. Committed to transparency, integrity, and your success, Jared is here to help. Whether you're searching for your dream home or saying goodbye to a cherished one. Richey Realty has you covered.
        </p>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black rounded-lg transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <PartnershipSection />
    </div>
  );
}