import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    { name: "Director of Horticulture", logo: "/images/partners/partner1.png" },
    { name: "OFSDS", logo: "/images/partners/partner2.png" },
    { name: "ORMAS", logo: "/images/partners/partner3.png" },
    { name: "IRRI", logo: "/images/partners/partner4.png" },
    { name: "Livelyhood Alternatives", logo: "/images/partners/partner5.png" },
    { name: "Mahashakti Foundation", logo: "/images/partners/partner6.png" },
    { name: "Swiggy Instamart", logo: "/images/partners/partner7.png" },
    { name: "Blinkit", logo: "/images/partners/partner8.png" },
    { name: "Reliance Fresh", logo: "/images/partners/partner9.png" },
    { name: "Jio Mart", logo: "/images/partners/partner10.png" },
    { name: "Big Basket", logo: "/images/partners/partner11.png" },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted Partners
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Collaborating with industry leaders to create sustainable impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className={`
                bg-white/95 backdrop-blur-sm rounded-2xl p-6 h-32 flex flex-col items-center justify-center
                shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                ${hoveredPartner === index ? 'scale-110 z-20' : 'hover:scale-105'}
              `}>
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Logo */}
                <div className="relative z-10 mb-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Partner name */}
                <div className="relative z-10">
                  <p className="text-xs font-medium text-gray-700 text-center leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-emerald-100 text-lg mb-6">
            Want to partner with us? Let's build a sustainable future together.
          </p>
          <button className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white px-8 py-3 rounded-xl">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSection;