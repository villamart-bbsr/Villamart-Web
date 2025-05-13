import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: 2024,
    text: 'The franchise model for both Mobile and Static outlets is prepared, with a focus on technology development to drive expansion.',
    position: 'left',
  },
  {
    year: 2023,
    text: 'Enabled warehouse aimed at reducing waste to below 5%. Simultaneously, we optimized the Franchise model of our Mobile Outlets within the city.',
    position: 'right',
  },
  {
    year: 2022,
    text: 'We extended our operations to Bhubaneswar, upgrading from Diesel-operated to Battery-operated Mobile Outlets. Additionally, we incorporated a no energy cooling system into the mobile supermarket to preserve the-freshness of vegetables.',
    position: 'left',
  },
  {
    year: 2021,
    text: 'Implemented the HUB & Spoke model along with advanced technology to facilitate our expansion efforts.',
    position: 'right',
  },
  {
    year: 2020,
    text: 'Amidst the COVID-19 pandemic, we experienced a significant surge in demand and consequently expanded our operations to include a B2B wing. We began supplying products to Kirana Stores located in rural villages to meet the increased demand.',
    position: 'left',
  },
  {
    year: 2019,
    text: 'We conducted a pilot program utilizing a Static Outlet Model featuring a 100 sq ft shop, providing a supermarket-like experience for vegetables, groceries, and organic products. This pilot was also initiated to explore franchise opportunities.',
    position: 'right',
  },
  {
    year: 2018,
    text: 'We introduced a cost-effective Static Outlet model in Nayagarh, a small town, to address the purchasing preferences of both rural and urban consumers, ensuring a balanced approach to buying and selling.',
    position: 'left',
  },
  {
    year: 2017,
    text: 'We initiated our project with a Diesel Operated Mobile Outlet, operating across 60 villages to pilot the Mobile Supermarket concept. Our inventory consisted of approximately 1000 SKUs, comprising vegetables, groceries, and various FMCG products tailored to meet the demands of rural consumers.',
    position: 'right',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: (position) => ({
    opacity: 0,
    x: position === 'left' ? -100 : 100,
    rotate: position === 'left' ? -5 : 5,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="timeline relative max-w-4xl mx-auto px-4 bg-[#d4f4d4]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Animated path */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-[#4caf50] via-[#f97316] to-[#4caf50] rounded-full"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute w-full h-full"
          initial={{ background: 'linear-gradient(to bottom, #4caf50, #4caf50)' }}
          animate={{
            background: [
              'linear-gradient(to bottom, #4caf50, #f97316)',
              'linear-gradient(to bottom, #f97316, #4caf50)',
              'linear-gradient(to bottom, #4caf50, #f97316)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`container2 relative ${item.position === 'left' ? 'left' : 'right'} mb-16 flex ${item.position === 'right' ? 'flex-row-reverse' : ''}`}
          variants={itemVariants}
          custom={item.position}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotate: 0, 
            transition: { 
              type: 'spring', 
              stiffness: 100, 
              damping: 15, 
              duration: 0.8,
              delay: index * 0.1
            }
          }}
          initial={{ 
            opacity: 0, 
            x: item.position === 'left' ? -100 : 100, 
            rotate: item.position === 'left' ? -5 : 5
          }}
          viewport={{ once: false, amount: 0.3 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <motion.div
            className={`content2 bg-white p-6 rounded-lg shadow-lg w-[45%] relative ${
              item.position === 'left' ? 'mr-auto' : 'ml-auto'
            } border-l-4 border-[#f97316]`}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              backgroundColor: '#fff7ed' 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 20
            }}
          >
            <motion.h2 
              className="text-3xl font-bold text-[#4caf50]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {item.year}
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {item.text}
            </motion.p>
            
            {/* Year glow effect when hovered */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -top-2 -left-2 right-2 bottom-2 rounded-lg z-[-1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    background: 'radial-gradient(circle, #fed7aa 0%, transparent 70%)' 
                  }}
                />
              )}
            </AnimatePresence>

            {/* Animated timeline dot */}
            <motion.div
              className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#4caf50] rounded-full flex items-center justify-center ${
                item.position === 'left' ? 'right-[-42px]' : 'left-[-42px]'
              } z-10`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10, 
                delay: 0.5 + index * 0.1 
              }}
            >
              <motion.div
                className="w-6 h-6 bg-[#f97316] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(249, 115, 22, 0.7)',
                    '0 0 0 10px rgba(249, 115, 22, 0)',
                    '0 0 0 0 rgba(249, 115, 22, 0.7)'
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            </motion.div>

            {/* Connecting line to timeline */}
            <motion.div
              className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-[#f97316] ${
                item.position === 'left' ? 'right-0 w-[20px]' : 'left-0 w-[20px]'
              }`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ 
                delay: 0.6 + index * 0.1, 
                duration: 0.3, 
                ease: "easeOut" 
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline;