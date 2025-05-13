import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FranchisePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 500);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);


  
    // Form state and handlers
    const [formData, setFormData] = useState({
      fullname: '',
      address: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
      setSubmitError(null);
      
      try {
        // Example using a service like EmailJS
        // You'll need to replace with your actual service details
        await emailSubmission(formData);
        
        // Show success message
        setSubmitSuccess(true);
        
        // Reset form after submission
        setFormData({
          fullname: '',
          address: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitError('Failed to send your message. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    };
    
    // Function to handle the email submission
    const emailSubmission = async (data) => {
      // OPTION 1: Using EmailJS
      // Uncomment and configure this code to use EmailJS
      /*
      return emailjs.send(
        'YOUR_SERVICE_ID',  // Create account at emailjs.com and get service ID
        'YOUR_TEMPLATE_ID', // Create an email template and get template ID
        {
          from_name: data.fullname,
          reply_to: data.email,
          address: data.address,
          mobile: data.mobile,
          subject: data.subject,
          message: data.message
        },
        'YOUR_PUBLIC_KEY'   // Your EmailJS public key
      );
      */
      
      // OPTION 2: Using your own backend API
      // Uncomment and configure this code to use your own API endpoint
      /*
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return await response.json();
      */
      
      // For demonstration, we're using a timeout to simulate API call
      // REMOVE THIS IN PRODUCTION and uncomment one of the above options
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    };
  
    // Animation variants
    const formVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.1 
        }
      }
    };
  
    const buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    };
  
    const inputVariants = {
      hidden: { x: -20, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.3 }
      }
    };


  // const [formData, setFormData] = useState({
  //   fullname: '',
  //   address: '',
  //   email: '',
  //   mobile: '',
  //   subject: '',
  //   message: ''
  // });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Form submission logic would go here
  //   alert('Form submitted successfully!');
  //   setFormData({
  //     fullname: '',
  //     address: '',
  //     email: '',
  //     mobile: '',
  //     subject: '',
  //     message: ''
  //   });
  // };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  // const buttonVariants = {
  //   hover: {
  //     scale: 1.05,
  //     backgroundColor: "#f97316",
  //     transition: {
  //       type: "spring",
  //       stiffness: 300
  //     }
  //   },
  //   tap: {
  //     scale: 0.95
  //   }
  // };

  // const formVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 50
  //     }
  //   }
  // };

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.4 }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-950"></div>
            <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover opacity-30"></div>
          </motion.div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Franchise
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center mt-4 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join the VillaMart family and be part of our mission to connect farmers and consumers
          </motion.p>
        </div>
      </section>

      {/* Franchise Table Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-green-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Franchise Opportunities
          </motion.h2>
          
          {/* Desktop Table */}
          {isDesktop && (
            <motion.div 
              className="overflow-x-auto rounded-lg shadow-lg"
              variants={tableVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <th className="p-4 md:p-6 text-lg font-bold bg-green-100 text-orange-500 border-4 border-green-800">Partnership / Franchise</th>
                    <th className="p-4 md:p-6 text-lg font-bold text-orange-500 border-4 border-green-800">Mobile Outlet</th>
                    <th className="p-4 md:p-6 text-lg font-bold bg-green-50 text-orange-500 border-4 border-green-800">Static Outlet</th>
                  </motion.tr>
                </thead>
                <tbody>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">Investment</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">3-4 Lakh</td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800">4-5 Lakh</td>
                  </motion.tr>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">ROI</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">8-12 Months</td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800">8-12 Months</td>
                  </motion.tr>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">Monthly Income</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">Rs. 40,000</td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800"> Rs. 40,000</td>
                  </motion.tr>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">Benefits</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">
                      <motion.ul className="list-disc pl-5 space-y-1">
                        {[
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
                        ].map((item, index) => (
                          <motion.li 
                            key={`mobile-${index}`}
                            variants={benefitVariants}
                            className="text-sm md:text-base"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800">
                      <motion.ul className="list-disc pl-5 space-y-1">
                        {[
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
                        ].map((item, index) => (
                          <motion.li 
                            key={`static-${index}`}
                            variants={benefitVariants}
                            className="text-sm md:text-base"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </td>
                  </motion.tr>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">Franchise Cost</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-sm md:text-base">Franchise cost 30,000 (Non refundable)</li>
                        <li className="text-sm md:text-base">Security deposit 20,000 (Refundable)</li>
                      </ul>
                    </td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800">
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-sm md:text-base">Franchise cost 30,000 (Non refundable)</li>
                        <li className="text-sm md:text-base">Security deposit 20,000 (Refundable)</li>
                      </ul>
                    </td>
                  </motion.tr>
                  <motion.tr variants={rowVariants} className="bg-white">
                    <td className="p-4 md:p-6 font-bold bg-green-100 border-4 border-green-800">VillaMart Share</td>
                    <td className="p-4 md:p-6 border-4 border-green-800">3% revenue share</td>
                    <td className="p-4 md:p-6 bg-green-50 border-4 border-green-800">3% revenue share</td>
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>
          )}
          
          {/* Mobile Table */}
          {!isDesktop && (
            <div className="space-y-8">
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-500 text-white p-4 text-center font-bold">
                  Mobile Outlet
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Investment:</span>
                    <span>3-4 Lakh</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">ROI:</span>
                    <span>8-12 Months</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Monthly Income:</span>
                    <span> Rs. 40,000</span>
                  </div>
                  <div className="border-b pb-2">
                    <span className="font-bold text-green-800 block mb-2">Benefits:</span>
                    <motion.ul 
                      className="list-disc pl-5 space-y-1 text-sm"
                      variants={tableVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Supermarket at doorstep",
                        "Effortless procurement GPS",
                        "Based billing & sales analysis",
                        "No fuel & less expenses",
                        "Brand connect"
                      ].map((item, index) => (
                        <motion.li key={index} variants={benefitVariants}>{item}</motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Franchise Cost:</span>
                    <span>Rs. 30,000 + 20,000 deposit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-green-800">VillaMart Share:</span>
                    <span>3% revenue</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-700 text-white p-4 text-center font-bold">
                  Static Outlet
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Investment:</span>
                    <span>4-5 Lakh</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">ROI:</span>
                    <span>8-12 Months</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Monthly Income:</span>
                    <span> Rs. 40,000</span>
                  </div>
                  <div className="border-b pb-2">
                    <span className="font-bold text-green-800 block mb-2">Benefits:</span>
                    <motion.ul 
                      className="list-disc pl-5 space-y-1 text-sm"
                      variants={tableVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Digitally Local order",
                        "Technology-backed Freshness",
                        "Real time billing & analysis",
                        "Optimised price guidance",
                        "Profit analysis"
                      ].map((item, index) => (
                        <motion.li key={index} variants={benefitVariants}>{item}</motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-bold text-green-800">Franchise Cost:</span>
                    <span>Rs. 30,000 + 20,000 deposit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-green-800">VillaMart Share:</span>
                    <span>3% revenue</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Franchise Visuals Section */}
      <section className="py-12 bg-green-50 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative group"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg bg-white"
                variants={imageVariants}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src="/api/placeholder/400/320" 
                    alt="Static Outlet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Static Outlet</h3>
                      <p className="text-sm">Our strategically located stores bring fresh produce to your neighborhood.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-green-800">Static Outlet</h3>
                  <motion.div 
                    className="mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600">Establish a permanent presence in prime locations</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative group"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg bg-white"
                variants={imageVariants}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src="/api/placeholder/400/320" 
                    alt="Mobile Outlet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">Mobile Outlet</h3>
                      <p className="text-sm">Bringing fresh produce directly to residential areas and communities.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-green-800">Mobile Outlet</h3>
                  <motion.div 
                    className="mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-600">Reach customers directly with our mobile store solution</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Floating Image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/api/placeholder/500/600" 
                alt="Contact us" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 rounded-lg shadow-md">
                <p className="text-lg font-bold">Get in Touch</p>
                <p className="text-sm">We'd love to hear from you!</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - Enquiry Form */}
          <div className="w-full md:w-1/2">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center text-green-800 mb-6">Enquiry</h3>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
                >
                  <p>Thank you! Your message has been successfully sent.</p>
                </motion.div>
              )}
              
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
                >
                  <p>{submitError}</p>
                </motion.div>
              )}
              
              <div className="space-y-4" role="form" aria-label="Contact form">
                <motion.div variants={inputVariants}>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Your Address"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email Address"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter Your Contact Number"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="job">Job</option>
                    <option value="franchise">Franchise</option>
                    <option value="internship">Internship</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="fpo">FPO</option>
                    <option value="shg">SHG</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={inputVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </motion.div>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className={`w-full py-3 text-white font-bold rounded transition-colors ${
                    submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      
    </div>
  );
}

export default FranchisePage;