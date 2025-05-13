import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedOverlay = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Function to calculate parallax movement based on mouse position
  const calculateParallaxMovement = (strength) => {
    return {
      x: mousePosition.x * strength,
      y: mousePosition.y * strength,
    };
  };
  
  // Update mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-96">
      {/* Background image will be added by you */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        {/* Your background image will go here */}
        {/* Example: <img src="/your-bg-image.jpg" className="w-full h-full object-cover" /> */}
      </div>
      
      {/* Overlay with animated gradients */}
      <motion.div
        ref={headerRef}
        
        className="absolute inset-0 bg-gradient-to-br from-green-600/60 to-green-800/60 z-10"
      >
        {/* Animated background elements - scaled down for smaller section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
              ...calculateParallaxMovement(0.5),
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute -bottom-16 -left-12 w-48 h-48 rounded-full bg-green-400/20 blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
              ...calculateParallaxMovement(0.3),
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-400/10 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              ...calculateParallaxMovement(0.2),
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.5,
            }}
          />
        </div>
        
        {/* Content with staggered animations */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial="hidden"
              animate={isHeaderInView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div
                className="inline-block mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="inline-block text-green-50 text-sm font-medium px-3 py-1 rounded-full bg-green-700/70 border border-green-600">
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 },
                  },
                }}
              >
                <span className="text-white">About </span>
                <span className="text-orange-400">Villamart</span>
              </motion.h1>

              <motion.div
                className="h-1 w-16 mx-auto mb-4 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.4 } },
                }}
              >
                <motion.div
                  className="absolute left-0 w-1/2 h-full bg-green-400"
                  initial={{ width: 0 }}
                  animate={isHeaderInView ? { width: '50%' } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <motion.div
                  className="absolute right-0 w-1/2 h-full bg-orange-400"
                  initial={{ width: 0 }}
                  animate={isHeaderInView ? { width: '50%' } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </motion.div>

              <motion.p
                className="text-base text-green-50 max-w-xl mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.6 },
                  },
                }}
              >
                Empowering farmers and consumers through a sustainable, tech-driven marketplace.
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Optional: Floating decorative elements - scaled down */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-6 right-6 text-2xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
              ...calculateParallaxMovement(0.5),
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {/* Optional icon or emoji */}
          </motion.div>
          <motion.div
            className="absolute bottom-6 left-[10%] text-2xl"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
              ...calculateParallaxMovement(0.4),
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.5,
            }}
          >
            {/* Optional icon or emoji */}
          </motion.div>
        </div>
        
        {/* Bottom wave (optional) - scaled down */}
        <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-12 text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.73,96.92,135.22,92,184.07,70,293,21.62,257,31.36,321.39,56.44Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedOverlay;