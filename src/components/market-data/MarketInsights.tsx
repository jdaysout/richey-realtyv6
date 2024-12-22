import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Home } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Lazy load chart component
const MarketChart = lazy(() => import('./MarketChart'));

const metrics = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: 'Median Price',
    value: '$1.2M',
    change: '+5.2%'
  },
  {
    icon: <Home className="w-6 h-6" />,
    label: 'Active Listings',
    value: '234',
    change: '-2.1%'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: 'Days on Market',
    value: '28',
    change: '-15%'
  }
];

export default function MarketInsights() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-white" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Orange County Market Insights</h2>
          <p className="text-xl text-gray-600">Real-time data from the local market</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
              style={{
                boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-black text-white rounded-xl">
                  {metric.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">{metric.label}</h3>
              <p className="text-3xl font-bold mb-2">{metric.value}</p>
              <p className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change} YoY
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100"
             style={{
               boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.05)',
             }}>
          <Suspense fallback={
            <div className="h-[400px] bg-gray-50 rounded-lg animate-pulse" />
          }>
            <MarketChart />
          </Suspense>
        </div>
      </div>
    </section>
  );
}