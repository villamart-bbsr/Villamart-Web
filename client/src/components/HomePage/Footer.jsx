import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/moreInfo" },
    { name: "Journey", path: "/journey" },
    { name: "Media", path: "/media" },
    { name: "Gallery", path: "/gallery" },
    { name: "Franchise Model", path: "/franchise" },
    // { name: "Blog Page", path: "/blogPage" },
    { name: "Read Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" }
  ];

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
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5" fill="currentColor">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
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
      
      // Check if the response is ok before trying to parse JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Try to parse the JSON response
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

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">VillaMart</h3>
                <p className="text-green-400 text-sm">Happy Farmer Happy Consumer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting farmers directly with consumers for fresh, sustainable produce and transparent food sourcing.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@villamart.in
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 123 456 7890
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="h-1 w-8 bg-green-400 rounded mr-3"></span>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-gray-400 hover:text-green-400 text-sm py-1 transition-colors duration-500 hover:translate-x-1 transform duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="h-1 w-8 bg-green-400 rounded mr-3"></span>
              Stay Connected
            </h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white text-sm focus:outline-none focus:border-green-400 transition-colors"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-r-md transition-colors duration-200 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </button>
                </div>
                {status.message && (
                  <p className={`text-sm ${
                    status.type === "success" ? "text-green-400" : "text-red-400"
                  }`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Follow us</p>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white h-10 w-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-500 mb-2 md:mb-0">
              © {new Date().getFullYear()} Villamart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-500 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-green-400 transition-colors">
              Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;