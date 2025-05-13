import React from "react";
import { images } from "../../../constants";
import Search from "../../../components/Search";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-8 lg:flex-row bg-amber-50">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-green-800 md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Discover Sustainable Farming Insights
        </h1>
        <p className="text-green-700 mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          From soil to harvest, explore articles by seasoned farmers and agricultural experts to enhance your farming knowledge
        </p>
        {/* <Search className="mt-10 lg:mt-6 xl:mt-10" /> */}
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-green-600 font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Topics:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-green-700 bg-opacity-20 px-3 py-1.5 text-white font-semibold">
              Organic
            </li>
            <li className="rounded-lg bg-green-700 bg-opacity-20 px-3 py-1.5 text-white font-semibold">
              Crop Rotation
            </li>
            <li className="rounded-lg bg-green-700 bg-opacity-20 px-3 py-1.5 text-white font-semibold">
              Sustainability
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2 p-6">
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full border-4 border-amber-700 rounded-lg"></div>
          <img
            className="w-full object-cover rounded-lg shadow-md relative"
            src={images.HeroImage}
            alt="Farmers working in fields"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;