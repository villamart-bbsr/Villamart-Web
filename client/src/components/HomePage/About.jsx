import { useState, useEffect, useRef } from 'react';

export default function AgriPlatformHero() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible && !hasCompleted) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else if (!isVisible) {
        videoRef.current.pause();
        setHasCompleted(false);
      }
    }
  }, [isVisible, hasCompleted]);

  useEffect(() => {
    const handleVideoEnded = () => {
      setHasCompleted(true);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    <span className="whitespace-nowrap z-10 relative">Empowering India's Agri Future</span><br />
    <span className="text-orange-500">One Village at a Time</span>
  </h1>
  <div className="w-24 h-1 bg-orange-500"></div>
  <p className="text-gray-700 text-lg">
    VillaMart is transforming the rural economy by connecting small farmers directly to urban consumers through tech-enabled, sustainable, and inclusive platforms.
  </p>
  <p className="text-gray-700 text-lg">
    We enable FPOs, SHGs, and micro-entrepreneurs to thrive by providing access to markets, mobile supermarkets, and smart storage solutions — helping build a trusted farm-to-fork ecosystem.
  </p>
  <a href="/moreInfo" className="cursor-pointer mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold transition duration-300">
    Learn More About VillaMart
  </a>
</div>


        {/* Video / Illustration */}
        <div className="md:w-1/2 relative  overflow-hidden ">
          <video
            ref={videoRef}
            src="/videos/animation.mp4"
            muted
            className="w-full h-auto object-cover"
            style={{ maxHeight: '500px' }}
          ></video>
        </div>
      </div>
    </div>
  );
}
