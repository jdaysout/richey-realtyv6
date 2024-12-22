import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import DiscoverModule from './components/discover';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <DiscoverModule />
          <About />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}