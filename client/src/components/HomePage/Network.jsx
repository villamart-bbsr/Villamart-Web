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
      {/* Static Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient definitions */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#90EE90" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#98FB98" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#90EE90" stopOpacity="0.2" />
            </linearGradient>
            
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#90EE90" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#98FB98" stopOpacity="0.04" />
            </radialGradient>
            
            {/* Pattern definitions */}
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2"/>
            </pattern>
            
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#f97316" fillOpacity="0.15"/>
            </pattern>
            
            <pattern id="hexagons" width="100" height="86.6" patternUnits="userSpaceOnUse">
              <polygon points="50,7 85,29 85,71 50,93 15,71 15,29" 
                       fill="none" 
                       stroke="#10b981" 
                       strokeWidth="0.8" 
                       strokeOpacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Base gradient fill */}
          <rect width="100%" height="100%" fill="url(#grad1)"/>
          
          {/* Large geometric shapes */}
          <circle cx="200" cy="150" r="120" fill="url(#grad2)"/>
          <circle cx="1000" cy="300" r="150" fill="url(#grad2)"/>
          <circle cx="100" cy="600" r="80" fill="url(#grad2)"/>
          <circle cx="900" cy="700" r="100" fill="url(#grad2)"/>
          
          {/* Angular geometric shapes */}
          <polygon points="300,100 450,50 500,200 350,250" fill="#10b981" fillOpacity="0.05"/>
          <polygon points="800,500 950,450 1000,600 850,650" fill="#f97316" fillOpacity="0.05"/>
          <polygon points="50,400 200,350 250,500 100,550" fill="#10b981" fillOpacity="0.03"/>
          
          {/* Network-style connections */}
          <g stroke="#10b981" strokeWidth="1" strokeOpacity="0.1" fill="none">
            <path d="M 100,100 Q 300,200 500,150 T 900,200"/>
            <path d="M 200,300 Q 400,150 600,250 T 1000,300"/>
            <path d="M 150,500 Q 350,400 550,450 T 850,500"/>
            <path d="M 50,200 Q 250,350 450,300 T 750,350"/>
            <path d="M 300,600 Q 500,500 700,550 T 1100,600"/>
          </g>
          
          {/* Connection nodes */}
          <g fill="#10b981" fillOpacity="0.2">
            <circle cx="100" cy="100" r="4"/>
            <circle cx="500" cy="150" r="4"/>
            <circle cx="900" cy="200" r="4"/>
            <circle cx="200" cy="300" r="4"/>
            <circle cx="600" cy="250" r="4"/>
            <circle cx="1000" cy="300" r="4"/>
            <circle cx="150" cy="500" r="4"/>
            <circle cx="550" cy="450" r="4"/>
            <circle cx="850" cy="500" r="4"/>
          </g>
          
          {/* Pattern overlays */}
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
          
          {/* Tech-style decorative elements */}
          <g stroke="#f97316" strokeWidth="2" strokeOpacity="0.1" fill="none">
            <rect x="50" y="50" width="80" height="80" rx="5"/>
            <rect x="1050" y="100" width="100" height="100" rx="5"/>
            <rect x="100" y="650" width="60" height="60" rx="5"/>
            <rect x="950" y="600" width="120" height="120" rx="5"/>
          </g>
          
          {/* Diagonal lines for depth */}
          <g stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.08">
            <line x1="0" y1="0" x2="1200" y2="200"/>
            <line x1="0" y1="200" x2="1200" y2="400"/>
            <line x1="0" y1="400" x2="1200" y2="600"/>
            <line x1="0" y1="600" x2="1200" y2="800"/>
          </g>
          
          {/* Additional geometric accents */}
          <g fill="#f97316" fillOpacity="0.03">
            <polygon points="600,50 700,100 650,150 550,100"/>
            <polygon points="400,400 500,450 450,500 350,450"/>
            <polygon points="750,600 850,650 800,700 700,650"/>
          </g>
          
          {/* Final overlay for subtle texture */}
          <rect width="100%" height="100%" fill="url(#grad2)" opacity="0.3"/>
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
            Network <span className="text-orange-500">Dashboard</span>
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
              <Ln2 />
            </div>
            <div className="flex-1 flex items-center justify-center text-green-900 text-lg font-semibold">
              <Ln3 />
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