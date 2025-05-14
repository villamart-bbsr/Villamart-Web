import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  const socialIcons = [
    {
      icon: <FaFacebookSquare className="text-[#3b5998] w-12 h-auto transition-all duration-300 hover:scale-110" />,
      href: `https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`,
      label: "Share on Facebook"
    },
    {
      icon: <FaTwitterSquare className="text-[#00acee] w-12 h-auto transition-all duration-300 hover:scale-110" />,
      href: `https://twitter.com/intent/tweet?url=${url}`,
      label: "Share on Twitter"
    },
    {
      icon: <FaRedditSquare className="text-[#ff4500] w-12 h-auto transition-all duration-300 hover:scale-110" />,
      href: `http://www.reddit.com/submit?url=${url}&title=${title}`,
      label: "Share on Reddit"
    },
    {
      icon: <FaWhatsappSquare className="text-[#25D366] w-12 h-auto transition-all duration-300 hover:scale-110" />,
      href: `https://api.whatsapp.com/send/?text=${url}`,
      label: "Share on WhatsApp"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-between bg-green-50 p-4 rounded-lg border-2 border-green-600"
    >
      {socialIcons.map((social, index) => (
        <motion.a
          key={index}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          target="_blank"
          rel="noreferrer"
          href={social.href}
          aria-label={social.label}
          className="transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-2 rounded-full"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialShareButtons;