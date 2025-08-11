import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, ArrowRight, Sparkles } from 'lucide-react';

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/team/${encodeURIComponent(member.name)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
        
        {/* Shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />

        {/* Image section */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating sparkles on hover */}
          {isHovered && (
            <div className="absolute inset-0">
              {Array.from({ length: 6 }, (_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-emerald-300 animate-ping"
                  size={16}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 30}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-8 relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              {member.role}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 italic">
            "{member.quote}"
          </p>

          {/* Social links */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={18} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-emerald-600 hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={18} />
                </a>
              )}
            </div>

            <button
              onClick={handleViewProfile}
              className="btn btn-primary btn-sm gap-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white"
            >
              View Profile
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;