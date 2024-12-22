import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Home } from 'lucide-react';
import CountUp from '../CountUp';

export default function AboutMetrics() {
  const metrics = [
    {
      icon: <Home className="w-6 h-6" />,
      value: 50,
      suffix: '+',
      label: 'Homes Sold',
      description: 'Successfully closed transactions',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 110,
      prefix: '$',
      suffix: 'M+',
      label: 'Sales Volume',
      description: 'Total transaction volume',
      decimals: 0,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: 30,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Years of Industry Experience',
    },
  ];

  return (
    <div className="lg:col-span-5 space-y-8">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://www.compass.com/m/13/9960d9ef-8da4-41d2-ad4b-d2a519040f3e/origin.jpg"
          alt="Jared Richey"
          className="rounded-2xl shadow-2xl object-cover w-full aspect-[3/4] transform hover:scale-[1.02] transition-all duration-500"
        />
        <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-black rounded-2xl -z-10" />
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-black text-white rounded-lg">
                {metric.icon}
              </div>
              <div>
                <CountUp
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
                <div className="text-sm text-gray-600 mt-1">
                  {metric.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}