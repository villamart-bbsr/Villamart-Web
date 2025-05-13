import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, Camera, Leaf } from 'lucide-react';

// Sample farm images data with 5 consolidated tags
const farmImages = [
    {
      id: 1,
      title: "Sorting/Grading machine",
      description: "Our golden wheat fields ready for harvest.",
      tags: ["crops", "harvest"],
      imageSrc: "/images/gallery/factory1.jpg"
    },
    {
      id: 2,
      title: "Sorting/Grading machine",
      description: "Fresh organic vegetables from our gardens.",
      tags: ["crops", "organic"],
      imageSrc: "/images/gallery/factory2.jpg"
    },
    {
      id: 3,
      title: "Factory Outlet",
      description: "Our modern farming equipment in action.",
      tags: ["equipment", "technology"],
      imageSrc: "/images/gallery/factory3.jpg"
    },
    {
      id: 4,
      title: "Factory Outlet",
      description: "Healthy livestock grazing in open pastures.",
      tags: ["animals", "organic"],
      imageSrc: "/images/gallery/factory4.jpg"
    },
    {
      id: 5,
      title: "Ozone cleaning Machine",
      description: "Our greenhouse operations for year-round growing.",
      tags: ["technology", "organic"],
      imageSrc: "/images/gallery/factory5.jpg"
    },
    {
      id: 6,
      title: "AI Powered",
      description: "Vibrant fruit orchards in full bloom.",
      tags: ["crops", "organic"],
      imageSrc: "/images/gallery/factory6.jpg"
    },
    {
      id: 7,
      title: "Irrigation Systems",
      description: "Advanced irrigation systems for optimal water usage.",
      tags: ["technology", "equipment"],
      imageSrc: "/images/gallery/farming1.jpg"
    },
    {
      id: 8,
      title: "Harvest Season",
      description: "The team during our busy harvest season.",
      tags: ["harvest", "crops"],
      imageSrc: "/images/gallery/farming2.jpg"
    },
    {
      id: 9,
      title: "Farm Tours",
      description: "Educational tours of our sustainable farming practices.",
      tags: ["animals", "organic"],
      imageSrc: "/images/gallery/farming3.jpg"
    },
    {
      id: 10,
      title: "Beekeeping",
      description: "Sustainable beekeeping for pollination and honey.",
      tags: ["organic", "animals"],
      imageSrc: "/images/gallery/items1.jpg"
    },
    {
      id: 11,
      title: "Composting Area",
      description: "Organic waste composting for natural fertilizer.",
      tags: ["organic", "technology"],
      imageSrc: "/images/gallery/items2.jpg"
    },
    {
      id: 12,
      title: "Tractor Work",
      description: "Tractors preparing fields for planting.",
      tags: ["equipment", "technology"],
      imageSrc: "/images/gallery/items3.jpg"
    },
    {
      id: 13,
      title: "Farm Market",
      description: "Local produce sold at our farm market.",
      tags: ["organic", "crops"],
      imageSrc: "/images/gallery/items4.jpg"
    },
    {
      id: 14,
      title: "Solar Panels",
      description: "Solar panels powering our sustainable operations.",
      tags: ["technology", "sustainability"],
      imageSrc: "/images/gallery/items5.jpg"
    },
    {
      id: 15,
      title: "Farmhouse",
      description: "The historic farmhouse at the heart of the farm.",
      tags: ["architecture", "history"],
      imageSrc: "/images/gallery/items6.jpg"
    },
    {
      id: 16,
      title: "Farm Dogs",
      description: "Our loyal farm dogs helping out.",
      tags: ["animals", "companions"],
      imageSrc: "/images/gallery/items7.jpg"
    },
    {
      id: 17,
      title: "Cornfields",
      description: "Acres of tall corn swaying in the breeze.",
      tags: ["crops", "harvest"],
      imageSrc: "/images/gallery/mobile1.jpg"
    },
    {
      id: 18,
      title: "Sunset Over Fields",
      description: "A peaceful sunset over our fields.",
      tags: ["scenery", "relaxation"],
      imageSrc: "/images/gallery/mobile2.jpg"
    },
    {
      id: 19,
      title: "Silos",
      description: "Grain silos storing the season’s yield.",
      tags: ["equipment", "storage"],
      imageSrc: "/images/gallery/mobile3.jpg"
    },
    {
      id: 20,
      title: "Plant Nursery",
      description: "Young plants growing in the nursery.",
      tags: ["crops", "organic"],
      imageSrc: "/images/gallery/mobile4.png"
    },
    {
      id: 21,
      title: "Rainwater Collection",
      description: "Eco-friendly rainwater collection system.",
      tags: ["technology", "sustainability"],
      imageSrc: "/images/gallery/static1.jpg"
    },
    {
      id: 22,
      title: "Dairy Barn",
      description: "Milking cows in a clean, spacious barn.",
      tags: ["animals", "equipment"],
      imageSrc: "/images/gallery/static2.jpg"
    }
  ];
  

