// src/components/FranchiseTable.jsx
import React from 'react';
import { motion } from 'framer-motion';

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 360 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
    },
  },
};

const FranchiseTable = () => {
  return (
    <motion.div
      className="franchise-table w-[80%] mx-auto pt-12 max-[500px]:w-full"
      initial={{ backgroundColor: '#4ade80' }}
      animate={{ backgroundColor: 'transparent' }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Desktop View */}
      <motion.div
        className="franchise-table-desktop-view max-[500px]:hidden"
        variants={tableVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <table className="w-[95%] mx-auto border-collapse border-4 border-[#014017]">
          <thead>
            <tr>
              <th className="border-4 border-[#014017] p-5">Franchise Type</th>
              <th className="border-4 border-[#014017] p-5">Investment</th>
              <th className="border-4 border-[#014017] p-5">Location</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: 'Mobile Outlet', investment: '$10,000', location: 'Rural/Urban' },
              { type: 'Static Outlet', investment: '$15,000', location: 'Urban' },
            ].map((item, index) => (
              <motion.tr
                key={index}
                className="hover:bg-green-200 transition-all duration-300"
                variants={rowVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 5px 15px rgba(0, 128, 0, 0.3)',
                }}
              >
                <td className="border-4 border-[#014017] p-5 w-[33%]">{item.type}</td>
                <td className="border-4 border-[#014017] p-5 w-[33%]">{item.investment}</td>
                <td className="border-4 border-[#014017] p-5 w-[33%]">{item.location}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="franchise-table-mobile-view hidden max-[500px]:block"
        variants={tableVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="space-y-4">
          {[
            { type: 'Mobile Outlet', investment: '$10,000', location: 'Rural/Urban' },
            { type: 'Static Outlet', investment: '$15,000', location: 'Urban' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 border-4 border-[#014017] rounded hover:bg-green-100 transition-all duration-300"
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 10px 20px rgba(0, 128, 0, 0.4)',
                rotate: 2,
              }}
            >
              <h3 className="font-semibold">{item.type}</h3>
              <p>
                <strong>Investment:</strong> {item.investment}
              </p>
              <p>
                <strong>Location:</strong> {item.location}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Us Sections */}
      <motion.div
        className="franchise-contactus-desktop-view mt-8 max-[500px]:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-[#014017]">Contact us for franchise opportunities!</p>
      </motion.div>
      <motion.div
        className="franchise-contactus-mobile-view mt-8 hidden max-[500px]:block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-[#014017]">Reach out for franchise details!</p>
      </motion.div>
    </motion.div>
  );
};

export default FranchiseTable;