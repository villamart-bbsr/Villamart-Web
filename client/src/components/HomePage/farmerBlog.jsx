import { useState, useEffect } from 'react';
import {
  Tractor, Sun, Cloud, BookOpen, PenTool, ArrowRight, Leaf, Calendar, User
} from 'lucide-react';

export default function FarmerBlog() {
  // Animation states
  const [sunPosition, setSunPosition] = useState(0);
  const [cloudPosition, setCloudPosition] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Set up animations
  useEffect(() => {
    const sunInterval = setInterval(() => {
      setSunPosition(prev => (prev + 1) % 100);
    }, 200);
    
    const cloudInterval = setInterval(() => {
      setCloudPosition(prev => (prev + 0.5) % 100);
    }, 100);
    
    return () => {
      clearInterval(sunInterval);
      clearInterval(cloudInterval);
    };
  }, []);
  
  // CSS animations
  const animationStyles = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes bounce-x {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(3px); }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-bounce-x {
      animation: bounce-x 1.2s infinite;
    }
    
    .hover-grow {
      transition: all 0.5s ease;
    }
    
    .hover-grow:hover {
      transform: scale(1.03);
    }
    
    .card-hover {
      position: relative;
      overflow: hidden;
    }
    
    .card-hover::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(76,175,80,0.1) 100%);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .card-hover:hover::after {
      opacity: 1;
    }
    
    .card-overlay {
      position: absolute;
      bottom: -40px;
      left: 0;
      right: 0;
      background-color: rgba(52, 211, 153, 0.9);
      color: white;
      padding: 8px;
      transition: bottom 0.5s ease;
    }
    
    .hover-card:hover .card-overlay {
      bottom: 0;
    }
    
    /* Button hover fix - completely isolated from parent layout */
    .button-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      width: 100%;
      margin-top: 8px;
    }
    
    @media (min-width: 640px) {
      .button-container {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .button-wrapper {
      position: static;
      height: auto;
    }
    
    .hero-button {
      transition: background-color 0.6s ease, color 0.6s ease, box-shadow 0.6s ease;
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
    
    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      width: 100%;
    }
    
    /* Ensure no layout shift when arrow appears */
    .arrow-placeholder {
      width: 24px;
      visibility: hidden;
      margin-left: 8px;
      display: inline-block;
    }
    
    .arrow-animate {
      position: absolute;
      right: 16px;
    }
  `;
  
  // Static data
  const samplePosts = [
    {
      title: "The Secret Life of Strawberries: From Blossom to Berry",
      excerpt: "Discover the fascinating journey of strawberries and how to grow the juiciest, sweetest berries in your own garden.",
      author: "Jane Smith",
      date: "May 2, 2025",
      readTime: "5 min",
      category: "fruits",
      image: "/images/strawberries.jpg",
      color: "bg-red-100"
    },
    {
      title: "Heirloom Tomatoes: A Rainbow of Flavors",
      excerpt: "Explore the vibrant world of heirloom tomatoes and learn why these colorful varieties pack more flavor than their store-bought cousins.",
      author: "Mike Johnson",
      date: "April 28, 2025",
      readTime: "7 min",
      category: "vegetables",
      image: "/images/tomatoes.jpg",
      color: "bg-orange-100"
    },
    {
      title: "Companion Planting: Nature's Defense System",
      excerpt: "Maximize your harvest by understanding which plants grow well together and naturally repel pests without chemicals.",
      author: "Sarah Williams",
      date: "April 22, 2025",
      readTime: "6 min",
      category: "tips",
      image: "/images/planting.jpg",
      color: "bg-green-100"
    }
  ];

  const seasonalProduce = [
    { name: "Spring Asparagus", color: "bg-green-600" },
    { name: "Ripe Strawberries", color: "bg-red-500" },
    { name: "Sweet Corn", color: "bg-yellow-400" },
    { name: "Fresh Blueberries", color: "bg-indigo-600" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Add custom animations */}
      <style>{animationStyles}</style>
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute text-yellow-400" 
             style={{ 
               left: `${sunPosition}%`, 
               top: '15%', 
               transition: 'left 0.2s linear',
               filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))'
             }}>
          <Sun size={64} className="animate-pulse" />
        </div>
        <div className="absolute text-gray-200" 
             style={{ 
               left: `${cloudPosition}%`, 
               top: '10%', 
               transition: 'left 0.1s linear' 
             }}>
          <Cloud size={64} />
        </div>
      </div>

      {/* Header */}
      <div className="pt-12 pb-6 text-center relative z-10">
        <div className="inline-block mb-4 relative animate-float">
          <Tractor size={48} className="inline-block text-green-600 mr-3" />
          <h1 className="text-5xl font-bold text-green-800 inline-block">Harvest Insights</h1>
        </div>
        <p className="text-xl text-green-700 max-w-2xl mx-auto mt-2">
          Where farming wisdom grows and agricultural knowledge flourishes
        </p>
      </div>

      {/* Season Banner */}
      <div className="relative z-10 bg-gradient-to-r from-green-50 to-emerald-50 py-4 mb-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center space-x-2 overflow-x-auto">
          <span className="text-green-800 font-semibold">Season's Bounty:</span>
          {seasonalProduce.map((item, i) => (
            <span key={i} className={`${item.color} text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all hover:scale-110 hover:shadow-md cursor-pointer`}>
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Growing A Community of Farmers
            </h2>
            <p className="text-lg text-green-700 mb-6">
              Join our thriving community of agricultural enthusiasts, from hobbyist gardeners to professional farmers. Share your knowledge, learn from others, and grow together.
            </p>

            {/* Fixed button container */}
            {/* Fixed button container */}
            <div className="button-container">
              {/* Write Blog Button - Fixed with wrapper */}
              <div className="button-wrapper">
                <a href="/blogPage" className="block w-full">
                  <button 
                    className={`hero-button flex items-center justify-center px-6 py-3 rounded-lg font-medium cursor-pointer ${
                      hoveredButton === 'write'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-green-700 border-2 border-green-600 shadow-md'
                    }`}
                    onMouseEnter={() => setHoveredButton('write')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="button-content">
                      <PenTool size={20} className="mr-2" />
                      <span>Blog Page</span>
                      {hoveredButton === 'write' && (
                        <ArrowRight size={16} className="ml-2 animate-bounce-x" />
                      )}
                    </div>
                  </button>
                </a>
              </div>

              {/* Read Blog Button - Fixed with wrapper */}
              <div className="button-wrapper">
                <a href='/blog' className="block w-full">
                  <button 
                    className={`hero-button flex items-center justify-center cursor-pointer px-6 py-3 rounded-lg font-medium ${
                      hoveredButton === 'read'
                        ? 'bg-amber-600 text-white shadow-lg'
                        : 'bg-white text-amber-700 border-2 border-amber-600 shadow-md'
                    }`}
                    onMouseEnter={() => setHoveredButton('read')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <div className="button-content">
                      <BookOpen size={20} className="mr-2" />
                      <span>Read Blogs</span>
                      {hoveredButton === 'read' && (
                        <ArrowRight size={16} className="ml-2 animate-bounce-x" />
                      )}
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Garden Image */}
          <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
            <div className="absolute inset-0">
              <img src="/images/media/media1.jpg" alt="Farm garden" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Sample Blogs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 flex items-center mb-6">
            <Leaf size={24} className="mr-2 text-green-600" />
            Sample Blog Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {samplePosts.map((post, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-300 hover-grow card-hover hover-card">
                <div className={`h-40 relative overflow-hidden ${post.color}`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-green-800">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </div>
                  <div className="card-overlay text-center">
                    <span className="text-xs font-medium">Read {post.readTime} read</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-800 hover:text-green-600 transition-colors group">
                    {post.title}
                    <ArrowRight size={16} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-green-600 mt-2 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-4 pt-2 border-t border-green-100 text-xs text-gray-500">
                    <div className="flex items-center hover:text-green-700 transition-colors cursor-pointer">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-8 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Join Our Growing Community</h3>
          <p className="mb-4">Get seasonal growing tips, recipes, and more delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg text-black flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all border-white border-2" />
            <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-400 text-green-900 px-6 py-2 rounded-lg transition-all duration-700 hover:shadow-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}