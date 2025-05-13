import React, { useState } from 'react';

const images = [
  { src: '/images/image1.jpg', text: 'Harvesting' },
  { src: '/images/image2.jpg', text: 'Farming' },
  { src: '/images/image3.jpg', text: 'Transport' },
  { src: '/images/image4.jpg', text: 'Market' },
  { src: '/images/image5.jpg', text: 'Retail' },
  { src: '/images/image6.jpg', text: 'Logistics' },
  { src: '/images/image7.jpg', text: 'Export' },
];

const EmpoweringEveryLink = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Text Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-3">
          Empowering every link
        </h2>
        <div className="w-20 h-1 bg-orange-500 mb-6 rounded-full mx-auto lg:mx-0"></div>
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border-l-4 border-orange-400">
          <p className="text-gray-700 text-lg leading-relaxed">
            At each stage of the pre and post harvest journey, our solutions are crafted to simplify business challenges.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We mitigate payment risks, maintain quality standards, smoothen the logistics experience, and distribute real-time information.
            Our products are accessible to all, helping businesses become dependable and trustworthy to one another.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our ultimate goal is to ensure seamless trade of fresh produce from point to point, both locally and globally.
          </p>
          <button className="mt-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Right Image Strip - hidden on small screens */}
      <div className="lg:w-1/2 w-full justify-center hidden md:flex">
        <div className="flex h-[500px] gap-4 overflow-visible">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-lg ${
                activeIndex === idx 
                  ? 'w-40 md:w-64 border-4 border-orange-400' 
                  : 'w-12 md:w-16 border-2 border-orange-300 hover:border-orange-400'
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
                className={`absolute inset-0 bg-gradient-to-t from-orange-500/70 to-transparent flex items-end justify-center transition-opacity duration-300 ${
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
