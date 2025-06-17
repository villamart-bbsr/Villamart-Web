import { useState, useEffect } from 'react';
import { Play, Newspaper, ChevronRight, ChevronLeft, ExternalLink, X, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function FarmMediaPage() {
  const [activeTab, setActiveTab] = useState('news');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpening, setIsModalOpening] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isTabChanging, setIsTabChanging] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  
  // Sample media data
  const mediaItems = {
    videos: [
      { 
        id: 1, 
        title: "Discussion with Founder & CEO, VillaMart on Onion price control and storage @KanakNewsOdisha", 
        duration: "3:45", 
        link: "https://www.youtube.com/watch?v=gOydT3umRCs&t=232s",
        image: "/images/media1.png"
      },
      { 
        id: 2, 
        title: "Villamart_MBC TV_Scientists Return From Abroad", 
        duration: "5:20", 
        link: "https://www.youtube.com/watch?v=uL4WgoPCpWw",
        image: "/images/media2.png"
      },
      { 
        id: 3, 
        title: "Villamart_Agri startup_News 18 Odia", 
        duration: "4:12", 
        link: "https://www.youtube.com/watch?v=SZZnA7oN0_8&t=22s",
        image: "/images/media3.png"
      },
      { 
        id: 4, 
        title: "Villamart_Agri startup_Village development_ Zee Odisha", 
        duration: "7:30", 
        link: "https://www.youtube.com/watch?v=RyTbPCD5Upo&t=1s",
        image: "/images/media4.png"
      },
    ],
    news: [
      { 
        id: 1, 
        title: "Engineer Left US to Help Farmers Earn with Mobile Mandis", 
        date: "March 01, 2023", 
        excerpt: "Appalled by the news of farmer suicides in India, engineer Ramesh Biswal left life in the US to return to his hometown....",
        link: "https://thebetterindia.com/311837/engineer-quit-us-job-to-launch-villa-mart-mobile-mandi-farmer-suicides-fair-income/",
        image: "/images/theBetterIndia.png"
      },
      { 
        id: 2, 
        title: "How Bhubaneswars agritech ecosystem is fast gaining momentum", 
        date: "January 10, 2024", 
        excerpt: "Bhubaneswar is fast becoming a hub for agritech startups, with the city now home to over 100 agritech companies.",
        link: "https://economictimes.indiatimes.com/small-biz/sme-sector/how-bhubaneswars-agritech-ecosystem-is-fast-gaining-momentum/articleshow/106688288.cms?from=mdr",
        image: "/images/EconomicTimes.jpeg"
      },
      { 
        id: 3, 
        title: "This agri startup is helping farmers sell their produce at fair prices", 
        date: "February 25, 2020", 
        excerpt: "Odisha-based agritech startup Villa Mart is helping farmers sell their produce at fair prices through its mobile marketplace platform.",
        link: "https://yourstory.com/socialstory/2020/02/agri-startup-villa-mart-iit-alumnus-farmers-produce-mobile-market",
        image: "/images/your_story.png"
      },
      {
        id:4,
        title:"STRIVING TO TRANSFORM RURAL ODISHA",
        date:"December 18, 2018",
        excerpt: "Villamart is a revenue model for the development of rural India and intended to create a sustainable livelihood.",
        link: "https://www.orissapost.com/striving-to-transform-rural-odisha/",
        image: "/images/OrissaPOST.png"


      }
    ]
  };

  // Featured items for the hero slider
  const featuredItems = [
    {
      title: "Award-Winning AgriTech Startup",
description: "Proud recipient of accolades for revolutionizing sustainable farming through innovative technology and fresh organic produce.",
bgColor: "bg-green-700",
image: "/images/awards.jpeg"

    },
    {
      title: "Our Innovision for Sustainable Farming",
description: "Discover how our agri-tech Innovision is transforming farming with smart technologies, eco-friendly practices, and a vision for a greener future.",
bgColor: "bg-orange-500",
image: "/images/ourInnovision.jpeg"

    },
    {
      title: "Farm Tours Now Available",
      description: "Book a tour to experience our beautiful farm firsthand.",
      bgColor: "bg-green-700",
      image: "/api/placeholder/1200/700?text=Tours"
    }
  ];

  // Feature slider automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  // Navigation for slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  // Animation classes for items
  const itemAnimationClass = "transform transition duration-500 hover:scale-105";

  // Function to get YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return `/api/placeholder/500/300?text=Video+Thumbnail`;
  };

  // Function to open video modal with animation
  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpening(true);
    setIsVideoLoading(true);
    setTimeout(() => setIsModalOpening(false), 300);
  };

  // Function to close video modal with animation
  const closeVideoModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedVideo(null);
      setIsModalClosing(false);
      setIsVideoLoading(true);
    }, 300);
  };

  // Function to handle tab change with animation
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsTabChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => setIsTabChanging(false), 300);
    }, 300);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO title="Media Center | VillaMart" description="Explore our media center for the latest videos and news about VillaMart's journey, innovations, and community impact." />
      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes modalFadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }
        
        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes tabFadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .modal-enter {
          animation: modalFadeIn 0.3s ease-out forwards;
        }
        
        .modal-exit {
          animation: modalFadeOut 0.3s ease-out forwards;
        }

        .tab-enter {
          animation: tabFadeIn 0.3s ease-out forwards;
        }
        
        .tab-exit {
          animation: tabFadeOut 0.3s ease-out forwards;
        }

        .tab-button {
          position: relative;
          overflow: hidden;
        }

        .tab-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #f97316;
          transform: scaleX(0);
          transition: transform 0.2s ease-out;
          transform-origin: center;
        }

        .tab-button.active::after {
          transform: scaleX(1);
        }
      `}</style>

      {/* Enhanced Video Modal with Smooth Transitions */}
      {selectedVideo && (
        <div 
          className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalClosing ? 'modal-exit' : 'modal-enter'
          }`}
          onClick={closeVideoModal}
        >
          <div 
            className={`bg-white rounded-2xl w-full max-w-7xl h-full max-h-[90vh] relative shadow-2xl transition-all duration-300 transform ${
              isModalOpening ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
            } ${isModalClosing ? 'scale-95 opacity-90' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeVideoModal}
              className="cursor-pointer absolute -top-4  -right-4 bg-red-500 text-white rounded-full p-3 hover:bg-red-600 transition-all duration-300 z-10 shadow-lg hover:scale-110 transform hover:rotate-90"
            >
              <X size={28} />
            </button>
            <div className="w-full h-5/6 rounded-t-2xl overflow-hidden relative">
              {isVideoLoading && (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
                    <p className="text-white text-lg font-medium">Loading video...</p>
                  </div>
                </div>
              )}
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.link)}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full transition-all duration-500"
                style={{ minHeight: '500px' }}
                onLoad={() => setIsVideoLoading(false)}
              ></iframe>
            </div>
            <div className="p-8 h-1/6 flex items-center">
              <h3 className="text-3xl font-bold text-gray-800 transition-all duration-300">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Featured Slider */}
      <div className="relative overflow-hidden h-[500px] bg-green-900">
        {featuredItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Placeholder with background color */}
            <div className={`absolute inset-0 ${item.bgColor} opacity-90`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-fit  opacity-30"
                // style={{ maxHeight: '400px' }}
              />
            </div>
            
            <div className="relative z-10 container mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl mb-8 max-w-2xl">{item.description}</p>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={prevSlide} 
            className="cursor-pointer bg-black bg-opacity-30 text-white p-2 rounded-r-lg hover:bg-opacity-50 transition duration-300"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={nextSlide} 
            className="cursor-pointer bg-black bg-opacity-30 text-white p-2 rounded-l-lg hover:bg-opacity-50 transition duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">VillaMart Media Center</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore videos and news. See our daily operations, meet our team, and stay updated with our latest news and events.
          </p>
        </div>
        
        {/* Enhanced Media Navigation Tabs with Smooth Transitions */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button 
            onClick={() => handleTabChange('videos')}
            className={`tab-button cursor-pointer flex items-center px-6 py-3 font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'videos' 
                ? 'text-orange-500 active bg-orange-50 rounded-t-lg' 
                : 'text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg'
            }`}
          >
            <Play className={`mr-2 transition-transform duration-300 ${activeTab === 'videos' ? 'rotate-0' : '-rotate-45'}`} size={20} />
            Videos
          </button>
          <button 
            onClick={() => handleTabChange('news')}
            className={`tab-button cursor-pointer flex items-center px-6 py-3 font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'news' 
                ? 'text-orange-500 active bg-orange-50 rounded-t-lg' 
                : 'text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg'
            }`}
          >
            <Newspaper className={`mr-2 transition-transform duration-300 ${activeTab === 'news' ? 'rotate-0' : '-rotate-45'}`} size={20} />
            News
          </button>
        </div>
        
        {/* Tab Content with Smooth Transitions */}
        <div className={`transition-all duration-300 ${isTabChanging ? 'opacity-0' : 'opacity-100'}`}>
          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ${isTabChanging ? 'tab-exit' : 'tab-enter'}`}>
              {mediaItems.videos.map((video) => (
                <div 
                  key={video.id} 
                  className={`${itemAnimationClass} bg-white rounded-lg overflow-hidden shadow-md`}
                >
                  <div className="relative h-64 bg-gray-200">
                    <img 
                      src={video.image || getYouTubeThumbnail(video.link)} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `/api/placeholder/500/300?text=${encodeURIComponent(video.title)}`;
                      }}
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all duration-300"
                      onClick={() => openVideoModal(video)}
                    >
                      <div className="bg-orange-500 rounded-full p-4 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-orange-600">
                        <Play size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-green-800 mb-2">{video.title}</h3>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => openVideoModal(video)}
                        className="cursor-pointer text-orange-500 hover:text-orange-600 font-medium flex items-center"
                      >
                        Watch Video <ChevronRight size={16} className="ml-1" />
                      </button>
                      {video.link && (
                        <a 
                          href={video.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-green-600 hover:text-green-800 font-medium"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          View Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* News List - Image URLs preserved exactly as provided */}
          {activeTab === 'news' && (
            <div className={`space-y-6 ${isTabChanging ? 'tab-exit' : 'tab-enter'}`}>
              {mediaItems.news.map((article) => (
                <div 
                  key={article.id} 
                  className={`${itemAnimationClass} bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row`}
                >
                  <div className="md:w-1/4 relative bg-gray-100 flex items-center justify-center">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-contain p-2"
                      style={{ maxHeight: '150px' }}
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="text-sm text-orange-500 font-medium mb-2">{article.date}</div>
                    <h3 className="font-bold text-xl text-green-800 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer text-orange-500 hover:text-orange-600 font-medium flex items-center"
                      >
                        Read Full Article <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}