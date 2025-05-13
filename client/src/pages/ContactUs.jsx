import React, { useState } from 'react';
import { MapPin, Phone, Smartphone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    address: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.fullname || !formData.address || !formData.email || !formData.mobile || formData.subject === '' || !formData.message) {
      setError('Please fill all the fields');
      return false;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          fullname: '',
          address: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen font-sans text-black">
      {/* Header Banner */}
      <div className="relative h-64 bg-gradient-to-r from-green-800 to-green-600 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="w-full h-full bg-[url('/api/placeholder/1600/400')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg animate-fadeIn">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Map Section */}
      <section className="w-4/5 mx-auto py-16 animate-slideUp">
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4375955588825!2d85.76706137390526!3d20.240678581218706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a702ab9cc945%3A0x5c10aee0f127b9a5!2sVillamart%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709877460897!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="w-4/5 mx-auto pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="flex items-start mb-8 group hover:translate-x-1 transition-transform duration-300">
              <div className="mr-6">
                <div className="bg-orange-100 p-4 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <MapPin size={28} />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium text-gray-800 mb-1">168/2446, Krishna Vihar, Patrapada</h5>
                <p className="text-gray-600">Bhubaneswar, Odisha 751019</p>
              </div>
            </div>

            <div className="flex items-start mb-8 group hover:translate-x-1 transition-transform duration-300">
              <div className="mr-6">
                <div className="bg-green-100 p-4 rounded-full text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <Phone size={28} />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium text-gray-800 mb-1">+91 674 3529604</h5>
                <p className="text-gray-600">Monday to Saturday, 10AM to 6PM</p>
              </div>
            </div>

            <div className="flex items-start mb-8 group hover:translate-x-1 transition-transform duration-300">
              <div className="mr-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <Smartphone size={28} />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium text-gray-800 mb-1">+91 80931 234 11 / 12 / 13</h5>
                <p className="text-gray-600">Monday to Saturday, 10AM to 6PM</p>
              </div>
            </div>

            <div className="flex items-start mb-8 group hover:translate-x-1 transition-transform duration-300">
              <div className="mr-6">
                <div className="bg-purple-100 p-4 rounded-full text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <Mail size={28} />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium text-gray-800 mb-1">
                  <a href="mailto:info@villamart.in" className="hover:text-orange-500 transition-colors">info@villamart.in</a>
                </h5>
                <p className="text-gray-600">Email us your query</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a message
              </h3>
              
              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Your Address"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Your Contact No"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                <div className="mb-4">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="job">Job</option>
                    <option value="internship">Internship</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="fpo">FPO</option>
                    <option value="shg">SHG</option>
                    <option value="govt">Govt</option>
                    <option value="ngo">NGO</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>

                {error && (
                  <p className="text-red-500 mb-4">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg flex items-center transition-all duration-300 group hover:scale-105 active:scale-95"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-700 ease-out opacity-20 group-hover:w-full" />
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Send Message</span>
                      <Send className="ml-2 w-5 h-5" />
                    </div>
                  )}
                </button>
                
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;