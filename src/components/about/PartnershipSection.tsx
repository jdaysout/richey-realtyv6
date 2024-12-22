import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, TrendingUp } from 'lucide-react';

export default function PartnershipSection() {
  return (
    <motion.div
      className="bg-black text-white rounded-2xl shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-8 h-8" />
        <h3 className="text-2xl font-bold">Mark Todd and Associates Partnership</h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-8">
        As a proud member of Mark Todd and Associates, one of Orange County's leading luxury real estate teams, Richey Realty combines collective expertise and resources to achieve outstanding results. This dynamic partnership blends Mark Todd's decades of market leadership with our forward-thinking, innovative strategies, delivering unmatched value and exceptional service to our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Award className="w-6 h-6 mb-3" />
          <p className="text-sm">Ranked in the top 1% of Compass teams nationwide</p>
        </div>
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <Users className="w-6 h-6 mb-3" />
          <p className="text-sm">Access to an extensive network of luxury real estate professionals</p>
        </div>
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <TrendingUp className="w-6 h-6 mb-3" />
          <p className="text-sm">Combined expertise delivering consistent market-leading results</p>
        </div>
      </div>
    </motion.div>
  );
}