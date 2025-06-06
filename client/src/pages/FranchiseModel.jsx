import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Truck, Store, Star, CheckCircle, Mail, Phone, User } from 'lucide-react';
import axios from 'axios';

const FranchisePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 500);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    outletType: 'mobile' // default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const benefitVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.8
      }
    }
  };

  const leafVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const mobileOutletBenefits = [
    "Supermarket at doorstep",
    "Effortless procurement GPS",
    "Based billing & sales analysis",
    "Digitally Local order",
    "No fuel & less expenses",
    "Apartment Entry Permission",
    "Brand connect",
    "Round the year sales boost",
    "Low energy cooling system",
    "Feel & tough buying experience",
    "Fixed time & weekly off as needed"
  ];

  const staticOutletBenefits = [
    "Digitally Local order",
    "Effortless Procurement",
    "Technology-backed Freshness",
    "Profit Boost through Brand connect",
    "Customer acquisition & retention",
    "Real time billing & analysis",
    "Reduced Perishability Risk",
    "Feel & tough buying experience",
    "Optimised price guidance",
    "Profit analysis",
    "Availability of healthy products"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        outletType: 'mobile'
      });
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message;
      setSubmitStatus({ 
        type: 'error', 
        message: `Failed to send message: ${errorMessage}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 relative overflow-hidden">
      {/* Floating Leaf Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-green-600 opacity-20"
          variants={leafVariants}
          animate="animate"
        >
          <Leaf size={40} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-green-600 opacity-20"
          variants={leafVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          <Leaf size={30} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-green-600 opacity-20"
          variants={leafVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        >
          <Leaf size={35} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[500px] flex items-center justify-center mb-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <img 
            src="/images/gallery-sub-header.png" 
            alt="Franchise Background" 
            className="w-full h-[120%] object-fit bg-fixed"
          />
          <div className="absolute inset-0 bg-green-900/70"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Leaf className="text-orange-400" size={40} />
            <h1 className="text-5xl font-bold text-white">Franchise Benefits</h1>
            <Leaf className="text-orange-400" size={40} />
          </motion.div>
          <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Join our growing network of successful partners and cultivate prosperity in your community. 
            Experience the power of our proven business model and make a difference in your local market.
          </p>
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => {
                document.getElementById('contact-form').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="cursor-pointer bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-400 hover:border-orange-300"
            >
              Start Your Franchise Journey
            </button>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg 
            className="w-full h-16 text-white" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            ></path>
          </svg>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Outlet Section */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 bg-green-700/10 py-4 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Truck className="text-green-700" size={40} />
            <h2 className="text-4xl font-bold text-green-700">Mobile Outlet</h2>
            <Truck className="text-green-700" size={40} />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl"
              variants={imageVariants}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img 
                src="/images/mobile_franchise.png" 
                alt="Mobile Outlet" 
                className="w-full h-[400px] object-fit"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white border-2 border-orange-400 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              borderColor: "rgb(251 146 60)"
            }}
          >
            <motion.div className="space-y-4">
              {mobileOutletBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
                  variants={benefitVariants}
                  custom={index}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="text-green-700 mr-4 group-hover:text-green-600" size={20} />
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Static Outlet Section */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 bg-orange-400/10 py-4 px-8 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Store className="text-orange-400" size={40} />
            <h2 className="text-4xl font-bold text-orange-400">Static Outlet</h2>
            <Store className="text-orange-400" size={40} />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-white border-2 border-orange-400 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              borderColor: "rgb(251 146 60)"
            }}
          >
            <motion.div className="space-y-4">
              {staticOutletBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
                  variants={benefitVariants}
                  custom={index}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="text-orange-400 mr-4 group-hover:text-orange-300" size={20} />
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl"
              variants={imageVariants}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img 
                src="/images/image6.jpg" 
                alt="Static Outlet" 
                className="w-full h-[400px] object-fit"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          id="contact-form"
          className="max-w-4xl mx-auto py-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Mail className="text-orange-400" size={40} />
              <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
              <Mail className="text-orange-400" size={40} />
            </motion.div>
            <p className="text-gray-600 text-lg">
              Interested in our franchise opportunities? Get in touch with us!
            </p>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-400"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Outlet Type</label>
                <select
                  name="outletType"
                  value={formData.outletType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                >
                  <option value="mobile">Mobile Outlet</option>
                  <option value="static">Static Outlet</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                placeholder="Tell us about your interest in our franchise..."
              ></textarea>
            </div>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-400 transition-all duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default FranchisePage;