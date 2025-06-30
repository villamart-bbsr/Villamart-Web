import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";




const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Utility to detect mobile device
  const isMobile = () => {
    if (typeof navigator === 'undefined') return false;
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  };

  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5" fill="currentColor">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      ),
      url: "https://www.facebook.com/villamartindia",
    },
    {
      name: "X",
      icon: (
        <FaXTwitter />

      ),
      url: "https://twitter.com/villamartindia",
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
      url: "https://www.instagram.com/villamart.india",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      ),
      url: "https://in.linkedin.com/company/villamartindia",
    },
    {
      name: "WhatsApp",
      icon: (
        <BsWhatsapp />


      ),
      url: "https://wa.me/911234567890",
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/newsletter/subscribe`;
      console.log('Environment variables:', {
        VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
        NODE_ENV: import.meta.env.MODE
      });
      console.log('Making API call to:', apiUrl);
      console.log('With email:', email);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        throw new Error('Invalid response from server');
      }

      console.log('Response data:', data);

      if (data.success) {
        setStatus({ type: "success", message: data.message || "Successfully subscribed to newsletter!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.message || "Failed to subscribe" });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus({ 
        type: "error", 
        message: error.message || "Failed to subscribe. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPhone = (phoneNumber) => {
    if (isMobile()) {
      window.location.href = `tel:${phoneNumber.replace(/\s|\//g, '')}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <footer className="bg-gray-700 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-2">
        <div className="text-center space-y-4">
          
          {/* Logo */}
          <div className="flex items-center justify-center">
           <img src="/images/villamart-logo.png" alt="" />
          </div>

          {/* Motto */}
          <div>
            <p className="text-green-400 text-lg font-medium">Happy Farmer Happy Consumer</p>
            <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
              Connecting farmers directly with consumers for fresh, sustainable produce and transparent food sourcing.
            </p>
          </div>

          {/* Social Media Icons */}
          <div>
            <p className="text-gray-400 text-sm mb-4">Follow us</p>
            <div className="flex justify-center space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white h-12 w-12 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-2">
            <a
              href="mailto:info@villamart.in"
              className="flex items-center text-gray-400 text-lg hover:text-green-400 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@villamart.in
            </a>
            
            <a
              href="tel:+918093123411"
              className="flex items-center text-gray-400 text-lg hover:text-green-400 transition-colors"
              style={{ cursor: 'pointer' }}
            >
              <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 80931 234 11 / 12 / 13
            </a>
          </div>

          {/* Privacy Policy & Terms */}
          <div className="flex justify-center space-x-8">
            <span className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer text-sm">
              Privacy Policy
            </span>
            <span className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer text-sm">
              Terms & Conditions
            </span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Villamart. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;