import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShoppingCart, Users, TrendingUp, BarChart2 } from 'lucide-react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 }
  }
};

// Variants for stat cards
const statVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 120, damping: 10 }
  }
};

// Variants for timeline steps
const stepVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.7 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: 'spring', bounce: 0.4 }
  }
};

export default function EnhancedVisionComponent() {
  const [activeTab, setActiveTab] = useState('vision');
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll hook for parallax effect
  const { scrollY } = useScroll();
  const bubble1Y = useTransform(scrollY, [0, 500], [0, -100]);
  const bubble2Y = useTransform(scrollY, [0, 500], [0, 100]);

  // In-view hooks for sections
  const [visionRef, visionInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [impactRef, impactInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [modelRef, modelInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Counter animation with shake effect
  const counterControls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      if (counter < 85) {
        setCounter(prev => prev + 1);
        counterControls.start({
          x: [0, 5, -5, 0],
          transition: { duration: 0.1 }
        });
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [counter, counterControls]);

  const stats = [
    { label: "Waste Reduction", value: counter + "%", icon: <Leaf className="text-green-500" /> },
    { label: "Vendor Income", value: "+" + (counter + 15) + "%", icon: <TrendingUp className="text-orange-500" /> },
    { label: "Communities Served", value: counter * 3, icon: <Users className="text-blue-500" /> }
  ];

  return (
    <motion.div
      className={`bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-6 md:p-8 mb-16 border-l-4 border-green-500 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background bubbles with parallax */}
      <motion.div
        style={{ y: bubble1Y }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-100 opacity-20"
      />
      <motion.div
        style={{ y: bubble2Y }}
        className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-green-100 opacity-20"
      />

      {/* Icon and heading */}
      <motion.div
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
        className="flex justify-center mb-6"
      >
        <div className="bg-green-100 rounded-full p-4 inline-flex">
          <ShoppingCart className="w-8 h-8 text-green-700" />
        </div>
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8"
      >
        VillaMart
        <span className="block text-lg font-medium text-gray-600 mt-2">Fresh Farm to Your Table</span>
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex space-x-2 bg-gray-100 rounded-lg p-1">
          {['vision', 'impact', 'model'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 2 }}
              className={`cursor-pointer py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === tab
                  ? tab === 'impact'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-green-100'
              }`}
            >
              {tab === 'vision' ? 'Our Vision' : tab === 'impact' ? 'Our Impact' : 'PPAAS Model'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Vision Tab */}
      {activeTab === 'vision' && (
        <motion.div
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center">
            Revolutionizing Agricultural Retail
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <p className="text-gray-700 leading-relaxed">
              VillaMart is transforming how farm-fresh produce reaches your table through our innovative
              <span className="relative">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: '#fed7aa' }}
                  className="font-semibold mx-1 text-orange-600 bg-orange-100 px-2 py-1 rounded-md"
                >
                  PPAAS (PhyGital Platform As A Service)
                </motion.span>
              </span>
              model. We're creating a seamless bridge between farmers and consumers, ensuring quality at every step.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Tech-Enabled Marketplace', 'Inclusive Ecosystem', 'Sustainable Growth'].map((title, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={visionInView ? 'visible' : 'hidden'}
                variants={statVariants}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-green-500"
              >
                <h3 className="font-semibold text-green-800 mb-3 text-center text-lg">{title}</h3>
                <p className="text-gray-700 text-center">
                  {[
                    'Our Direct-to-Consumer (D2C) Omni-channel marketplace leverages cutting-edge technology to track freshness, ensure chemical-free produce, and analyze sales patterns—all while minimizing wastage.',
                    'VillaMart operates on a franchise basis, benefiting roadside vendors, kirana stores, farmers, Farmer Producer Organizations (FPOs), and Self-Help Groups (SHGs)—creating value for all stakeholders.',
                    'By reducing waste and optimizing the supply chain, we create a more sustainable agricultural ecosystem that benefits both the environment and local communities.'
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Impact Tab */}
      {activeTab === 'impact' && (
        <motion.div
          ref={impactRef}
          initial="hidden"
          animate={impactInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600 text-center">Our Growing Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={impactInView ? 'visible' : 'hidden'}
                variants={statVariants}
                className="bg-white rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
                </div>
                <motion.div
                  animate={counterControls}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-medium text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-orange-50 border-t-4 border-orange-500 p-6 rounded-lg max-w-3xl mx-auto mt-8"
          >
            <h3 className="font-semibold text-orange-800 mb-3 text-center text-xl">Real Community Impact</h3>
            <p className="text-gray-700 text-center">
              VillaMart is more than a marketplace—it's a movement to empower local farmers and small businesses.
              Our technology platforms have created sustainable income for thousands of vendors while delivering
              fresher products to consumers at fair prices.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* PPAAS Model Tab */}
      {activeTab === 'model' && (
        <motion.div
          ref={modelRef}
          initial="hidden"
          animate={modelInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center">The PPAAS Revolution</h2>
          <div className="max-w-3xl mx-auto relative px-4">
            <div className="flex flex-col space-y-12 relative">
              <motion.div
                className="absolute top-0 bottom-0 left-1/2 w-1 bg-green-200 transform -translate-x-1/2"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              {['PhyGital Approach', 'Procurement & Fulfillment', 'Franchise Ecosystem'].map((title, step) => (
                <motion.div
                  key={step}
                  initial="hidden"
                  animate={modelInView ? 'visible' : 'hidden'}
                  variants={stepVariants}
                  className="relative"
                >
                  <motion.div
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center">
                        {step + 1}
                      </div>
                    </div>
                  </motion.div>
                  <div className="pt-8 text-center">
                    <h3 className="font-semibold text-green-800 text-xl mb-3">{title}</h3>
                    <p className="text-gray-700">
                      {[
                        'Our PhyGital (Physical + Digital) model combines traditional shopping experiences with cutting-edge technology, offering the "touch & feel" experience customers value for produce.',
                        'Our advanced Procurement cum Fulfillment Centers ensure quality control, reduce waste, and optimize logistics between farm and consumer.',
                        'By extending our model to vendors, kirana stores, farmers, and community groups, we’re building a sustainable agricultural ecosystem that benefits everyone.'
                      ][step]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-50 p-6 rounded-lg mt-12 max-w-3xl mx-auto"
          >
            <div className="flex justify-center items-center mb-3">
              <BarChart2 className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-green-800 text-center text-xl mb-3">Data-Driven Excellence</h3>
            <p className="text-gray-700 text-center">
              Our platform analyzes sales patterns, consumer preferences, and supply chain efficiency to continuously
              improve operations and ensure the freshest produce reaches consumers.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}