import React from "react";
import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-12 lg:py-16 lg:flex-row bg-gradient-to-br from-amber-50 to-green-50">
      <div className="mt-6 lg:w-1/2 lg:pr-8 flex flex-col justify-center">
        <h1 className="font-roboto text-4xl text-center font-bold text-green-800 md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Discover Sustainable Farming Insights
        </h1>
        
        <p className="text-green-700 mt-5 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          From soil to harvest, explore articles by seasoned farmers and agricultural experts 
          to enhance your farming knowledge
        </p>
        
        
        <div className="flex mt-6 flex-col lg:flex-row lg:items-center lg:flex-nowrap lg:gap-x-4">
          <span className="text-green-700 font-semibold italic mt-2 lg:mt-0 lg:text-sm xl:text-base">
            Popular Topics:
          </span>
          <ul className="flex flex-wrap gap-x-3 gap-y-3 mt-3 lg:mt-0">
            <li className="rounded-full bg-green-600 px-4 py-2 text-white font-medium text-sm hover:bg-green-700 transition-colors cursor-pointer">
              Organic
            </li>
            <li className="rounded-full bg-green-600 px-4 py-2 text-white font-medium text-sm hover:bg-green-700 transition-colors cursor-pointer">
              Crop Rotation
            </li>
            <li className="rounded-full bg-green-600 px-4 py-2 text-white font-medium text-sm hover:bg-green-700 transition-colors cursor-pointer">
              Sustainability
            </li>
            <li className="rounded-full bg-green-600 px-4 py-2 text-white font-medium text-sm hover:bg-green-700 transition-colors cursor-pointer">
              Permaculture
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full border-4 border-green-600 rounded-lg opacity-70"></div>
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
            src="/images/hero-blog.png"
            alt="Farmers working in sustainable fields"
          />
          <div className="absolute -bottom-4 -right-4 bg-amber-400 rounded-full p-3 z-20 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;