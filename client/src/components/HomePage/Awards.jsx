import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const modalRef = useRef(null);
  
  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && selectedAward) {
        setSelectedAward(null);
      }
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [selectedAward]);

  // Trap focus inside modal when open
  useEffect(() => {
    if (selectedAward && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedAward]);
  
  const awards = [
    {
      img: "/images/future_food_fellowship.png",
      title: "Future Food Fellowship",
      desc: "VillaMart has been chosen as one of the 20 international organizations for the prestigious 'Future Food Fellow' program by the DO School in Germany...",
      fullDesc: "VillaMart has been chosen as one of the 20 international organizations for the prestigious 'Future Food Fellow' program by the DO School in Germany. This fellowship recognizes innovative startups that are working towards creating sustainable food systems and addressing global challenges in agriculture and food supply chains. Being part of this cohort allows us to collaborate with thought leaders and change-makers from around the world to develop solutions that can transform the future of food.",
    },
    {
      img: "/images/nsa.png",
      title: "Finalist at National Startup Award",
      desc: "VillaMart proudly stood as a finalist in the esteemed National Startup Awards 2021, granting us the privilege of engaging with the honorable Prime Minister...",
      fullDesc: "VillaMart proudly stood as a finalist in the esteemed National Startup Awards 2021, granting us the privilege of engaging with the honorable Prime Minister of India. This recognition celebrates our innovative approach to solving agricultural challenges and empowering rural communities. The National Startup Awards highlight startups that demonstrate exceptional capabilities in driving economic growth and addressing national priorities through innovation, scalability, and impact.",
    },
    {
      img: "/images/tata_social_enterprise.png",
      title: "TATA Social Enterprise Challenge",
      desc: "VillaMart achieved recognition as one of the top 10 finalists in the Tata Social Enterprise Challenge 2018, organized by the esteemed Tata Group...",
      fullDesc: "VillaMart achieved recognition as one of the top 10 finalists in the Tata Social Enterprise Challenge 2018, organized by the esteemed Tata Group in association with the Indian Institute of Management Calcutta. This prestigious competition identifies promising social enterprises that have the potential to create significant social impact. Our innovative model for connecting farmers directly to consumers and eliminating middlemen gained attention for its potential to transform rural livelihoods.",
    },
    {
      img: "/images/your_story.png",
      title: "Your Story",
      desc: "We are delighted to be acknowledged as one of the top 10 startups by 'Your Story' making a difference during the challenging times of the COVID-19 pandemic...",
      fullDesc: "We are delighted to be acknowledged as one of the top 10 startups by 'Your Story' making a difference during the challenging times of the COVID-19 pandemic. This recognition highlights our efforts to ensure uninterrupted supply of essential agricultural products to urban consumers while maintaining fair prices for farmers when traditional supply chains were disrupted. Through technological innovation and community engagement, VillaMart demonstrated resilience and adaptability in crisis, reinforcing our commitment to sustainable agriculture and rural development.",
    },
  ];

  // Close modal when clicking outside
  const closeModal = () => setSelectedAward(null);

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-white">
      {/* White background with pattern overlay */}
      <div className="absolute inset-0 bg-white"></div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(22, 101, 52, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 101, 52, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(22, 101, 52, 0.08) 2px, transparent 2px)`,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px',
          backgroundPosition: '0 0, 0 0, 20px 20px',
          opacity: 0.1
        }}
      ></div>
      
      {/* Floating vegetable elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const size = Math.random() * 30 + 15;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const rotation = Math.random() * 360;
          const duration = Math.random() * 10 + 15;
          const delay = Math.random() * 5;
          const icon = ['🏆', '🌱', '🥦', '🥕', '🌽', '🥔', '🍅', '⭐', '🌟'][Math.floor(Math.random() * 9)];
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                fontSize: `${size}px`,
                opacity: 0.1,
                transform: `rotate(${rotation}deg)`,
                animation: `float-${i} ${duration}s infinite ease-in-out`,
                animationDelay: `${delay}s`,
              }}
              aria-hidden="true"
            >
              {icon}
            </div>
          );
        })}
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            className="text-5xl font-bold mb-4 text-green-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-700">Recognition</span>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-lime-600 to-green-700 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-green-900 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Throughout our journey of cultivating change, VillaMart has been honored with numerous awards
            recognizing our commitment to sustainable agriculture and rural development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <AwardCard 
              key={index} 
              award={award} 
              index={index} 
              onClick={() => setSelectedAward(award)}
            />
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-modal-title"
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-white">
                  <div className="h-full relative p-4">
                    <div 
                      className="absolute inset-0" 
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(22, 101, 52, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(22, 101, 52, 0.1) 1px, transparent 1px),
                          radial-gradient(rgba(22, 101, 52, 0.08) 2px, transparent 2px)`,
                        backgroundSize: '40px 40px, 40px 40px, 80px 80px',
                        backgroundPosition: '0 0, 0 0, 20px 20px',
                        opacity: 0.05
                      }}
                    ></div>
                    <img
                      src={selectedAward.img}
                      alt={selectedAward.title}
                      className="w-full h-full object-contain p-6 relative z-10"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-8 text-left">
                  <h2 id="award-modal-title" className="text-3xl font-bold mb-4 text-green-900">{selectedAward.title}</h2>
                  <p className="text-green-800 mb-6 leading-relaxed">{selectedAward.fullDesc}</p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-lime-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg transition duration-300"
                    aria-label="Close award details"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-8deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-3deg); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        @keyframes float-7 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-10deg); }
        }
        @keyframes float-8 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes float-9 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-6deg); }
        }
      `}</style>
    </section>
  );
};

const AwardCard = ({ award, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-white border border-green-300 border-opacity-50 rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-300 cursor-pointer"
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        onClick={onClick}
        role="button"
        aria-pressed="false"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div className="relative overflow-hidden h-48 flex items-center justify-center bg-white">
          <motion.img 
            src={award.img} 
            alt={award.title} 
            className="w-full h-full object-contain p-2"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-6 text-left flex flex-col h-full">
          <div>
            <h3 className="text-xl font-bold mb-3 text-green-900">{award.title}</h3>
            <p className="text-green-800">{award.desc}</p>
          </div>
          
          <motion.div 
            className="mt-auto pt-4 inline-flex items-center font-semibold text-lime-700"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            Learn more
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-lime-600 to-green-700"
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
};

export default Awards;