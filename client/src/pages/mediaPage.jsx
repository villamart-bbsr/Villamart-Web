import { useState, useEffect } from 'react';
import { Play, Newspaper, ChevronRight, ChevronLeft, Link as LinkIcon } from 'lucide-react';

export default function FarmMediaPage() {
  const [activeTab, setActiveTab] = useState('videos');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample media data
  const mediaItems = {
    videos: [
      { id: 1, title: "Planting Season Timelapse", duration: "3:45" },
      { id: 2, title: "Meet the Farmers", duration: "5:20" },
      { id: 3, title: "Harvesting Techniques", duration: "4:12" },
      { id: 4, title: "Farm Tour", duration: "7:30" },
    ],
    news: [
      { 
        id: 1, 
        title: "Farm Wins Sustainability Award", 
        date: "April 15, 2025", 
        excerpt: "Our commitment to sustainable farming practices has been recognized...",
        link: "https://example.com/sustainability-award"
      },
      { 
        id: 2, 
        title: "New Community Program Launched", 
        date: "March 22, 2025", 
        excerpt: "We're excited to announce our new program connecting local schools with farming education...",
        link: "https://example.com/community-program"
      },
      { 
        id: 3, 
        title: "Seasonal Produce Update", 
        date: "February 10, 2025", 
        excerpt: "This season we're featuring our award-winning organic vegetables and fruits...",
        link: "https://example.com/seasonal-update"
      },
      { 
        id: 4, 
        title: "Farm-to-Table Partnership with Local Restaurants", 
        date: "January 25, 2025", 
        excerpt: "We've partnered with five local restaurants to provide fresh, organic produce directly from our farm...",
        link: "https://example.com/farm-to-table"
      },
      { 
        id: 5, 
        title: "New Organic Certification Achieved", 
        date: "December 18, 2024", 
        excerpt: "Our farm has received the highest level of organic certification after rigorous evaluation...",
        link: "https://example.com/organic-certification"
      },
      { 
        id: 6, 
        title: "Winter Workshop Series Announced", 
        date: "November 30, 2024", 
        excerpt: "Join us for our winter workshop series covering topics from home gardening to sustainable farming practices...",
        link: "https://example.com/winter-workshops"
      },
      { 
        id: 7, 
        title: "Expanded CSA Program for Next Season", 
        date: "October 15, 2024", 
        excerpt: "Due to popular demand, we're expanding our Community Supported Agriculture program for the upcoming season...",
        link: "https://example.com/csa-expansion"
      },
      { 
        id: 8, 
        title: "Innovative Irrigation System Reduces Water Usage by 40%", 
        date: "September 5, 2024", 
        excerpt: "Our newly implemented smart irrigation system has significantly reduced our water consumption while maintaining crop yields...",
        link: "https://example.com/irrigation-innovation"
      },
      { 
        id: 9, 
        title: "Annual Farm Festival Dates Announced", 
        date: "August 20, 2024", 
        excerpt: "Mark your calendars for our biggest event of the year! The Annual Farm Festival will take place on...",
        link: "https://example.com/farm-festival"
      }
    ]
  };

  // Feature slider automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Featured items for the hero slider
  const featuredItems = [
    {
      title: "Our Award-Winning Produce",
      description: "Discover the fresh, organic vegetables and fruits grown with care on our farm.",
      bgColor: "bg-orange-500",
      image: "/api/placeholder/1200/700?text=Produce"
    },
    {
      title: "Sustainable Farming Practices",
      description: "Learn about our commitment to environmentally friendly farming methods.",
      bgColor: "bg-green-700",
      image: "/api/placeholder/1200/700?text=Sustainable"
    },
    {
      title: "Farm Tours Now Available",
      description: "Book a tour to experience our beautiful farm firsthand.",
      bgColor: "bg-green-600",
      image: "/api/placeholder/1200/700?text=Tours"
    }
  ];

  // Navigation for slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  // Animation classes for items
  const itemAnimationClass = "transform transition duration-500 hover:scale-105";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Featured Slider */}
      <div className="relative overflow-hidden h-96 bg-green-900">
        {featuredItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Placeholder with background color */}
            <div className={`absolute inset-0 ${item.bgColor} opacity-80`}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-30" />
            </div>
            
            <div className="relative z-10 container mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl mb-8 max-w-2xl">{item.description}</p>
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105">
                Learn More
              </button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Farm Media Center</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore videos and news from our farm. See our daily operations, meet our team, and stay updated with our latest news and events.
          </p>
        </div>
        
        {/* Media Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('videos')}
            className={`cursor-pointer flex items-center px-6 py-3 font-medium text-lg transition-all duration-200 ${activeTab === 'videos' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-green-700'}`}
          >
            <Play className="mr-2" size={20} />
            Videos
          </button>
          <button 
            onClick={() => setActiveTab('news')}
            className={`cursor-pointer flex items-center px-6 py-3 font-medium text-lg transition-all duration-200 ${activeTab === 'news' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-green-700'}`}
          >
            <Newspaper className="mr-2" size={20} />
            News
          </button>
        </div>
        
        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {mediaItems.videos.map((video) => (
              <div 
                key={video.id} 
                className={`${itemAnimationClass} bg-white rounded-lg overflow-hidden shadow-md`}
              >
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={`/api/placeholder/500/300`} 
                    alt={video.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-orange-500 rounded-full p-4 text-white shadow-lg transform transition-all duration-300 hover:scale-110">
                      <Play size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-green-800 mb-2">{video.title}</h3>
                  <button className="cursor-pointer text-orange-500 hover:text-orange-600 font-medium flex items-center">
                    Watch Video <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* News List with Links */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {mediaItems.news.map((article) => (
              <div 
                key={article.id} 
                className={`${itemAnimationClass} bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row`}
              >
                <div className="md:w-1/4 bg-green-100 flex items-center justify-center p-6">
                  <Newspaper size={48} className="text-green-700" />
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="text-sm text-orange-500 font-medium mb-2">{article.date}</div>
                  <h3 className="font-bold text-xl text-green-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <button className="cursor-pointer text-orange-500 hover:text-orange-600 font-medium flex items-center">
                      Read Full Article <ChevronRight size={16} className="ml-1" />
                    </button>
                    {article.link && (
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-green-600 hover:text-green-800 font-medium"
                      >
                        <LinkIcon size={16} className="mr-1" />
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination Controls */}
        
        
        {/* Subscribe Section */}
        {/* <div className="mt-16 bg-green-50 rounded-xl p-8 shadow-inner">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Stay Updated</h3>
            <p className="text-gray-600">Subscribe to our newsletter for the latest farm updates and seasonal offerings.</p>
          </div>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 border border-gray-300 focus:outline-none" 
              required 
            />
            <button 
              type="submit" 
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
      
      {/* Footer */}
      
    </div>
  );
}