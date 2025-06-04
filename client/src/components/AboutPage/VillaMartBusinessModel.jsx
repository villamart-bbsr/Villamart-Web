import React, { useEffect } from 'react';
import { 
  ShoppingCart, 
  Apple, 
  Leaf, 
  Store,
  Users,
  Star,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for fade-in effect
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

const VillaMartBusinessModel = () => {
  // Scroll to top on mount with smooth behavior
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }, []);

  // Hook for in-view detection
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [columnRef, columnInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row1Ref, row1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row2Ref, row2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row3Ref, row3InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex flex-col select-none rounded-2xl m-4">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="relative bg-gradient-to-r from-emerald-900 to-green-900 shadow-xl"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Store className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                BUSINESS MODEL
              </h1>
              <p className="text-emerald-200 text-sm">VillaMart Revenue Strategy</p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20"
          >
            <img 
              src="/images/villamart-logo.png" 
              alt="VillaMart"
              className="h-12 w-auto object-contain mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Column Headers */}
      <motion.div
        ref={columnRef}
        initial="hidden"
        animate={columnInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="grid grid-cols-3 gap-3 px-4 py-2 bg-gradient-to-r from-emerald-800/50 to-green-800/50"
      >
        {[
          { icon: Users, title: 'CUSTOMER SEGMENTS' },
          { icon: Zap, title: 'REVENUE VERTICALS' },
          { icon: ShoppingCart, title: 'PRODUCT PORTFOLIO' }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/20"
          >
            <div className="flex items-center justify-center mb-1">
              <item.icon className="w-5 h-5 text-yellow-300 mr-2" />
              <h2 className="text-lg font-bold text-white">{item.title}</h2>
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content - 3 Rows */}
      <div className="flex-1 px-4 py-2 grid grid-rows-3 gap-2">
        {/* ROW 1: Premium Segment */}
        <motion.div
          ref={row1Ref}
          initial="hidden"
          animate={row1InView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="grid grid-cols-3 gap-3"
        >
          {/* Premium Customer Segment */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 shadow-xl border border-blue-200 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-orange-800">P</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Premium</h3>
              <p className="text-gray-600 text-xs">High-value customers</p>
            </div>
          </motion.div>

          {/* Quick Commerce */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 shadow-xl border border-blue-200"
          >
            <h3 className="text-base sm:text-lg font-bold text-center mb-2 text-gray-800">QUICK COMMERCE</h3>
            <div className="text-center mb-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
              >
                Strategic Partners
              </motion.span>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-4 gap-2">
              {[
                { logo: "/images/Instamartlogo.webp", name: "Swiggy", color: "from-orange-400 to-red-500" },
                { logo: "/images/blinkit.png", name: "Blinkit", color: "from-yellow-400 to-orange-500" },
                { logo: "/images/jio_mart.png", name: "JioMart", color: "from-blue-400 to-indigo-500" },
                { logo: "/images/reliance-fresh.png", name: "Reliance", color: "from-green-400 to-emerald-500" }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-xl"
                >
                  <div className="p-2 text-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-12 sm:h-19 w-auto mx-auto object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Products */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 shadow-xl border border-blue-200"
          >
            <h3 className="text-lg font-bold text-center mb-2 text-gray-800">Premium Products</h3>
            <div className="space-y-1">
              {[
                { icon: Leaf, text: 'Indian Vegetables, Exotic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Premium Fruits, Cut Veg/Fruits', color: 'text-red-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-sm"
                >
                  <item.icon className={`w-4 h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ROW 2: Middle Segment */}
        <motion.div
          ref={row2Ref}
          initial="hidden"
          animate={row2InView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="grid grid-cols-3 gap-3"
        >
          {/* Middle Customer Segment */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 shadow-xl border border-green-200 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-green-800">M</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Middle</h3>
              <p className="text-gray-600 text-xs">Value-conscious</p>
            </div>
          </motion.div>

          {/* Franchise Network */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 shadow-xl border border-green-200"
          >
            <h3 className="text-lg font-bold text-center mb-2 text-gray-800">FRANCHISE</h3>
            <div className="text-center mb-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
              >
                Direct Distribution
              </motion.span>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="p-2 rounded-xl">
                  <div className="p-2 flex items-center justify-center h-16">
                    <img 
                      src="/images/mobile_franchise.png" 
                      alt="Mobile Van"
                      className="sm:h-50 w-auto object-contain relative mx-auto translate-y-15 sm:translate-y-0 "
                    />
                  </div>
                  <div className="text-green-800 sm:-translate-y-35 sm:translate-x-10 text-sm font-semibold mt-1 relative -translate-y-14 sm:bg-white/70 sm:w-20 bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm">Mobile</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="p-2 rounded-xl">
                  <div className="text-black sm:-translate-y-19 text-sm font-semibold mt-1 relative translate-y-8 sm:bg-white/70 sm:w-20 sm:translate-x-20 text-green-800 bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm">Static</div>
                  <div className="p-2 flex items-center justify-center h-16">
                    <img 
                      src="/images/image6.jpg" 
                      alt="Store Outlet"
                      className="h-40 w-auto object-contain relative  sm:translate-x-7 sm:-translate-y-7 translate-y-16 mx-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Middle Products */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 shadow-xl border border-green-200"
          >
            <h3 className="text-lg font-bold text-center mb-2 text-gray-800">Diverse Portfolio</h3>
            <div className="space-y-1">
              {[
                { icon: Leaf, text: 'Indian Vegetables, Exotic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Fresh Fruits, Village Products', color: 'text-red-600' },
                { icon: ShoppingCart, text: 'Pulses, Millet Products, Desi Rice', color: 'text-amber-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-sm"
                >
                  <item.icon className={`w-4 h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ROW 3: Economy Segment */}
        <motion.div
          ref={row3Ref}
          initial="hidden"
          animate={row3InView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="grid grid-cols-3 gap-3"
        >
          {/* Economy Customer Segment */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-4 shadow-xl border border-orange-200 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <ShoppingCart className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-orange-800">E</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Economy</h3>
              <p className="text-gray-600 text-xs">Affordable solutions</p>
            </div>
          </motion.div>

          {/* Haat Model */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-4 shadow-xl border border-orange-200 flex flex-col justify-center"
          >
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 text-gray-800">HAAT MODEL</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">सबसे सस्ता</div>
                <div className="text-sm font-semibold opacity-90">SABSE SASTA</div>
              </motion.div>
              <p className="text-gray-600 mt-1 text-xs">Traditional market</p>
            </div>
          </motion.div>

          {/* Economy Products */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-4 shadow-xl border border-orange-200"
          >
            <h3 className="text-lg font-bold text-center mb-2 text-gray-800">Essential Products</h3>
            <div className="space-y-2">
              {[
                { icon: Leaf, text: 'Basic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Seasonal Fruits', color: 'text-red-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-sm"
                >
                  <item.icon className={`w-4 h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VillaMartBusinessModel;