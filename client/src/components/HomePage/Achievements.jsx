import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    { count: 3000, label: "FARMERS", icon: "🌾" },
    { count: 20, label: "PG/SHGs", icon: "🧑‍🌾" },
    { count: 60, label: "SHGs", icon: "👨‍👩‍👧‍👦" },
    { count: 150, label: "B2B Units", icon: "🏪" },
    { count: 6000, label: "Consumers", icon: "🥕" },
    { count: 30, label: "Employment", icon: "🌽" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Light earth-toned background with farm pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-green-100 opacity-95"></div>
      <div className="absolute inset-0 farm-pattern opacity-30"></div>
      
      {/* Floating vegetable elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 20}px`,
              opacity: 0.15,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['🥦', '🥬', '🍅', '🍆', '🥕', '🌽', '🥔', '🧄', '🧅'][Math.floor(Math.random() * 9)]}
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.div 
          className="mb-16" 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-green-900">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-700">Harvest</span></h1>
            <div className="h-1 w-32 bg-gradient-to-r from-lime-600 to-green-700 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-lg text-green-900 max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From seed to table, we've cultivated relationships with thousands of farmers,
            consumers, and businesses, growing a sustainable ecosystem for fresh, 
            locally-sourced vegetables.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* CSS for farm patterns and animations */}
      <style jsx global>{`
        .farm-pattern {
          background-image: 
            linear-gradient(rgba(22, 101, 52, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 101, 52, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(22, 101, 52, 0.08) 2px, transparent 2px);
          background-size: 40px 40px, 40px 40px, 80px 80px;
          background-position: 0 0, 0 0, 20px 20px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

const AchievementCard = ({ item, index }) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 90
      }}
    >
      <div className="relative group">
        {/* Card with natural texture effect */}
        <div className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm border border-green-300 border-opacity-50 rounded-2xl p-6 flex flex-col items-center transform transition-all duration-300 group-hover:scale-105 group-hover:bg-opacity-90 group-hover:shadow-xl overflow-hidden wood-texture">
          {/* Icon with standardized green gradient background */}
          <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg text-2xl relative overflow-hidden">
            <span className="relative z-10">{item.icon}</span>
            <div className="absolute inset-0 soil-texture opacity-30"></div>
          </div>
          
          {/* Counter number with leaf-inspired glow */}
          <h1 className="text-4xl font-extrabold text-green-900 mb-2 relative">
            <Counter end={item.count} isInView={isInView} />
            <span className="text-green-600">+</span>
            <div className="absolute inset-0 blur-md opacity-20 bg-lime-500 rounded-full" style={{ transform: 'scale(0.9)' }}></div>
          </h1>
          
          {/* Label with earthy styling */}
          <h3 className="text-green-900 font-bold uppercase tracking-wide">{item.label}</h3>
          
          {/* Decorative leaf elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-30"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-transparent opacity-20"></div>
        </div>
        
        {/* Animated growth border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-20 bg-[length:200%_100%] animate-shimmer"></div>
      </div>
    </motion.div>
  );
};

const Counter = ({ end, isInView }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const duration = 2000; // 2 seconds
    
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, isInView]);
  
  return <span className="relative z-10">{count}</span>;
};

export default Achievements;