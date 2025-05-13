import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

// Import images
import birac from "../../assets/images/birac.png";
import villagro from "../../assets/images/villagro.png";
import kiit from "../../assets/images/kiit-tbi.png";
import sbi from "../../assets/images/sbi.png";
import siic from "../../assets/images/siic-iik.png";
import startupIndia from "../../assets/images/startup-india.png";
import startupOdisha from "../../assets/images/startup-odisha.png";
import tata from "../../assets/images/tata-social-enterprise.png";

const SupportedBy = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const logos = [
    birac,
    villagro,
    kiit,
    sbi,
    siic,
    startupIndia,
    startupOdisha,
    tata,
  ];
  
  useEffect(() => {
    // Start scroll animation when section comes into view
    if (isInView) {
      // Animate the title and container
      const animateSection = async () => {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          }
        });
        
        // Start the horizontal scroll animation after the section appears
        startCarouselAnimation();
      };
      
      animateSection();
    }
  }, [isInView, controls]);
  
  // Separate function for the carousel animation
  const startCarouselAnimation = async () => {
    await controls.set({ x: 0 });
    await controls.start({
      x: "-100%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      }
    });
  };
  
  return (
    <div className="bg-gradient-to-b from-green-50 to-orange-50">
      <motion.section 
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 px-4 max-w-6xl mx-auto text-center"
      >
        <motion.h1 
          className="text-4xl font-bold mb-10 text-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="border-b-4 border-orange-500 pb-2">Supported by</span>
        </motion.h1>
        
        <motion.div 
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-green-50 to-transparent z-10"></div>
          
          {/* Logos slider container */}
          <div className="overflow-hidden w-full py-6" ref={containerRef}>
            <div className="relative w-full">
              <motion.div
                className="flex items-center gap-16"
                animate={controls}
                style={{ width: "200%" }}
              >
                {/* First set of logos */}
                <div className="flex items-center gap-16 min-w-max">
                  {logos.map((logo, index) => (
                    <div 
                      key={`logo-${index}`} 
                      className="min-w-max bg-white p-6 rounded-lg shadow-md border border-green-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <img
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div className="flex items-center gap-16 min-w-max">
                  {logos.map((logo, index) => (
                    <div 
                      key={`logo-dup-${index}`} 
                      className="min-w-max bg-white p-6 rounded-lg shadow-md border border-green-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <img
                        src={logo}
                        alt={`Partner ${index + 1}`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-green-50 to-transparent z-10"></div>
        </motion.div>
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SupportedBy;