import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { 
  FaLeaf, 
  FaStore, 
  FaHandshake, 
  FaTruckLoading, 
  FaMobileAlt, 
  FaRobot, 
  FaFlask, 
  FaSeedling 
} from 'react-icons/fa';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation variants for header
const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

export default function EnhancedApproach() {
  const [activeItem, setActiveItem] = useState(null);
  const containerRef = useRef(null);
  
  // Track scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress into values for animations
  const bgTranslateX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.8]);
  
  const secondaryBgTranslateX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const secondaryBgTranslateY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const secondaryBgOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.7]);

  // Floating elements motion
  const float1Y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const float2Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const float3Y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Detect when section is in view
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const approaches = [
    {
      title: "Physical Marketplace",
      description: "Establishing a robust Physical Marketplace for farm products that connects farmers directly with consumers.",
      icon: <FaStore className="text-2xl" />,
    },
    {
      title: "Light Asset Model",
      description: "Adopting a Light Asset Model to facilitate easy and scalable expansion across different regions.",
      icon: <FaTruckLoading className="text-2xl" />,
    },
    {
      title: "Franchise Partners",
      description: "Onboarding Roadside vegetable vendors and kirana stores as valuable franchise partners to support local businesses.",
      icon: <FaHandshake className="text-2xl" />,
    },
    {
      title: "Wastage Reduction",
      description: "Leveraging technology for efficient wastage reduction throughout the supply chain to promote sustainability.",
      icon: <FaLeaf className="text-2xl" />,
    },
    {
      title: "Smart Store Management",
      description: "Implementing user-friendly technology for streamlined store management that empowers our partners.",
      icon: <FaMobileAlt className="text-2xl" />,
    },
    {
      title: "AI-Based Procurement",
      description: "Incorporating AI-based procurement processes for enhanced efficiency and optimal pricing strategies.",
      icon: <FaRobot className="text-2xl" />,
    },
    {
      title: "Nanotechnology Cleaning",
      description: "Utilizing Nanotechnology for cleaning of vegetables, removing surface chemicals and pesticides for healthier produce.",
      icon: <FaFlask className="text-2xl" />,
    },
    {
      title: "Freshness Guarantee",
      description: "Ensuring freshness of green vegetables and leafy greens through integrated technological solutions.",
      icon: <FaSeedling className="text-2xl" />,
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      className="mx-auto px-4 py-16 max-w-6xl relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -z-10 top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"
        style={{ 
          x: bgTranslateX,
          y: bgTranslateY,
          opacity: bgOpacity,
        }} 
      />
      
      <motion.div
        className="absolute -z-10 bottom-20 -left-20 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"
        style={{ 
          x: secondaryBgTranslateX,
          y: secondaryBgTranslateY,
          opacity: secondaryBgOpacity,
        }} 
      />
      
      {/* Section header */}
      <motion.div 
        className="relative mb-12 text-center"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 inline-block">
          Our Innovative Approach
        </h2>
        <motion.div 
          className="h-1 w-24 md:w-32 mx-auto mt-4 rounded-full bg-orange-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.p 
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Combining traditional farming wisdom with cutting-edge technology to create sustainable food systems
        </motion.p>
      </motion.div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {approaches.map((approach, index) => (
          <motion.div 
            key={index}
            className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl bg-white"
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.1 }}
          >
            {/* Corner accents that appear on hover */}
            <motion.div 
              className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-500 opacity-0 group-hover:opacity-100"
              initial={{ x: -10, y: -10 }}
              whileHover={{ x: 0, y: 0, transition: { duration: 0.3 } }}
            />
            
            <motion.div 
              className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-500 opacity-0 group-hover:opacity-100"
              initial={{ x: 10, y: 10 }}
              whileHover={{ x: 0, y: 0, transition: { duration: 0.3 } }}
            />
            
            {/* Card content */}
            <div className="relative z-10 p-6 h-full flex flex-col transition-all duration-300 group-hover:translate-y-2">
              {/* Icon with circular background */}
              <div className="p-3 rounded-full w-14 h-14 flex items-center justify-center bg-green-100 mb-4 transition-all duration-300 group-hover:bg-green-500 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-green-600 transition-colors duration-300 group-hover:text-white">
                  {approach.icon}
                </span>
              </div>
              
              {/* Title with sliding underline effect */}
              <div className="relative overflow-hidden mb-2">
                <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                  {approach.title}
                </h3>
                <div className="absolute w-full h-0.5 bg-orange-500 -bottom-1 left-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 transition-colors duration-300 mb-4">
                {approach.description}
              </p>
              
              {/* Read more link that fades in on hover */}
              
              
              {/* Side accent that grows on hover */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-green-500 transition-all duration-500 ease-out group-hover:h-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Interactive floating elements */}
      <motion.div 
        className="absolute -z-10 top-1/4 left-10 w-8 h-8 rounded-full bg-green-500/20"
        style={{ y: float1Y, opacity: 0.6 }} 
      />
      
      <motion.div 
        className="absolute -z-10 bottom-1/3 right-10 w-12 h-12 rounded-full bg-orange-500/20"
        style={{ y: float2Y, opacity: 0.6 }} 
      />
      
      <motion.div 
        className="absolute -z-10 top-2/3 left-1/3 w-6 h-6 rounded-full bg-green-500/20"
        style={{ y: float3Y, opacity: 0.6 }} 
      />
    </motion.div>
  );
}