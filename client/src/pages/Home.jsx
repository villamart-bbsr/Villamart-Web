import { useState } from "react";

import VideoPopup from "../components/HomePage/VideoPopup";
import About from "../components/HomePage/About";
import SupportedBy from "../components/HomePage/SupportedBy";
import Awards from "../components/HomePage/Awards";
import Achievements from "../components/HomePage/Achievements";
import Testimonials from "../components/HomePage/Testimonials";
import Footer from "../components/HomePage/Footer";
import { motion } from "framer-motion";
import hero from "../assets/images/hero-image.png";
import Partners from "../components/HomePage/Partners";
// import VideoPage from "../components/HomePage/VideoPage";
import VillaMartCards from "../components/HomePage/VillamartCards";
import FarmerBlog from "../components/HomePage/farmerBlog";

function Home() {
  return (
    <div className="font-poppins">
      {/* hero */}
      <div className="relative w-full h-[600px] overflow-hidden bg-fixed bg-cover bg-center">
        {/* Background image */}
        <img
          src="/images/back-hero.png"
          alt="Hero banner"
          className="absolute w-full h-full object-cover bg-fixed bg-cover bg-center"
        />

        {/* Left image */}
        <motion.img
          src="/images/left-img.png"
          alt=""
          className="absolute left-0 top-10 h-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Center image */}
        <motion.img
          src="/images/center-img.png"
          alt=""
          className="absolute left-3/4 transform -translate-x-1/2 top-10 h-45"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Right image */}
        <motion.img
          src="/images/right-img.png"
          alt=""
          className="absolute right-0 top-50 h-55"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        />
      </div>

      <About />
      <SupportedBy />
      <Awards />
      <Partners />
      {/* <VideoPage/> */}
      <VillaMartCards />
      <Achievements />
      <Testimonials />
      <FarmerBlog />
    </div>
  );
}

export default Home;
