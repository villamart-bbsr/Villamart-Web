import React, { useState } from 'react';

const images = [
  { src: '/images/image1.jpg', text: 'Harvesting' },
  { src: '/images/image2.jpg', text: 'Sorting' },
  { src: '/images/image3.jpg', text: 'Mobile Outlet' },
  // { src: '/images/image4.jpg', text: 'Produce' },
  { src: '/images/image5.jpg', text: 'Produce' },
  { src: '/images/image6.jpg', text: 'Static Outlet' },
  { src: '/images/image7.jpg', text: 'Export' },
];

const EmpoweringEveryLink = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Text Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-3">
        Empowering the <span className="text-orange-500">Agri Ecosystem</span>
      </h2>
      <div className="w-20 h-1 bg-orange-500 mb-6 rounded-full mx-auto lg:mx-0"></div>
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border-l-4 border-orange-400">
        <p className="text-gray-700 text-lg leading-relaxed">
          At VillaMart, we are committed to streamlining every step of the farm-to-market journey with smart, reliable solutions.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          From reducing payment uncertainties to ensuring product quality and simplifying logistics, we empower farmers, buyers, and distributors with transparency and real-time insights.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to foster trust across the supply chain and enable seamless, efficient trade of fresh produce — locally and globally.
        </p>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span className="text-base">Secure payment processing</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span className="text-base">Real-time quality tracking</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span className="text-base">Streamlined logistics</span>
            </div>
            <div className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span className="text-base">Data-driven insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>

      
      {/* Right Image Strip - hidden on small screens */}
      <div className="lg:w-1/2 w-full justify-center hidden md:flex">
        <div className="flex h-[500px] gap-5 overflow-visible ">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                activeIndex === idx 
                  ? 'w-40 md:w-64 border-4 border-orange-400' 
                  : 'w-12 md:w-18 border-2 border-orange-300 hover:border-orange-400'
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img
                src={img.src}
                alt={`strip-${idx}`}
                className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent flex items-end justify-center transition-opacity duration-300 ${
                  activeIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-xl font-semibold pb-4">
                  {img.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringEveryLink;
