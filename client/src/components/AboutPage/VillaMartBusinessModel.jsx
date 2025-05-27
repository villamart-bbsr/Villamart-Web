import React from 'react';
import { 
  ShoppingCart, 
  Apple, 
  Leaf, 
  Scissors, 
  Sprout, 
  Store,
  Truck,
  Building,
  Users,
  Star,
  Zap
} from 'lucide-react';


const VillaMartBusinessModel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-green-900 shadow-2xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
              <Store className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                BUSINESS MODEL
              </h1>
              <p className="text-emerald-200 text-lg mt-1">VillaMart Revenue Strategy</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <img 
              src="/images/villamart-logo.png" 
              alt="VillaMart"
              className="h-24 w-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Column Headers */}
      <div className="relative grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-emerald-800/50 to-green-800/50 backdrop-blur-sm">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <Users className="w-8 h-8 text-yellow-300 mr-3" />
            <h2 className="text-2xl font-bold text-white">CUSTOMER SEGMENTS</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <Zap className="w-8 h-8 text-yellow-300 mr-3" />
            <h2 className="text-2xl font-bold text-white">REVENUE VERTICALS</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <ShoppingCart className="w-8 h-8 text-yellow-300 mr-3" />
            <h2 className="text-2xl font-bold text-white">PRODUCT PORTFOLIO</h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* ROW 1: Premium Segment */}
      <div className="relative grid grid-cols-3 gap-6 p-6">
        {/* Premium Customer Segment */}
        <div className="group flex items-center justify-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200 w-full max-w-md">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-800">P</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Premium Segment</h3>
              <p className="text-gray-600 text-sm">High-value customers seeking quality</p>
            </div>
          </div>
        </div>

        {/* Quick Commerce Collaboration */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">QUICK COMMERCE</h3>
          <div className="text-center mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Strategic Partnerships
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { logo: "/images/Instamartlogo.webp", name: "Swiggy Instamart", color: "from-orange-400 to-red-500" },
              { logo: "/images/blinkit.png", name: "Blinkit", color: "from-yellow-400 to-orange-500" },
              { logo: "/images/jio_mart.png", name: "JioMart", color: "from-blue-400 to-indigo-500" },
              { logo: "/images/reliance-fresh.png", name: "Reliance Fresh", color: "from-green-400 to-emerald-500" }
            ].map((partner, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${partner.color} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-2`}>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-20 w-auto mx-auto object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Products */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Premium Products</h3>
          <div className="space-y-4">
            {[
              { icon: <Leaf className="w-6 h-6" />, name: "INDIAN VEGETABLES", color: "text-green-600" },
              { icon: <Sprout className="w-6 h-6" />, name: "EXOTIC VEGETABLES", color: "text-emerald-600" },
              { icon: <Apple className="w-6 h-6" />, name: "PREMIUM FRUITS", color: "text-red-500" },
              { icon: <Scissors className="w-6 h-6" />, name: "CUT VEG/FRUITS", color: "text-orange-500" }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50">
                  <div className={`${product.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-gray-900">{product.name}</span>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 2: Middle Segment */}
      <div className="relative grid grid-cols-3 gap-6 p-6">
        {/* Middle Customer Segment */}
        <div className="group flex items-center justify-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200 w-full max-w-md">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-800">M</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Middle Segment</h3>
              <p className="text-gray-600 text-sm">Value-conscious mainstream market</p>
            </div>
          </div>
        </div>

        {/* Franchise Outlets */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-2xl border border-green-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">FRANCHISE NETWORK</h3>
          <div className="text-center mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Direct Distribution
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center group">
              <h4 className="font-bold mb-4 text-green-700 text-lg">MOBILE OUTLET</h4>
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:rotate-1">
                <div className="bg-white rounded-xl p-4 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/images/mobile_franchise.png" 
                    alt="Mobile Van"
                    className="h-40 w-auto object-contain"
                  />
                </div>
                <div className="text-white font-semibold mt-4">Mobile Van</div>
              </div>
            </div>
            <div className="text-center group">
              <h4 className="font-bold mb-4 text-green-700 text-lg">STATIC OUTLET</h4>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:-rotate-1">
                <div className="bg-white rounded-xl p-4 flex items-center justify-center min-h-[200px]">
                  <img 
                    src="/images/image6.jpg" 
                    alt="Store Outlet"
                    className="h-40 w-auto object-contain"
                  />
                </div>
                <div className="text-white font-semibold mt-4">Store Outlet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Segment Products */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-2xl border border-green-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Diverse Portfolio</h3>
          <div className="space-y-3">
            {[
              { icon: <Leaf className="w-5 h-5" />, name: "INDIAN VEGETABLES", color: "text-green-600" },
              { icon: <Sprout className="w-5 h-5" />, name: "EXOTIC VEGETABLES", color: "text-emerald-600" },
              { icon: <Apple className="w-5 h-5" />, name: "FRESH FRUITS", color: "text-red-500" },
              { icon: <ShoppingCart className="w-5 h-5" />, name: "PULSES", color: "text-amber-600" },
              { icon: <Leaf className="w-5 h-5" />, name: "MILLET PRODUCTS", color: "text-yellow-600" },
              { icon: <ShoppingCart className="w-5 h-5" />, name: "DESI RICE", color: "text-orange-500" },
              { icon: <Store className="w-5 h-5" />, name: "VILLAGE PRODUCTS", color: "text-purple-600" }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="flex items-center bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50">
                  <div className={`${product.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm group-hover:text-gray-900">{product.name}</span>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 3: Economy Segment */}
      <div className="relative grid grid-cols-3 gap-6 p-6 pb-12">
        {/* Economy Customer Segment */}
        <div className="group flex items-center justify-center">
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200 w-full max-w-md">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-800">E</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Economy Segment</h3>
              <p className="text-gray-600 text-sm">Affordable solutions for everyone</p>
            </div>
          </div>
        </div>

        {/* Haat Model */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8 shadow-2xl border border-orange-200 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">HAAT MODEL</h3>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">सबसे सस्ता</div>
              <div className="text-lg font-semibold opacity-90">SABSE SASTA</div>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Traditional market approach</p>
          </div>
        </div>

        {/* Economy Products */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8 shadow-2xl border border-orange-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Essential Products</h3>
          <div className="space-y-4">
            {[
              { icon: <Leaf className="w-6 h-6" />, name: "BASIC VEGETABLES", color: "text-green-600" },
              { icon: <Apple className="w-6 h-6" />, name: "SEASONAL FRUITS", color: "text-red-500" }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50">
                  <div className={`${product.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-gray-900">{product.name}</span>
                  <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full group-hover:bg-orange-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-green-900 p-8 mt-8">
        <div className="text-center">
          <img 
            src="/images/villamart-logo.png" 
            alt="VillaMart"
            className="h-16 w-auto mx-auto mb-2 object-contain"
          />
          <div className="text-emerald-200 text-lg">Happy Farmer Happy Consumer</div>
          <div className="flex justify-center items-center mt-4 space-x-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaMartBusinessModel;