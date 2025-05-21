import React from 'react';
import { motion } from 'framer-motion';
import Ln1 from './ln1';
import Rn1 from './rn1';

// Animation variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Network = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <motion.div
        className="text-black py-8 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInUp}
      >
        <h1 className="relative inline-block text-4xl font-bold mb-2 animate-slide-in-down text-green-600 after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-green-600 after:via-orange-400 after:to-orange-400 after:mt-1 after:rounded-full">
          Network <span className="text-orange-400">Dashboard</span>
        </h1>
        <h2 className="text-xl font-light opacity-90 animate-fade-in">
          Real-time Network Monitoring System
        </h2>
      </motion.div>

      <motion.div
        className="flex h-96 relative overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left side */}
        <div className="flex-1 flex flex-col z-10">
          <div className="flex-1 flex items-center justify-center font-semibold">
            <Ln1 />
          </div>
          <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
            <Ln1 />
          </div>
          <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
            <Ln1 />
          </div>
        </div>

        {/* Middle with overlapped image */}
        <div className="w-1/2 flex justify-center items-center relative z-20 overflow-visible py-20">
          <motion.img
            src="/images/network_1.png"
            alt="Network diagram or image"
            className="h-96 py-10 relative w-4xl animate-pulse-slow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Right side */}
        <div className="flex-1 flex flex-col z-10">
          <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
            <Rn1 />
          </div>
          <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
            <Rn1 />
          </div>
          <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
            <Rn1 />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Network;