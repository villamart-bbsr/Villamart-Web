import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShoppingCart, Users, TrendingUp, BarChart2 } from 'lucide-react';

export default function EnhancedVisionComponent() {
  const [activeTab, setActiveTab] = useState('vision');
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simulate the component coming into view
    setIsVisible(true);
    
    // Animation for counter
    const interval = setInterval(() => {
      if (counter < 85) {
        setCounter(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [counter]);
  
  // Impact statistics
  const stats = [
    { label: "Waste Reduction", value: counter + "%", icon: <Leaf className="text-green-500" /> },
    { label: "Vendor Income", value: "+" + (counter + 15) + "%", icon: <TrendingUp className="text-orange-500" /> },
    { label: "Communities Served", value: counter * 3, icon: <Users className="text-blue-500" /> }
  ];
  
  return (
    <div className={`bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-6 md:p-8 mb-16 border-l-4 border-green-500 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-100 opacity-20"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-green-100 opacity-20"></div>
      
      {/* Centered Logo/Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 rounded-full p-4 inline-flex">
          <ShoppingCart className="w-8 h-8 text-green-700" />
        </div>
      </div>
      
      {/* Centered Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        VillaMart
        <span className="block text-lg font-medium text-gray-600 mt-2">Fresh Farm to Your Table</span>
      </h1>
      
      {/* Interactive Tabs - Centered */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex space-x-2 bg-gray-100 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('vision')}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${activeTab === 'vision' ? 'bg-green-600 text-white shadow-md' : 'text-gray-600 hover:bg-green-100'}`}
          >
            Our Vision
          </button>
          <button 
            onClick={() => setActiveTab('impact')}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${activeTab === 'impact' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-orange-100'}`}
          >
            Our Impact
          </button>
          <button 
            onClick={() => setActiveTab('model')}
            className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${activeTab === 'model' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-blue-100'}`}
          >
            PPAAS Model
          </button>
        </div>
      </div>
      
      {/* Vision Tab Content */}
      {activeTab === 'vision' && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center">
            Revolutionizing Agricultural Retail
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-gray-700 leading-relaxed">
              VillaMart is transforming how farm-fresh produce reaches your table through our innovative
              <span className="relative">
                <span className="font-semibold mx-1 text-orange-600 bg-orange-100 px-2 py-1 rounded-md">
                  PPAAS (PhyGital Platform As A Service)
                </span>
              </span>
              model. We're creating a seamless bridge between farmers and consumers, ensuring quality at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-3 text-center text-lg">Tech-Enabled Marketplace</h3>
              <p className="text-gray-700 text-center">
                Our Direct-to-Consumer (D2C) Omni-channel marketplace leverages cutting-edge technology to track freshness, 
                ensure chemical-free produce, and analyze sales patterns—all while minimizing wastage.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-3 text-center text-lg">Inclusive Ecosystem</h3>
              <p className="text-gray-700 text-center">
                VillaMart operates on a franchise basis, benefiting roadside vendors, kirana stores, farmers, 
                Farmer Producer Organizations (FPOs), and Self-Help Groups (SHGs)—creating value for all stakeholders.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-green-500">
              <h3 className="font-semibold text-green-800 mb-3 text-center text-lg">Sustainable Growth</h3>
              <p className="text-gray-700 text-center">
                By reducing waste and optimizing the supply chain, we create a more sustainable agricultural ecosystem 
                that benefits both the environment and local communities.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="group flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
      
      {/* Impact Tab Content */}
      {activeTab === 'impact' && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600 text-center">Our Growing Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gray-50">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-orange-50 border-t-4 border-orange-500 p-6 rounded-lg max-w-3xl mx-auto mt-8">
            <h3 className="font-semibold text-orange-800 mb-3 text-center text-xl">Real Community Impact</h3>
            <p className="text-gray-700 text-center">
              VillaMart is more than a marketplace—it's a movement to empower local farmers and small businesses. 
              Our technology platforms have created sustainable income for thousands of vendors while delivering 
              fresher products to consumers at fair prices.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              See Impact Stories
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
      
      {/* PPAAS Model Tab Content */}
      {activeTab === 'model' && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">The PPAAS Revolution</h2>
          
          <div className="max-w-3xl mx-auto relative px-4">
            <div className="flex flex-col space-y-12 relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              <div className="relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="font-semibold text-blue-800 text-xl mb-3">PhyGital Approach</h3>
                  <p className="text-gray-700">
                    Our PhyGital (Physical + Digital) model combines traditional shopping experiences with 
                    cutting-edge technology, offering the "touch & feel" experience customers value for produce.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="font-semibold text-blue-800 text-xl mb-3">Procurement & Fulfillment</h3>
                  <p className="text-gray-700">
                    Our advanced Procurement cum Fulfillment Centers ensure quality control, reduce waste, 
                    and optimize logistics between farm and consumer.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="font-semibold text-blue-800 text-xl mb-3">Franchise Ecosystem</h3>
                  <p className="text-gray-700">
                    By extending our model to vendors, kirana stores, farmers, and community groups, 
                    we're building a sustainable agricultural ecosystem that benefits everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center mb-3">
              <BarChart2 className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-blue-800 text-center text-xl mb-3">Data-Driven Excellence</h3>
            <p className="text-gray-700 text-center">
              Our platform analyzes sales patterns, consumer preferences, and supply chain efficiency to continuously 
              improve operations and ensure the freshest produce reaches consumers.
            </p>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="group flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              Explore the Model
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}