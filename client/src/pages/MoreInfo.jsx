import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FaLeaf,
  FaUsers,
  FaRecycle,
  FaShieldAlt,
  FaStore,
  FaGlobe,
  FaBriefcase,
} from 'react-icons/fa';
import Business from "../components/AboutPage/business-model.jsx";
import VideoText from "../components/AboutPage/videoText.jsx";
import AnimatedOverlay from '../components/AboutPage/AnimatedOverlay.jsx';
import AboutGrid from '../components/AboutPage/AboutGrid.jsx';
import AboutModel from '../components/AboutPage/AboutModel.jsx';
import OverallModel from '../components/AboutPage/OverallModel.jsx';
import OurApproach from '../components/AboutPage/OurApproach.jsx';
import InnovativeApproach from '../components/AboutPage/InnovativeApproach.jsx';
import SocietalImpact from '../components/AboutPage/SocietalImpact.jsx';

const About = () => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const impactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const tractorX = useTransform(scrollYProgress, [0, 1], ['-5%', '1200%']);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [flippedCards, setFlippedCards] = useState({});

  const flipCardStyles = {
    flipCard: "cursor-pointer perspective-1000 h-full",
    flipCardInner: "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
    flipped: "rotate-y-180",
  };

  useEffect(() => {
    let rafId;
    let lastUpdate = 0;
    const throttleMs = 16;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;

      lastUpdate = now;
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const isIntroInView = useInView(introRef, { once: true, margin: '-100px' });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const isImpactInView = useInView(impactRef, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const calculateParallaxMovement = (factor = 1) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = ((mousePosition.x - centerX) / centerX) * factor * 10;
    const offsetY = ((mousePosition.y - centerY) / centerY) * factor * 10;

    return { x: offsetX, y: offsetY };
  };

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className='bg-white text-black'>
      
      {/* Tractor animation - hidden on small screens */}
      <div className="hidden md:block">
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-transparent z-50 pointer-events-none">
          <motion.div
            className="absolute bottom-4 transform scaleX(-1)"
            style={{ x: tractorX }}
          >
            <img src="/images/tractor.png" alt="" className='h-20' />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-3 bg-green-800" />

          <div className="absolute bottom-3 left-0 right-0 h-6">
            <div className="flex justify-between">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-1.5 h-6 bg-green-700" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header
        className="bg-fixed bg-center bg-cover bg-no-repeat relative h-96 overflow-hidden"
        style={{
          backgroundImage: "url('/images/sub-header.png')"
        }}
      >
        <AnimatedOverlay />
      </header>

      {/* Main Content */}
      <div className='mx-auto w-full md:px-8'>
        <OurApproach />
        <OverallModel />
        <Business />
        <AboutModel />
        <InnovativeApproach />
        <AboutGrid />
      </div>

      <section className="w-full mx-auto py-16 px-4 md:px-8">
        <SocietalImpact />
      </section>
    </div>
  );
};

export default About;
