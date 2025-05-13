import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Clean, professional counter with subtle animation
const Counter = ({ end, icon, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;
    let timeout;
    
    const updateCounter = () => {
      // Cubic easing for natural counting
      const progress = Math.min(1, current / steps);
      const easedProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
      const value = Math.floor(end * easedProgress);
      setCount(value);
      
      if (current < steps) {
        current++;
        timeout = setTimeout(updateCounter, interval);
      } else {
        setCount(end);
      }
    };
    
    updateCounter();
    return () => clearTimeout(timeout);
  }, [end]);
  
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-md border border-green-100 h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="mb-3 text-3xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-3xl font-bold text-green-700 mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {count}<span className="text-green-500">+</span>
      </motion.div>
      
      <motion.div
        className="text-green-600 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`absolute inset-0 flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl shadow-lg bg-white ${isActive ? "z-10" : "z-0"}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.9,
        pointerEvents: isActive ? "auto" : "none"
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Column - Image */}
      <div className="md:w-2/5 relative bg-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 text-4xl"
                animate={{ 
                  rotate: [0, 10, -5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  repeatType: "reverse"
                }}
              >
                {testimonial.icon}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Right Column - Content */}
      <div className="md:w-3/5 p-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-5xl text-green-200 mb-2">"</div>
          <p className="text-gray-700 text-lg mb-6 italic">
            {testimonial.text}
          </p>
          
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-xl font-bold text-green-700">{testimonial.name}</h3>
            <p className="text-green-600">{testimonial.role}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Basanti Nayak",
      role: "Farmer",
      text: "VillaMart takes my vegetables without any bargain and I am happy being associated with it. The team is professional and reliable.",
      img: "/images/profile.png",
      icon: "🥕"
    },
    {
      name: "Sonali Rout",
      role: "Housewife",
      text: "I am a regular customer of VillaMart, they are so punctual in their service, the sales people are so well behaved and the products are always fresh.",
      img: "/images/profile.png",
      icon: "🍅"
    },
    {
      name: "Sukanti Behara",
      role: "Housewife",
      text: "I am happy to get all the fresh vegetables at my doorstep, and most importantly VillaMart brings Desi variety vegetables that are hard to find elsewhere.",
      img: "/images/profile.png",
      icon: "🥬"
    },
  ];

  const achievements = [
    { label: "Farmers", count: 150, icon: "🚜" },
    { label: "Villages", count: 20, icon: "🏡" },
    { label: "Customers", count: 500, icon: "👨‍👩‍👧" },
    { label: "Vendors", count: 45, icon: "🧺" },
    { label: "Orders", count: 1200, icon: "🚚" },
    { label: "Products", count: 300, icon: "🥕" },
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlay]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="bg-gray-50">
      {/* Logo Section - Added here */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Container with Animation */}
            <motion.div
              className=" relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              onHoverStart={() => setIsLogoHovered(true)}
              onHoverEnd={() => setIsLogoHovered(false)}
            >
              {/* Logo Placeholder - Replace with your actual logo */}
              <motion.div 
                className=" w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                animate={{ rotate: isLogoHovered ? [0, -5, 5, -3, 3, 0] : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Replace this div with your company logo */}
                <div className="bg-green-100 w-full h-full rounded-full border-4 border-green-500 flex items-center justify-center p-2">
                  <span className="text-2xl md:text-3xl font-bold text-green-700">
                    <img src="/images/villamart-logo.png" alt="" className="-translate-y-2" />
                  </span>
                </div>
              </motion.div>
              
              {/* Animated elements that appear on hover */}
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLogoHovered ? 1 : 0 }}
              >
                <motion.div 
                  className="absolute top-2 left-1/2 -translate-x-1/2 text-xl"
                  animate={{ 
                    y: isLogoHovered ? [-10, -20] : 0,
                    opacity: isLogoHovered ? [0, 1] : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  🥕
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 left-2 text-xl"
                  animate={{ 
                    x: isLogoHovered ? [-5, -15] : 0,
                    opacity: isLogoHovered ? [0, 1] : 0
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  🍅
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 right-2 text-xl"
                  animate={{ 
                    x: isLogoHovered ? [5, 15] : 0,
                    opacity: isLogoHovered ? [0, 1] : 0
                  }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  🥬
                </motion.div>
              </motion.div>
              
              {/* Pulsing ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400 pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.div>
            
            {/* Company Name */}
            <motion.h2 
              className="mt-6 text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-green-700">Villa</span>
              <span className="text-orange-500">Mart</span>
            </motion.h2>
            
            <motion.p 
              className="text-green-600 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Happy Farmer Happy Consumer
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          {/* Simple heading with green and orange color theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-block mb-3">
              <span className="inline-block text-green-600 font-medium px-4 py-1 rounded-full bg-green-100 border border-green-200">
                Customer Testimonials
              </span>
            </motion.div>
            
            {/* Simple heading with subtle animation */}
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-green-700">What People </span>
              <span className="text-orange-500">Say About Us</span>
            </motion.h2>
            
            {/* Simple underline */}
            <div className="relative h-1 mx-auto w-24 mb-8">
              <motion.div 
                className="absolute left-0 w-1/2 h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div 
                className="absolute right-0 w-1/2 h-full bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>
            
            <motion.p 
              className="max-w-xl mx-auto text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Trusted by farmers and customers across multiple villages in the region.
            </motion.p>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-12">
          <div className="relative h-96 md:h-80 w-full max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={current === index} 
              />
            ))}
            
            {/* Navigation Controls */}
            <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center space-x-4">
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-gray-100"
                whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </motion.button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${current === idx ? "bg-green-600" : "bg-gray-300"}`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setCurrent(idx);
                      setIsAutoPlay(false);
                      setTimeout(() => setIsAutoPlay(true), 10000);
                    }}
                  />
                ))}
              </div>
              
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 border border-gray-100"
                whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Farm decoration footer */}
      <div className="relative h-24 overflow-hidden bg-gradient-to-b from-gray-50 to-green-50">
        {/* Moving tractor */}
        <motion.div
          className="absolute bottom-3 text-4xl"
          initial={{ x: "-10%" }}
          animate={{ x: "110%" }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        >
          🚜
        </motion.div>
        
        {/* Ground with simple crop row pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-800" />
        
        {/* Simplified crop rows */}
        <div className="absolute bottom-2 left-0 right-0 h-4">
          <div className="flex justify-between">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-4 bg-green-700"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;