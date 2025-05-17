import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, Camera, Leaf, ChevronRight, Sun, Cloud, Wind } from 'lucide-react';
import { useRef } from 'react';

// Sample farm images data
const farmImages = [
  { id: 1, title: "Sorting/Grading machine", description: "Our golden wheat fields ready for harvest.", tags: ["crops", "harvest"], imageSrc: "/images/gallery/factory1.jpg" },
  { id: 2, title: "Sorting/Grading machine", description: "Fresh organic vegetables from our gardens.", tags: ["crops", "organic"], imageSrc: "/images/gallery/factory2.jpg" },
  { id: 3, title: "Factory Outlet", description: "Our modern farming equipment in action.", tags: ["equipment", "technology"], imageSrc: "/images/gallery/factory3.jpg" },
  { id: 4, title: "Factory Outlet", description: "Healthy livestock grazing in open pastures.", tags: ["animals", "organic"], imageSrc: "/images/gallery/factory4.jpg" },
  { id: 5, title: "Ozone cleaning Machine", description: "Our greenhouse operations for year-round growing.", tags: ["technology", "organic"], imageSrc: "/images/gallery/factory5.jpg" },
  { id: 6, title: "AI Powered", description: "Vibrant fruit orchards in full bloom.", tags: ["crops", "organic"], imageSrc: "/images/gallery/factory6.jpg" },
  { id: 7, title: "Irrigation Systems", description: "Advanced irrigation systems for optimal water usage.", tags: ["technology", "equipment"], imageSrc: "/images/gallery/farming1.jpg" },
  { id: 8, title: "Harvest Season", description: "The team during our busy harvest season.", tags: ["harvest", "crops"], imageSrc: "/images/gallery/farming2.jpg" },
  { id: 9, title: "Farm Tours", description: "Educational tours of our sustainable farming practices.", tags: ["animals", "organic"], imageSrc: "/images/gallery/farming3.jpg" },
  { id: 10, title: "Beekeeping", description: "Sustainable beekeeping for pollination and honey.", tags: ["organic", "animals"], imageSrc: "/images/gallery/items1.jpg" },
  { id: 11, title: "Composting Area", description: "Organic waste composting for natural fertilizer.", tags: ["organic", "technology"], imageSrc: "/images/gallery/items2.jpg" },
  { id: 12, title: "Tractor Work", description: "Tractors preparing fields for planting.", tags: ["equipment", "technology"], imageSrc: "/images/gallery/items3.jpg" },
  { id: 13, title: "Farm Market", description: "Local produce sold at our farm market.", tags: ["organic", "crops"], imageSrc: "/images/gallery/items4.jpg" },
  { id: 14, title: "Solar Panels", description: "Solar panels powering our sustainable operations.", tags: ["technology", "sustainability"], imageSrc: "/images/gallery/items5.jpg" },
  { id: 15, title: "Farmhouse", description: "The historic farmhouse at the heart of the farm.", tags: ["architecture", "history"], imageSrc: "/images/gallery/items6.jpg" },
  { id: 16, title: "Farm Dogs", description: "Our loyal farm dogs helping out.", tags: ["animals", "companions"], imageSrc: "/images/gallery/items7.jpg" },
  { id: 17, title: "Cornfields", description: "Acres of tall corn swaying in the breeze.", tags: ["crops", "harvest"], imageSrc: "/images/gallery/mobile1.jpg" },
  { id: 18, title: "Sunset Over Fields", description: "A peaceful sunset over our fields.", tags: ["scenery", "relaxation"], imageSrc: "/images/gallery/mobile2.jpg" },
  { id: 19, title: "Silos", description: "Grain silos storing the season's yield.", tags: ["equipment", "storage"], imageSrc: "/images/gallery/mobile3.jpg" },
  { id: 20, title: "Plant Nursery", description: "Young plants growing in the nursery.", tags: ["crops", "organic"], imageSrc: "/images/gallery/mobile4.png" },
  { id: 21, title: "Rainwater Collection", description: "Eco-friendly rainwater collection system.", tags: ["technology", "sustainability"], imageSrc: "/images/gallery/static1.jpg" },
  { id: 22, title: "Dairy Barn", description: "Milking cows in a clean, spacious barn.", tags: ["animals", "equipment"], imageSrc: "/images/gallery/static2.jpg" }
];


