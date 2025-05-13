import React from "react";
import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#365314"
        />
      </svg>

      <section className="relative bg-green-900 px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-amber-100 font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get seasonal farming tips delivered to your inbox weekly
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-green-700 border-2 border-amber-300 focus:outline-none focus:border-amber-500"
                placeholder="Your Email"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-amber-600 hover:bg-amber-700 transition-colors duration-300 text-white font-bold md:w-fit md:whitespace-nowrap">
                Join Our Community
              </button>
            </div>
            <p className="text-amber-100 text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-amber-200 md:not-italic md:font-normal md:text-amber-200">
                Get this week's farming calendar
              </span>{" "}
              when you subscribe today. We'll send you seasonal planting guides, harvest tips, and community updates.
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-amber-500 rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-amber-200 rounded-lg opacity-[.3] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative shadow-lg">
                <img
                  src={images.CtaImage}
                  alt="Seasonal farming calendar"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 rounded-t-lg"
                />
                <div className="p-5 bg-amber-50 rounded-b-lg">
                  <h2 className="font-roboto font-bold text-xl text-green-800 md:text-2xl lg:text-[28px]">
                    Sustainable Farming
                  </h2>
                  <p className="text-green-700 mt-3 text-sm md:text-lg">
                    Learn how regenerative agriculture practices can improve your soil health and crop yields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;