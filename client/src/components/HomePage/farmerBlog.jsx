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
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 1;
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .hero-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      width: 100%;
      transition: transform 0.3s ease;
    }
    
    .hero-button:hover .button-content {
      transform: translateX(4px);
    }
    
    .arrow-animate {
      position: absolute;
      right: 16px;
      transition: transform 0.3s ease;
    }
    
    .hero-button:hover .arrow-animate {
      transform: translateX(4px);
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
    <div className="w-full bg-white font-sans relative overflow-hidden">
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
        
      </div>

      {/* Newsletter */}
      
    </div>
  );
}