import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const StackCards = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollingRef = useRef(false);
  const observerRef = useRef(null);

  // Animation controls for large screen grid
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: '0px 0px -100px 0px' });

  // Impact items data
  const impactItems = [
    {
      title: 'Empowering Farmers',
      description: 'Direct access to consumers allows farmers to sell their produce without middlemen, improving income and reducing exploitation. Tech-enabled procurement offers fair pricing and transparency.',
      emoji: '👨‍🌾',
      color: 'green',
    },
    {
      title: 'Reducing Food Waste',
      description: 'Technologies like solar dryers, AI procurement, and smart storage reduce waste, optimize inventory, and ensure faster distribution to reduce spoilage.',
      emoji: '♻️',
      color: 'orange',
    },
    {
      title: 'Enhancing Food Safety',
      description: 'Cool storage, Ozone cleaning, and freeze drying reduce chemicals and preserve freshness, promoting better health through safer produce.',
      emoji: '🛡️',
      color: 'green',
    },
    {
      title: 'Supporting Local Economies',
      description: 'VillaMart empowers local SHGs, PGs, and FPOs with tech, while its franchise model drives local employment and economic growth.',
      emoji: '🏪',
      color: 'orange',
    },
    {
      title: 'Environmental Impact',
      description: 'Battery-powered mobile markets, reduced food waste, and short supply chains help lower emissions and support sustainable agriculture.',
      emoji: '🌍',
      color: 'green',
    },
    {
      title: 'Creation of Self-Employment',
      description: 'Franchising and tech operations create diverse self-employment opportunities, fostering inclusive economic development.',
      emoji: '💼',
      color: 'orange',
    },
  ];

  const cards = children || impactItems.map((item, index) => (
    <div
      key={index}
      className="rounded-xl shadow-lg overflow-hidden border-b-4 p-6 flex flex-col justify-between text-center transition-transform duration-300 hover:scale-[1.02] min-h-[300px]"
      style={{
        borderColor: item.color === 'green' ? '#22c55e' : '#f97316',
        background: item.color === 'green'
          ? 'linear-gradient(to bottom right, #f0fdf4, #ffffff)'
          : 'linear-gradient(to bottom right, #fff7ed, #ffffff)',
      }}
    >
      <div className={`text-6xl mb-3 ${item.color === 'green' ? 'text-green-500' : 'text-orange-500'}`}>
        {item.emoji}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${item.color === 'green' ? 'text-green-700' : 'text-orange-700'}`}>
        {item.title}
      </h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  ));

  const animateStackCards = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top;
    const cardHeight = 200; // Approximate card height
    const marginY = 16; // Gap between cards (translate-y-4 = 16px)

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      const scrolling = -containerTop - index * (cardHeight + marginY);

      if (scrolling > 0) {
        const scale = Math.max(0.8, (cardHeight - scrolling * 0.05) / cardHeight);
        const translateY = marginY * index;

        item.style.transform = `translateY(${translateY}px) scale(${scale})`;
      } else {
        item.style.transform = `translateY(${marginY * index}px) scale(1)`;
      }
    });

    scrollingRef.current = false;
  };

  const handleScroll = () => {
    if (scrollingRef.current || !isIntersecting || !isSmallScreen) return;
    scrollingRef.current = true;
    requestAnimationFrame(animateStackCards);
  };

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up Intersection Observer for small screen stack effect
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(container);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && isSmallScreen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isIntersecting, isSmallScreen]);

  // Framer Motion animation for large screens
  useEffect(() => {
    if (isInView && !isSmallScreen) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1, // Staggered animation
          duration: 0.5,
          ease: 'easeOut',
        },
      }));
    }
  }, [isInView, isSmallScreen, controls]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Background gradient decorative element */}
        <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/30 to-green-100/30 blur-3xl -z-10" />

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-10 bg-green-700 mr-4 rounded-full" />
            <h1 className="text-4xl font-bold text-green-700">
              Societal <span className="text-orange-500">Impact</span>
            </h1>
            <div className="h-1 w-10 bg-orange-500 ml-4 rounded-full" />
          </div>
        </div>

        {/* Cards Container - Grid on large screens, Stack on small screens */}
        {isSmallScreen ? (
          // Stack Cards Effect for Small Screens (Unchanged)
          <ul ref={containerRef} className={`space-y-4 ${className}`}>
            {React.Children.map(cards, (child, index) => (
              <li
                key={index}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="sticky top-24 transform-gpu transition-transform duration-75 ease-out"
                style={{ transformOrigin: 'center top' }}
              >
                {child}
              </li>
            ))}
          </ul>
        ) : (
          // 3x2 Grid with Motion for Large Screens
          <motion.div
            ref={containerRef}
            className="grid grid-cols-3 gap-8 lg:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {React.Children.map(cards, (child, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="transform transition-transform duration-300 hover:scale-105 w-full"
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StackCards;