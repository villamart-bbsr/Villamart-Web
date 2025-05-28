import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FarmerDistributionNetwork() {
  const [isHovered] = useState(false); // Kept for compatibility, but not used
  
  // Refs for sections to detect when they enter the viewport
  const imageRef = useRef(null);
  const channelsRef = useRef(null);
  const benefitsRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isChannelsInView = useInView(channelsRef, { once: true, amount: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });

  // Animation variants for sliding effects with slower duration
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.2, // Slower duration
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.2, // Slower duration
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      }
    }
  };

  // Animation for benefits cards with a slower pop-up effect
  const popUp = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 1.0, // Slower duration
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }
    }
  };

  // Animation for header with a slower bounce effect
  const headerBounce = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.0, // Slower duration
        ease: "easeOut",
        type: "spring",
        bounce: 0.5
      }
    }
  };

  return (
    <div className="bg-green-50 min-h-screen p-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-8"
          initial="hidden"
          animate="visible"
          variants={headerBounce}
        >
          <div className="bg-green-800 p-4 text-white">
            <h2 className="text-xl font-semibold">Distribution Network Model</h2>
            <p className="text-green-100">From farm to consumers through efficient distribution channels</p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Image Section - Slide from Left, No Hover Effect */}
            <motion.div 
              ref={imageRef}
              className="w-full md:w-2/3 p-4" 
              initial="hidden"
              animate={isImageInView ? "visible" : "hidden"}
              variants={slideInLeft}
            >
              <div>
                <img 
                  src="/images/flowchart.png" 
                  alt="Farmer Distribution Network Diagram" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Content Section - Slide from Right */}
            <motion.div 
              ref={channelsRef}
              className="w-full md:w-1/3 p-4 bg-orange-100 border-l-4 border-orange-500"
              initial="hidden"
              animate={isChannelsInView ? "visible" : "hidden"}
              variants={slideInRight}
            >
              <h3 className="text-lg font-bold text-green-800 mb-4">Key Distribution Channels</h3>
              <div className="space-y-4">
                {/* Channel Cards with slight stagger */}
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    ),
                    title: "PFC Centers",
                    description: "Procurement and fulfillment hubs that collect and process farm goods"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    ),
                    title: "Franchise Outlets",
                    description: "Retail locations that sell directly to consumers"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Villa Basket",
                    description: "Subscription-based delivery of farm-fresh products to communities"
                  }
                ].map((channel, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white p-4 rounded shadow-md border-l-4 ${index % 2 === 0 ? 'border-green-600' : 'border-orange-500'}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isChannelsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }} // Slower stagger
                  >
                    <div className="flex items-center mb-2">
                      <div className="bg-orange-100 p-2 rounded-full mr-2 transform transition-transform">
                        {channel.icon}
                      </div>
                      <h4 className="font-bold text-green-800">{channel.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Benefits Section - Pop-up Effect */}
        <motion.div 
          ref={benefitsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial="hidden"
          animate={isBenefitsInView ? "visible" : "hidden"}
          variants={popUp}
        >
          {/* Farmer Benefits */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={popUp}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 128, 0, 0.2)" }}
          >
            <div className="bg-green-700 text-white p-3">
              <h3 className="font-bold">Farmer Benefits</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {[
                  "Direct market access without middlemen",
                  "Better price realization for produce",
                  "Reduced wastage through efficient logistics",
                  "Technical support and farming guidance"
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isBenefitsInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }} // Slower stagger
                  >
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Consumer Benefits */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={popUp}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(255, 165, 0, 0.2)" }}
          >
            <div className="bg-orange-500 text-white p-3">
              <h3 className="font-bold">Consumer Benefits</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {[
                  "Fresh farm produce at competitive prices",
                  "Traceability of products to source farms",
                  "Consistent quality and supply",
                  "Supporting local farmers and sustainable practices"
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ x: 20, opacity: 0 }}
                    animate={isBenefitsInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }} // Slower stagger
                  >
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}