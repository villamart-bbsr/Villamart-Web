import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';

const TeamStats = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Passionate professionals"
    },
    {
      icon: Award,
      number: "8+",
      label: "Years Experience",
      description: "In sustainable agriculture"
    },
    {
      icon: Globe,
      number: "1000+",
      label: "Farmers Connected",
      description: "Across rural communities"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Commitment",
      description: "To sustainable future"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building a sustainable future through dedicated teamwork and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-4xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {stat.number}
                  </h3>
                </div>

                {/* Label */}
                <div className="relative z-10 mb-2">
                  <h4 className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </h4>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-gray-500 text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamStats;