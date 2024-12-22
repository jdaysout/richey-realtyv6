import React from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

interface ScoreCounterProps {
  score: number;
  onReset: () => void;
}

export default function ScoreCounter({ score, onReset }: ScoreCounterProps) {
  return (
    <motion.div
      className="fixed top-24 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-1">Score</p>
        <p className="text-2xl font-bold text-gray-900 mb-2">{score}</p>
        <button
          onClick={onReset}
          className="flex items-center justify-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <RotateCw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
    </motion.div>
  );
}