import { useState, useEffect } from 'react';
import { Play, Image, Newspaper, ChevronRight, ChevronLeft } from 'lucide-react';

export default function FarmMediaPage() {
  const [activeTab, setActiveTab] = useState('photos');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample media data
  const mediaItems = {
    photos: [
      { id: 1, title: "Spring Harvest", description: "Our team gathering the season's first crops", category: "Harvest" },
      { id: 2, title: "New Tractor", description: "The latest addition to our farming equipment", category: "Equipment" },
      { id: 3, title: "Organic Vegetables", description: "Fresh produce from our organic fields", category: "Produce" },
      { id: 4, title: "Farm Animals", description: "Meet our friendly farm animals", category: "Animals" },
      { id: 5, title: "Sunset at the Farm", description: "Beautiful evening views of our farmland", category: "Landscape" },
      { id: 6, title: "Irrigation System", description: "Our new sustainable irrigation setup", category: "Technology" },
    ],
    videos: [
      { id: 1, title: "Planting Season Timelapse", duration: "3:45", category: "Farm Work" },
      { id: 2, title: "Meet the Farmers", duration: "5:20", category: "Team" },
      { id: 3, title: "Harvesting Techniques", duration: "4:12", category: "Education" },
      { id: 4, title: "Farm Tour", duration: "7:30", category: "Tour" },
    ],
    news: [
      { id: 1, title: "Farm Wins Sustainability Award", date: "April 15, 2025", excerpt: "Our commitment to sustainable farming practices has been recognized..." },
      { id: 2, title: "New Community Program Launched", date: "March 22, 2025", excerpt: "We're excited to announce our new program connecting local schools with farming education..." },
      { id: 3, title: "Seasonal Produce Update", date: "February 10, 2025", excerpt: "This season we're featuring our award-winning organic vegetables and fruits..." },
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
      image: "produce"
    },
    {
      title: "Sustainable Farming Practices",
      description: "Learn about our commitment to environmentally friendly farming methods.",
      image: "sustainable"
    },
    {
      title: "Farm Tours Now Available",
      description: "Book a tour to experience our beautiful farm firsthand.",
      image: "tour"
    }
  ];

  // Navigation for slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  // Filter by category
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredMedia = (type) => {
    if (activeFilter === 'All') return mediaItems[type];
    return mediaItems[type].filter(item => item.category === activeFilter);
  };

  // Get unique categories for the active tab
  const getCategories = (type) => {
    const categories = mediaItems[type].map(item => item.category);
    return ['All', ...new Set(categories)];
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
            {/* Placeholder image with appropriate color based on content */}
            <div className={`absolute inset-0 ${item.image === 'produce' ? 'bg-orange-500' : item.image === 'sustainable' ? 'bg-green-700' : 'bg-green-600'} opacity-80`}>
              <img src="/api/placeholder/1200/700" alt="placeholder" className="w-full h-full object-cover opacity-30" />
            </div>
            
            <div className="relative z-10 container mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl mb-8 max-w-2xl">{item.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={prevSlide} 
            className="bg-black bg-opacity-30 text-white p-2 rounded-r-lg hover:bg-opacity-50 transition duration-300"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={nextSlide} 
            className="bg-black bg-opacity-30 text-white p-2 rounded-l-lg hover:bg-opacity-50 transition duration-300"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Farm Media Center</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore photos, videos, and news from our farm. See our daily operations, meet our team, and stay updated with our latest news and events.
          </p>
        </div>
        
        {/* Media Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button 
            onClick={() => {setActiveTab('photos'); setActiveFilter('All');}}
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-200 ${activeTab === 'photos' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-green-700'}`}
          >
            <Image className="mr-2" size={20} />
            Photos
          </button>
          <button 
            onClick={() => {setActiveTab('videos'); setActiveFilter('All');}}
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-200 ${activeTab === 'videos' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-green-700'}`}
          >
            <Play className="mr-2" size={20} />
            Videos
          </button>
          <button 
            onClick={() => {setActiveTab('news'); setActiveFilter('All');}}
            className={`flex items-center px-6 py-3 font-medium text-lg transition-all duration-200 ${activeTab === 'news' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-green-700'}`}
          >
            <Newspaper className="mr-2" size={20} />
            News
          </button>
        </div>
        
        {/* Category Filters */}
        {activeTab !== 'news' && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {getCategories(activeTab).map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
        
        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredMedia('photos').map((photo) => (
              <div 
                key={photo.id} 
                className={`${itemAnimationClass} bg-white rounded-lg overflow-hidden shadow-md group`}
              >
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={`/api/placeholder/400/300`} 
                    alt={photo.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white p-4 font-medium">{photo.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-green-800 mb-1">{photo.title}</h3>
                  <p className="text-gray-600">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredMedia('videos').map((video) => (
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
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg text-green-800">{video.title}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{video.category}</span>
                  </div>
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                    Watch Video <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* News List */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {filteredMedia('news').map((article) => (
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
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                    Read Full Article <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-2 border border-green-600 rounded-md text-sm font-medium text-white bg-green-600">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              3
            </button>
            <span className="px-2 text-gray-600">...</span>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              8
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
        
        {/* Subscribe Section */}
        <div className="mt-16 bg-green-50 rounded-xl p-8 shadow-inner">
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
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      
    </div>
  );
}