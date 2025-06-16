import React from 'react';
import { motion } from 'framer-motion';
import Ln1 from './ln1';
import Rn1 from './rn1';
import Ln2 from './ln2';
import Ln3 from './ln3';
import Rn2 from './rn2';
import Rn3 from './rn3';

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
    <div className="w-full relative overflow-hidden bg-white">
      {/* Simple Light Green Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#90EE90" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#98FB98" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Base gradient fill */}
          <rect width="100%" height="100%" fill="url(#grad1)"/>
        </svg>
      </div>

      {/* Content overlay with semi-transparent background */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm" style={{
        borderRadius: '0 0 50% 50%',
        paddingBottom: '2rem'
      }}>
        {/* Header Section */}
        <motion.div
          className="text-black py-8 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="relative inline-block text-4xl font-bold mb-2 animate-slide-in-down text-green-700 after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-green-700 after:via-orange-500 after:to-orange-500 after:mt-1 after:rounded-full">
            Distribution <span className="text-orange-500">Network</span>
          </h1>
          <h2 className="text-xl font-light opacity-90 animate-fade-in">
          Seamlessly Linking Rural Produce to Urban Platforms
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
              <Ln2 />
            </div>
            <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
              <Ln3 />
            </div>
          </div>
          
          {/* Middle with overlapped image */}
          <div className="w-1/2 flex justify-center items-center relative bg-green-50 translate-x-3 z-20 overflow-visible py-20">
            <motion.img
              src="/images/network_1.png"
              alt="Network diagram or image"
              className="h-96 py-10 relative w-7xl  animate-pulse-slow"
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
              <Rn2 />
            </div>
            <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
              <Rn3 />
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  );
};

export default Network;