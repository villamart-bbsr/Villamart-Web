import { useState } from "react";

export default function FarmerDistributionNetwork() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8 bg-green-800 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M8 10h8" />
                <path d="M12 14V6" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Farmer Distribution Network</h1>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition cursor-pointer">
              Learn More
            </button>
            <a href="/contact">
            <button className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded-md transition cursor-pointer">
              Contact Us
            </button>
            </a>
          </div>
        </header>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="bg-green-800 p-4 text-white">
            <h2 className="text-xl font-semibold">Distribution Network Model</h2>
            <p className="text-green-100">From farm to consumers through efficient distribution channels</p>
          </div>
          
          <div className="p-4 flex justify-center" 
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            <div className={`relative transition-transform duration-300 ${isHovered ? 'scale-102' : 'scale-100'}`}>
              <img 
                src="/images/business.png" 
                alt="Farmer Distribution Network Diagram" 
                className="max-w-full h-auto rounded-lg "
              />
              
            </div>
          </div>
          
          <div className="p-4 bg-orange-100 border-t-4 border-orange-500">
            <h3 className="text-lg font-bold text-green-800 mb-2">Key Distribution Channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow-md border-l-4 border-green-600">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-800">PFC Centers</h4>
                </div>
                <p className="text-sm text-gray-600">Procurement and fulfillment hubs that collect and process farm goods</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <div className="bg-orange-100 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-orange-600">Franchise Outlets</h4>
                </div>
                <p className="text-sm text-gray-600">Retail locations that sell directly to consumers</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-md border-l-4 border-green-600">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-green-800">Villa Basket</h4>
                </div>
                <p className="text-sm text-gray-600">Subscription-based delivery of farm-fresh products to communities</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-700 text-white p-3">
              <h3 className="font-bold">Farmer Benefits</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct market access without middlemen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Better price realization for produce</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced wastage through efficient logistics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technical support and farming guidance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-3">
              <h3 className="font-bold">Consumer Benefits</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fresh farm produce at competitive prices</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Traceability of products to source farms</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Consistent quality and supply</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supporting local farmers and sustainable practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
      </div>
      
     
    </div>
  );
}