import { useState, useEffect, useRef } from "react";

export default function VillaMartJourney() {
  const [isVisible, setIsVisible] = useState({});
  const timelineSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Function to handle smooth scrolling to timeline section
  const handleExploreClick = () => {
    // Scroll to the bottom of the header section (right before timeline section)
    window.scrollTo({
      top: window.innerHeight, // Scroll to the end of viewport height (header height)
      behavior: 'smooth'
    });
  };

  const timelineData = [
    {
      id: "2024",
      year: "2024",
      content:
        "The franchise model for both Mobile and Static outlets is prepared, with a focus on technology development to drive expansion.",
      isLeft: true,
    },
    {
      id: "2023",
      year: "2023",
      content:
        "Enabled warehouse aimed at reducing waste to below 5%. Simultaneously, we optimized the Franchise model of our Mobile Outlets within the city.",
      isLeft: false,
    },
    {
      id: "2022",
      year: "2022",
      content:
        "We extended our operations to Bhubaneswar, upgrading from Diesel-operated to Battery-operated Mobile Outlets. Additionally, we incorporated a no energy cooling system into the mobile supermarket to preserve the freshness of vegetables.",
      isLeft: true,
    },
    {
      id: "2021",
      year: "2021",
      content:
        "Implemented the HUB & Spoke model along with advanced technology to facilitate our expansion efforts.",
      isLeft: false,
    },
    {
      id: "2020",
      year: "2020",
      content:
        "Amidst the COVID-19 pandemic, we experienced a significant surge in demand and consequently expanded our operations to include a B2B wing. We began supplying products to Kirana Stores located in rural villages to meet the increased demand.",
      isLeft: true,
    },
    {
      id: "2019",
      year: "2019",
      content:
        "We conducted a pilot program utilizing a Static Outlet Model featuring a 100 sq ft shop, providing a supermarket-like experience for vegetables, groceries, and organic products. This pilot was also initiated to explore franchise opportunities.",
      isLeft: false,
    },
    {
      id: "2018",
      year: "2018",
      content:
        "We introduced a cost-effective Static Outlet model in Nayagarh, a small town, to address the purchasing preferences of both rural and urban consumers, ensuring a balanced approach to buying and selling.",
      isLeft: true,
    },
    {
      id: "2017",
      year: "2017",
      content:
        "We initiated our project with a Diesel Operated Mobile Outlet, operating across 60 villages to pilot the Mobile Supermarket concept. Our inventory consisted of approximately 1000 SKUs, comprising vegetables, groceries, and various FMCG products tailored to meet the demands of rural consumers.",
      isLeft: false,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 font-sans">
      {/* Enhanced Hero Section */}
      <header
        className="bg-center bg-cover bg-no-repeat bg-fixed relative h-screen overflow-hidden "
        style={{ 
          backgroundImage: "url('/images/sub-header.png')"
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/70 to-green-700/80"></div>
        
        {/* Decorative elements - floating vegetables/produce */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 opacity-20 animate-float-slow">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="white" />
            </svg>
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 opacity-30 animate-float">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" rx="10" fill="white" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-1/4 w-32 h-32 opacity-20 animate-float-slow">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,90 10,90" fill="white" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-25 animate-float-medium">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="white" />
            </svg>
          </div>
        </div>
        
        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <svg className="mx-auto w-16 h-16 text-green-400 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Journey
            </h1>
            <div className="h-1 w-32 bg-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto mb-10">
              From humble beginnings to revolutionizing rural retail, follow
              VillaMart's growth story of connecting farmers to consumers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleExploreClick}
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Our Story
              </button>
              <a
              href="/moreInfo" 
              className="cursor-pointer bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-10 h-10 text-white opacity-70 cursor-pointer" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleExploreClick}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* Timeline Section */}
      <div ref={timelineSectionRef} className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Growth Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Follow the key milestones in our journey as we revolutionized rural retail and created sustainable connections between farmers and consumers.</p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-700"></div>

          {/* Timeline items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                id={`timeline-${item.id}`}
                className={`timeline-item flex mb-12 ${
                  item.isLeft ? "flex-row" : "flex-row-reverse"
                } relative`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    isVisible[`timeline-${item.id}`]
                      ? item.isLeft
                        ? "animate-fade-right"
                        : "animate-fade-left"
                      : "opacity-0"
                  } transition-all duration-1000`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-bold text-green-800 mb-3">
                      {item.year}
                    </h2>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6">
                  <div
                    className={`bg-orange-500 rounded-full w-6 h-6 border-4 border-green-700 ${
                      isVisible[`timeline-${item.id}`] ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>

                {/* Empty space for opposite side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Parallax Section */}
      <div
        className="bg-fixed bg-center bg-cover py-24 relative"
        style={{ backgroundImage: "url('/api/placeholder/1920/800')" }}
      >
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-green-100 leading-relaxed">
              "Creating a sustainable ecosystem that empowers farmers and brings fresh, quality products directly to consumers, transforming rural retail one village at a time."
            </p>
          </div>
        </div>
      </div>

      {/* Add your CTA and Footer sections back here if needed */}
      
    </div>
  );
}

// Define the necessary animations in your global CSS or a local CSS module
