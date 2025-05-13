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
      
      {/* Interactive Tabs */}
      <div className="flex space-x-2 mb-6 bg-gray-100 rounded-lg p-1">
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
      
      {/* Vision Tab Content */}
      {activeTab === 'vision' && (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-3 mt-1">
              <ShoppingCart className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-700">
                Revolutionizing Agricultural Retail
              </h2>
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
          </div>
          
          <div className="relative pl-6 border-l-2 border-green-300">
            <div className="absolute left-0 top-0 w-3 h-3 -ml-1.5 rounded-full bg-green-500"></div>
            <h3 className="font-semibold text-green-800 mb-1">Tech-Enabled Marketplace</h3>
            <p className="text-gray-700">
              Our Direct-to-Consumer (D2C) Omni-channel marketplace leverages cutting-edge technology to track freshness, 
              ensure chemical-free produce, and analyze sales patterns—all while minimizing wastage.
            </p>
          </div>
          
          <div className="relative pl-6 border-l-2 border-green-300">
            <div className="absolute left-0 top-0 w-3 h-3 -ml-1.5 rounded-full bg-green-500"></div>
            <h3 className="font-semibold text-green-800 mb-1">Inclusive Ecosystem</h3>
            <p className="text-gray-700">
              VillaMart operates on a franchise basis, benefiting roadside vendors, kirana stores, farmers, 
              Farmer Producer Organizations (FPOs), and Self-Help Groups (SHGs)—creating value for all stakeholders.
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="group flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
      
      {/* Impact Tab Content */}
      {activeTab === 'impact' && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">Our Growing Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-bold text-gray-800">{stat.label}</div>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Real Community Impact</h3>
            <p className="text-gray-700">
              VillaMart is more than a marketplace—it's a movement to empower local farmers and small businesses. 
              Our technology platforms have created sustainable income for thousands of vendors while delivering 
              fresher products to consumers at fair prices.
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300">
              See Impact Stories
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
      
      {/* PPAAS Model Tab Content */}
      {activeTab === 'model' && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">The PPAAS Revolution</h2>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-blue-200"></div>
            
            <div className="relative pl-14 mb-6">
              <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">PhyGital Approach</h3>
              <p className="text-gray-700">
                Our PhyGital (Physical + Digital) model combines traditional shopping experiences with 
                cutting-edge technology, offering the "touch & feel" experience customers value for produce.
              </p>
            </div>
            
            <div className="relative pl-14 mb-6">
              <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">Procurement & Fulfillment</h3>
              <p className="text-gray-700">
                Our advanced Procurement cum Fulfillment Centers ensure quality control, reduce waste, 
                and optimize logistics between farm and consumer.
              </p>
            </div>
            
            <div className="relative pl-14">
              <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
              </div>
              <h3 className="font-semibold text-blue-800 text-lg mb-1">Franchise Ecosystem</h3>
              <p className="text-gray-700">
                By extending our model to vendors, kirana stores, farmers, and community groups, 
                we're building a sustainable agricultural ecosystem that benefits everyone.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <div className="flex items-center">
              <BarChart2 className="text-blue-600 mr-2" />
              <h3 className="font-semibold text-blue-800">Data-Driven Excellence</h3>
            </div>
            <p className="text-gray-700 mt-2">
              Our platform analyzes sales patterns, consumer preferences, and supply chain efficiency to continuously 
              improve operations and ensure the freshest produce reaches consumers.
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="group flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300">
              Explore the Model
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}