// Filter component for gallery
const FilterBar = ({ activeFilter, setActiveFilter, filters }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button 
        onClick={() => setActiveFilter("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeFilter === "all" 
            ? "bg-orange-500 text-white shadow-lg" 
            : "bg-green-100 text-green-800 hover:bg-green-200"
        }`}
      >
        All
      </button>
      
      {filters.map(filter => (
        <button 
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter 
              ? "bg-orange-500 text-white shadow-lg" 
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Image card component
const ImageCard = ({ image, onClick }) => {
  return (
    <div 
      onClick={() => onClick(image)}
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
    >
      <div className="bg-gradient-to-br from-green-100 to-orange-50 aspect-square flex items-center justify-center">
        {image.imageSrc ? (
          <img 
            src={image.imageSrc} 
            alt={image.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Camera 
            size={48} 
            className="text-green-600 opacity-30 group-hover:opacity-20 transition-opacity duration-300" 
          />
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold">{image.title}</h3>
        <p className="text-white/80 text-sm">{image.description}</p>
      </div>
      
      <div className="absolute top-3 right-3">
        <span className="inline-flex items-center bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          <Leaf size={12} className="mr-1" />
          VillaMart
        </span>
      </div>
    </div>
  );
};

// Modal component for enlarged image view
const ImageModal = ({ image, onClose }) => {
  if (!image) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="bg-green-600 p-4 flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">{image.title}</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-orange-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow overflow-hidden relative">
          {image.imageSrc ? (
            <img 
              src={image.imageSrc} 
              alt={image.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="bg-gradient-to-br from-green-100 to-orange-50 w-full h-full flex items-center justify-center">
              <Camera size={96} className="text-green-600/20" />
            </div>
          )}
        </div>
        
        <div className="p-6 bg-white">
          <p className="text-gray-700 mb-4">{image.description}</p>
          <div className="flex flex-wrap gap-2">
            {image.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
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
  
  // The 5 specific tag categories we're using
  const allTags = ["crops", "animals", "equipment", "technology", "organic", "harvest"];
  
  // Filter images based on active filter
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredImages(farmImages);
      } else {
        setFilteredImages(farmImages.filter(img => 
          img.tags.includes(activeFilter)
        ));
      }
      setIsLoading(false);
    }, 300); // Small delay for animation effect
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 p-6 md:p-8 lg:p-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 relative">
          VillaMart <span className="text-orange-500">Gallery</span> 
          <span className="absolute -bottom-2 left-0 h-1 w-24 bg-orange-500"></span>
        </h1>
        <p className="text-green-700 max-w-2xl">
          Explore our sustainable farming practices, crops, and life on the farm through our gallery of images.
        </p>
      </header>
      
      {/* Filters */}
      <FilterBar 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={allTags}
      />
      
      {/* Gallery Grid */}
      {isLoading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
          {filteredImages.map(image => (
            <ImageCard 
              key={image.id} 
              image={image} 
              onClick={setSelectedImage} 
            />
          ))}
          
          {filteredImages.length === 0 && (
            <div className="col-span-full text-center p-12 border-2 border-dashed border-green-300 rounded-lg">
              <p className="text-green-600">No images found for this filter.</p>
            </div>
          )}
        </div>
      )}
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      
      {/* Additional Styling for Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}