// Farm background animation components
const FarmBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-16 right-16 animate-pulse">
        <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-lg opacity-20"></div>
      </div>
      <div className="absolute top-12 left-1/4 animate-[float_6s_ease-in-out_infinite] opacity-20">
        <Cloud size={48} className="text-green-200" />
      </div>
      <div className="absolute top-24 left-2/3 animate-[float_8s_ease-in-out_infinite] opacity-10">
        <Cloud size={32} className="text-green-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-40">
        <div className="flex justify-around">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 bg-green-700 rounded-full animate-[sway_3s_ease-in-out_infinite]"
              style={{ 
                height: `${Math.floor(Math.random() * 10) + 10}px`,
                animationDelay: `${Math.random() * 2}s` 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Filter component
const FilterBar = ({ activeFilter, setActiveFilter, filters }) => {
  return (
    <div className="relative z-10 mb-12">
      <div className="flex flex-wrap gap-3 p-1 rounded-xl bg-gradient-to-r from-green-900/10 to-orange-900/10 backdrop-blur-sm shadow-lg">
        <button 
          onClick={() => setActiveFilter("all")}
          className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out cursor-pointer ${
            activeFilter === "all" 
              ? "bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg scale-105 ring-2 ring-white/30" 
              : "bg-white/80 text-green-800 hover:bg-white hover:scale-105"
          } animate-[slide-in_0.5s_ease-out]`}
        >
          All
        </button>
        {filters.map((filter, index) => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out cursor-pointer ${
              activeFilter === filter 
                ? "bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg scale-105 ring-2 ring-white/30" 
                : "bg-white/80 text-green-800 hover:bg-white hover:scale-105"
            } animate-[slide-in_0.5s_ease-out]`}
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="flex items-center gap-2">
              {filter === "crops" && <Leaf size={16} />}
              {filter === "technology" && <Sun size={16} />}
              {filter === "equipment" && <Wind size={16} />}
              {filter === "organic" && <Leaf size={16} />}
              {filter === "animals" && <Camera size={16} />}
              {filter === "harvest" && <Sun size={16} />}
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 h-1 w-full bg-green-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-700 ease-in-out"
          style={{ 
            width: activeFilter === "all" ? "100%" : `${(filters.indexOf(activeFilter) + 1) / (filters.length + 1) * 100}%` 
          }}
        ></div>
      </div>
    </div>
  );
};

// Enhanced Image card component
const ImageCard = ({ image, onClick, index }) => {
  return (
    <div 
      onClick={() => onClick(image)}
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-[fade-slide_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-gradient-to-br from-green-100 to-orange-50 aspect-square flex items-center justify-center overflow-hidden min-h-[200px]">
        {image.imageSrc ? (
          <img 
            src={image.imageSrc} 
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            onError={(e) => {
              console.error(`Failed to load image: ${image.imageSrc}`);
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <Camera 
            size={48} 
            className="text-green-600 opacity-30 group-hover:opacity-20 transition-opacity duration-300" 
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
        <h3 className="text-white font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.title}</h3>
        <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{image.description}</p>
        <div className="flex gap-2 mt-3 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
          {image.tags.map(tag => (
            <span 
              key={tag} 
              className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full animate-[slide-up_0.3s_ease-out_forwards]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute top-3 right-3 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
        <span className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          <Leaf size={12} className="mr-1 animate-pulse" />
          VillaMart
        </span>
      </div>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/0 group-hover:border-green-500/80 transition-all duration-500 rounded-tl-lg"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/0 group-hover:border-orange-500/80 transition-all duration-500 rounded-br-lg"></div>
    </div>
  );
};

// Enhanced Modal component
const ImageModal = ({ image, onClose, allImages, activeFilter }) => {
  const [currentImageId, setCurrentImageId] = useState(null);
  const [availableImages, setAvailableImages] = useState([]);
  const [transitionDirection, setTransitionDirection] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setAvailableImages(allImages);
    } else {
      setAvailableImages(allImages.filter(img => img.tags.includes(activeFilter)));
    }
    if (image) {
      setCurrentImageId(image.id);
    }
  }, [image, allImages, activeFilter]);

  const currentImage = availableImages.find(img => img.id === currentImageId) || image;
  const currentIndex = availableImages.findIndex(img => img.id === currentImageId);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose(), 400);
  };

  const handleClickOutside = (e) => {
    // If click was outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setTransitionDirection('slide-right');
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentImageId(availableImages[currentIndex - 1].id);
      } else {
        setCurrentImageId(availableImages[availableImages.length - 1].id);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 200);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setTransitionDirection('slide-left');
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentIndex < availableImages.length - 1) {
        setCurrentImageId(availableImages[currentIndex + 1].id);
      } else {
        setCurrentImageId(availableImages[0].id);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, availableImages, isTransitioning]);

  if (!currentImage) return null;

  const getAnimationClass = () => {
    if (!isTransitioning) return 'opacity-100 scale-100';
    if (transitionDirection === 'slide-left') return 'animate-[slide-left_0.4s_ease-in-out]';
    if (transitionDirection === 'slide-right') return 'animate-[slide-right_0.4s_ease-in-out]';
    return '';
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-in-out ${
        isExiting ? 'bg-black/0 backdrop-blur-none' : 'bg-black/80 backdrop-blur-sm'
      } animate-[fade-in_0.5s_ease-out]`}
      onClick={handleClickOutside}
    >
      <div 
        ref={modalRef}
        className={`bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl transition-all duration-500 ease-in-out ${
          isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-5 flex justify-between items-center">
          <h2 className="text-white font-bold text-xl flex items-center">
            <span className="mr-2 text-white/80 flex items-center">
              <Camera size={20} className="mr-2" />
              <ChevronRight size={16} className="text-white/60" />
            </span>
            {currentImage.title}
            <span className="ml-3 text-sm font-normal bg-white/20 text-white/90 px-2 py-1 rounded-full">
              {currentIndex + 1}/{availableImages.length}
            </span>
          </h2>
          <button 
            onClick={handleClose}
            className="text-white hover:text-orange-200 transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        {/* Image container with better sizing constraints */}
        <div className="flex-grow relative flex items-center justify-center bg-gradient-to-br from-black/5 to-black/10">
          <button 
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={`absolute left-4 z-100 bg-gradient-to-r from-green-600/90 to-green-700/90 hover:from-green-500 cursor-pointer hover:to-green-600 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-90'
            }`}
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="w-full h-full flex items-center justify-center p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-orange-50/20 animate-[gradient-shift_10s_ease-in-out_infinite] opacity-40"></div>
            <div className={`relative z-10 transition-all duration-500 ${getAnimationClass()} shadow-2xl max-h-full flex items-center justify-center`}>
              {currentImage.imageSrc ? (
                <img 
                  src={currentImage.imageSrc} 
                  alt={currentImage.title}
                  className="max-w-full max-h-[calc(90vh-260px)] w-auto h-auto object-contain object-center rounded-lg shadow-inner"
                  onError={(e) => {
                    console.error(`Failed to load modal image: ${currentImage.imageSrc}`);
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="bg-gradient-to-br from-green-100 to-orange-50 w-full h-full flex items-center justify-center rounded-lg">
                  <Camera size={96} className="text-green-600/20" />
                </div>
              )}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-green-500 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-500 rounded-br-lg"></div>
            </div>
          </div>
          <button 
            onClick={goToNext}
            disabled={isTransitioning}
            className={`absolute cursor-pointer right-4 z-10 bg-gradient-to-r from-green-600/90 to-green-700/90 hover:from-green-500 hover:to-green-600 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-90'
            }`}
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
          
        </div>
        <div className="p-8 bg-gradient-to-br from-white to-green-50">
          <p className="text-gray-700 mb-5">{currentImage.description}</p>
          <div className="flex flex-wrap gap-2">
            {currentImage.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm flex items-center gap-1 shadow-sm hover:scale-105 transition-transform"
              >
                <Leaf size={14} className="text-orange-700" />
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-500 flex justify-between items-center">
            
            <div className="flex gap-3">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Gallery component
export default function FarmGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animateFilters, setAnimateFilters] = useState(false);

  const allTags = ["crops", "animals", "equipment", "technology", "organic", "harvest"];

  useEffect(() => {
    setTimeout(() => {
      setAnimateFilters(true);
    }, 500);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredImages(farmImages);
      } else {
        setFilteredImages(farmImages.filter(img => img.tags.includes(activeFilter)));
      }
      setIsLoading(false);
    }, 500);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <style>
        {`
          @keyframes fade-slide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-left {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-right {
            from { opacity: 0; transform: translateX(-100%); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <FarmBackground />
      <header className="mb-16 relative z-10">
        <div className="overflow-hidden">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-2 relative inline-block animate-[fade-slide_1s_ease-out]"
            style={{ 
              background: "linear-gradient(to right, #16a34a, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            VillaMart <span className="text-orange-500">Gallery</span> 
          </h1>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mb-6 animate-[fade-slide_1s_ease-out]"></div>
        <p 
          className="text-green-700 max-w-2xl text-lg animate-[fade-in_1s_ease-out]"
          style={{ animationDelay: "0.5s" }}
        >
          Explore our sustainable farming practices, crops, and life on the farm through our gallery of images.
        </p>
      </header>
      <div 
        className={`transform transition-all duration-1000 ${
          animateFilters ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <FilterBar 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filters={allTags}
        />
      </div>
      {isLoading ? (
        <div className="h-96 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 flex items-center justify-center">
              <Leaf 
                size={32} 
                className="text-green-600 absolute animate-[spin-slow_3s_linear_infinite]" 
              />
              <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-[spin_1s_linear_infinite] absolute"></div>
            </div>
            <p className="text-green-600 mt-8 animate-pulse">Loading images...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[400px]">
          {filteredImages.map((image, index) => (
            <ImageCard 
              key={image.id} 
              image={image} 
              onClick={setSelectedImage}
              index={index}
            />
          ))}
          {filteredImages.length === 0 && (
            <div className="col-span-full text-center p-12 border-2 border-dashed border-green-300 rounded-lg bg-white/50 backdrop-blur-sm animate-[fade-in_0.5s_ease-out]">
              <Leaf size={48} className="mx-auto text-green-300 mb-4" />
              <p className="text-green-600">No images found for this filter.</p>
            </div>
          )}
        </div>
      )}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
          allImages={farmImages}
          activeFilter={activeFilter}
        />
      )}
      
    </div>
  );
}