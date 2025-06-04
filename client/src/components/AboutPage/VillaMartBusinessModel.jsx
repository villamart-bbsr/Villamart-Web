import React, { useEffect } from 'react';
import { 
  ShoppingCart, 
  Apple, 
  Leaf, 
  Store,
  Users,
  Star,
  Zap
} from 'lucide-react';

// Animation variants for fade-in effect
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

const VillaMartBusinessModel = () => {
  // Mock motion component for basic animations
  const Motion = ({ children, className, whileHover, ...props }) => (
    <div className={className} {...props}>{children}</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex flex-col select-none rounded-2xl m-4">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-green-900 shadow-xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                BUSINESS MODEL
              </h1>
              <p className="text-emerald-200 text-xs sm:text-sm">VillaMart Revenue Strategy</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            <img 
              src="/images/villamart-logo.png" 
              alt="VillaMart"
              className="h-8 sm:h-12 w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 px-2 sm:px-4 py-2 bg-gradient-to-r from-emerald-800/50 to-green-800/50">
        {[
          { icon: Users, title: 'CUSTOMER SEGMENTS' },
          { icon: Zap, title: 'REVENUE VERTICALS' },
          { icon: ShoppingCart, title: 'PRODUCT PORTFOLIO' }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-2 sm:p-3 text-center border border-white/20"
          >
            <div className="flex items-center justify-center mb-1">
              <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-300 mr-1 sm:mr-2" />
              <h2 className="text-sm sm:text-lg font-bold text-white">{item.title}</h2>
            </div>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Main Content - 3 Rows */}
      <div className="flex-1 px-2 sm:px-4 py-2 grid grid-rows-3 gap-2">
        {/* ROW 1: Premium Segment */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Premium Customer Segment */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-2 sm:mb-3">
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-800">P</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-800">Premium</h3>
              <p className="text-gray-600 text-xs">High-value customers</p>
            </div>
          </div>

          {/* Quick Commerce */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-blue-200">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-center mb-2 text-gray-800">QUICK COMMERCE</h3>
            <div className="text-center mb-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-normal sm:whitespace-nowrap">
                Strategic <br className='sm:hidden' />
                Partners
              </div>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
              {[
                { logo: "/images/Instamartlogo.webp", name: "Swiggy", color: "from-orange-400 to-red-500" },
                { logo: "/images/blinkit.png", name: "Blinkit", color: "from-yellow-400 to-orange-500" },
                { logo: "/images/jio_mart.png", name: "JioMart", color: "from-blue-400 to-indigo-500" },
                { logo: "/images/reliance-fresh.png", name: "Reliance", color: "from-green-400 to-emerald-500" }
              ].map((partner, index) => (
                <div key={index} className="p-1 sm:p-2 rounded-xl">
                  <div className="p-1 sm:p-2 text-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-8 sm:h-12 lg:h-19 w-auto mx-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Products */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-blue-200">
            <h3 className="text-sm sm:text-lg font-bold text-center mb-2 text-gray-800">Premium Products</h3>
            <div className="space-y-1">
              {[
                { icon: Leaf, text: 'Indian Vegetables, Exotic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Premium Fruits, Cut Veg/Fruits', color: 'text-red-500' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-xs sm:text-sm"
                >
                  <item.icon className={`w-3 sm:w-4 h-3 sm:h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Middle Segment */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Middle Customer Segment */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-green-200 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-2 sm:mb-3">
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-800">M</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-800">Middle</h3>
              <p className="text-gray-600 text-xs">Value-conscious</p>
            </div>
          </div>

          {/* Franchise Network */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-green-200">
            <h3 className="text-sm sm:text-lg font-bold text-center mb-2 text-gray-800">FRANCHISE</h3>
            <div className="text-center mb-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-normal sm:whitespace-nowrap">
                Direct<br className="sm:hidden" /> Distribution
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
              {/* Mobile Section */}
              <div className="text-center sm:flex sm:items-center sm:justify-between sm:absolute">
                <div className=" relative text-green-800  sm:-translate-y-17 text-xs sm:text-sm font-semibold bg-white/70 backdrop-blur-sm p-1 sm:p-2 rounded-lg shadow-sm sm:mb-0 mb-1">
                  Mobile
                </div>
                <div className="p-1 sm:p-2 flex items-center justify-center relative">
                  <img 
                    src="/images/mobile_franchise.png" 
                    alt="Mobile Van"
                    className="h-16 sm:h-35 w-auto object-contain mx-auto relative sm:-translate-x-2 sm:-translate-y-2"
                  />
                </div>
              </div>
              {/* Static Section */}
              <div className="text-center sm:flex sm:items-center sm:justify-between sm:absolute">
                <div className="relative sm:translate-x-60 sm:-translate-y-14  text-green-800 text-xs sm:text-sm font-semibold bg-white/70 backdrop-blur-sm p-1 sm:p-2 rounded-lg shadow-sm sm:mb-0 mb-1">
                  Static
                </div>
                <div className="p-1 sm:p-2 flex items-center justify-center relative">
                  <img 
                    src="/images/image6.jpg" 
                    alt="Store Outlet"
                    className="h-16 sm:h-30 w-auto object-contain mx-auto relative sm:translate-x-60 sm:-translate-y-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Products */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-green-200">
            <h3 className="text-sm sm:text-lg font-bold text-center mb-2 text-gray-800">Diverse Portfolio</h3>
            <div className="space-y-1">
              {[
                { icon: Leaf, text: 'Indian Vegetables, Exotic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Fresh Fruits, Village Products', color: 'text-red-600' },
                { icon: ShoppingCart, text: 'Pulses, Millet Products, Desi Rice', color: 'text-amber-600' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-xs sm:text-sm"
                >
                  <item.icon className={`w-3 sm:w-4 h-3 sm:h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 3: Economy Segment */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Economy Customer Segment */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-orange-200 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-2 sm:mb-3">
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-800">E</span>
                </div>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-800">Economy</h3>
              <p className="text-gray-600 text-xs">Affordable solutions</p>
            </div>
          </div>

          {/* Haat Model */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-orange-200 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-sm sm:text-lg font-bold mb-2 text-gray-800">HAAT MODEL</h3>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-lg">
                <div className="text-lg sm:text-2xl font-bold">सबसे सस्ता</div>
                <div className="text-xs sm:text-sm font-semibold opacity-90">SABSE SASTA</div>
              </div>
              <p className="text-gray-600 mt-1 text-xs">Traditional market</p>
            </div>
          </div>

          {/* Economy Products */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-orange-200">
            <h3 className="text-sm sm:text-lg font-bold text-center mb-2 text-gray-800">Essential Products</h3>
            <div className="space-y-2">
              {[
                { icon: Leaf, text: 'Basic Vegetables', color: 'text-green-600' },
                { icon: Apple, text: 'Seasonal Fruits', color: 'text-red-500' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm text-xs sm:text-sm"
                >
                  <item.icon className={`w-3 sm:w-4 h-3 sm:h-4 ${item.color} inline mr-2`} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaMartBusinessModel;