import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Truck, Store, Star, CheckCircle, Mail, Phone, User } from 'lucide-react';
import axios from 'axios';
import SEO from '../components/SEO';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

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
  const [recaptchaToken, setRecaptchaToken] = useState('');

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
    <><b>Supermarket at Your Doorstep</b> – Convenient, hyperlocal access to daily essentials</>,
    <><b>Effortless Procurement</b> – Streamlined stocking and inventory processes</>,
    <><b>GPS-Based Billing & Sales Insights</b> – Real-time location-driven analytics</>,
    <><b>Digitally-Integrated Local Orders</b> – Smart ordering via mobile and web</>,
    <><b>No Fuel Costs, Lower Operational Expenses</b> – Eco-friendly & cost-efficient</>,
    <><b>Seamless Apartment Entry Access</b> – Approved resident entry for smooth deliveries</>,
    <><b>Strong Brand Connect</b> – Direct engagement with trusted local and national brands</>,
    <><b>Consistent Year-Round Sales</b> – Boosted revenue through continuous presence</>,
    <><b>Low-Energy Cooling Systems</b> – Sustainable refrigeration solutions</>,
    <><b>Touch-and-Feel Shopping Experience</b> – Physical product interaction retained</>,
    <><b>Fixed Working Hours & Weekly Offs</b> – Designed for employee well-being</>
  ];

  const staticOutletBenefits = [
    <><b>Digitally-Enabled Local Ordering</b> – Fast, convenient ordering tailored to neighborhood needs</>,
    <><b>Streamlined Procurement Process</b> – Simplified sourcing for maximum efficiency</>,
    <><b>Technology-Driven Freshness</b> – Ensured quality with real-time freshness monitoring</>,
    <><b>Brand Partnerships for Profit Growth</b> – Boost margins through strategic collaborations</>,
    <><b>Customer Acquisition & Retention</b> – Smart tools to attract and keep loyal buyers</>,
    <><b>Live Billing & Sales Analytics</b> – Instant insights for better decision-making</>,
    <><b>Minimized Perishability Loss</b> – Data-led inventory management to reduce waste</>,
    <><b>Touch-and-Feel Purchase Experience</b> – Physical interaction for higher purchase confidence</>,
    <><b>Smart Price Optimization</b> – Data-backed pricing for competitiveness and profitability</>,
    <><b>In-Depth Profitability Analysis</b> – Clear visibility into performance metrics</>,
    <><b>Curated Healthy Product Selection</b> – Meeting the rising demand for wellness-focused items</>
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
    if (!recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA.' });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        ...formData,
        recaptchaToken
      });
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        outletType: 'mobile'
      });
      setRecaptchaToken('');
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
      {/* SEO Meta Tags */}
      <SEO title="Franchise Benefits | VillaMart"
           description="Explore the benefits of becoming a franchise partner with VillaMart. Join our network and grow your business with our proven model." />
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
          <div className="absolute inset-0 bg-green-900/40"></div>
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
          <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8 select-none">
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
    window.open(
      "https://docs.google.com/forms/d/1sJ9pXufWZUKWk_D0PGcSbVG9LB_XOh9mEY4UyYOx2-U/viewform?edit_requested=true",
      "_blank"
    );
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
            <h2 className="text-4xl font-bold text-green-700 select-none">Mobile Outlet</h2>
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
                className="w-full lg:w-[80%] mx-auto h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white border-2 border-green-700 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
            }}
          >
            <motion.div className="space-y-4">
              {mobileOutletBenefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 group select-none"
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
                  <span className="font-medium select-none">{item}</span>
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
            <h2 className="text-4xl font-bold text-orange-400 select-none">Static Outlet</h2>
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
            className="bg-white border-2 border-orange-400 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
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
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 group select-none"
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
                  <span className="font-medium select-none">{item}</span>
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
                src="/images/image8.jpeg" 
                alt="Static Outlet" 
                className="w-full lg:w-[80%] mx-auto h-[400px] lg:h-[500px] object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
  id="contact-form"
  className="max-w-4xl mx-auto py-20 px-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-400 p-10 text-center">
    
    {/* Heading */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-3 mb-6"
    >
      <Mail className="text-orange-400" size={40} />
      <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
      <Mail className="text-orange-400" size={40} />
    </motion.div>

    {/* Description */}
    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
      We’re excited to partner with passionate entrepreneurs who want to bring 
      our brand to new communities. As a franchise partner, you’ll gain access to 
      our proven business model, strong brand support, and marketing resources to 
      help you succeed.  
    </p>
    <p className="text-gray-700 text-lg mb-10 leading-relaxed">
      Fill out the short form in the link below, and our team will get in touch 
      with you to guide you through the next steps of starting your own outlet.
    </p>

    {/* Button linking to Google Form */}
    <motion.a
      href="https://docs.google.com/forms/d/1sJ9pXufWZUKWk_D0PGcSbVG9LB_XOh9mEY4UyYOx2-U/viewform?edit_requested=true"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-400 hover:border-orange-300 text-lg"
    >
      Start Your Franchise Journey
    </motion.a>
  </div>
</motion.div>

      </div>
    </div>
  );
}

export default FranchisePage;