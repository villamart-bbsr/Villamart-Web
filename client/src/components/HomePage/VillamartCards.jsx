import { useState, useEffect } from 'react';
import { Sprout, Leaf, Sun, Cloud, Droplet, Users, TrendingUp, ShoppingBag } from 'lucide-react';

export default function VillaMartCards() {
  const [animate, setAnimate] = useState(false);
  const [hoverMission, setHoverMission] = useState(false);
  const [hoverVision, setHoverVision] = useState(false);

  useEffect(() => {
    // Initial animation on component mount
    setAnimate(true);
    
    // Setup animation cycle - removed to prevent conflict with hover
    // The constant animation was causing conflicts with hover states
    
    return () => {};
  }, []);

  // Fixed floating icons that don't reposition randomly
  const FloatingIcons = () => {
    // Predefined positions for icons to prevent random repositioning
    const iconPositions = [
      { top: '15%', left: '20%' },
      { top: '70%', left: '30%' },
      { top: '30%', left: '75%' },
      { top: '60%', left: '85%' },
      { top: '80%', left: '15%' }
    ];
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Sun, Cloud, Droplet, Leaf, Sprout].map((Icon, index) => (
          <Icon 
            key={index}
            className="absolute text-green-500/30 animate-pulse transform"
            style={{
              top: iconPositions[index].top,
              left: iconPositions[index].left,
              animationDelay: `${index * 0.5}s`,
              opacity: 0.4,
              zIndex: 0,
              width: `${20 + (index * 4)}px`,
              height: `${20 + (index * 4)}px`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center relative">
      {/* Page title */}
      <div className={`mb-12 text-center transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-1000`}>
        <div className="flex items-center justify-center mb-4">
          <Sprout className="text-green-600 mr-2" size={32} />
          <h1 className="text-4xl font-bold text-green-800">VillaMart</h1>
        </div>
        <p className="text-lg text-green-700 max-w-2xl">
          An agritech startup based in Bhubaneswar, Odisha, dedicated to transforming the agricultural landscape through innovative, technology-driven solutions.
        </p>
      </div>
      
      {/* Cards container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Mission Card - Hover transformations isolated and simplified */}
        <div 
          className={`relative flex-1 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 cursor-pointer ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: hoverMission ? 'scale(1.05)' : 'scale(1)',
            transitionProperty: 'transform, box-shadow',
            boxShadow: hoverMission ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={() => setHoverMission(true)}
          onMouseLeave={() => setHoverMission(false)}
        >
          <FloatingIcons />
          
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-500/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 rounded-tl-full"></div>
          
          {/* Card front (visible when not hovered) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoverMission ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-center p-8">
              <Sun className="text-yellow-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-green-800 mb-2 flex items-center justify-center">
                <span className="text-3xl mr-2">🌟</span> Mission
              </h2>
              <p className="text-green-700 text-lg">Hover to discover</p>
            </div>
          </div>
          
          {/* Card back (visible when hovered) */}
          <div className={`relative z-10 p-8 transition-opacity duration-500 ${hoverMission ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Sun className="text-yellow-500 animate-spin" size={28} />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-green-800 flex items-center">
                <span className="text-3xl mr-2">🌟</span> Mission
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-green-700">
                VillaMart's mission is to create a meaningful impact by bringing fundamental changes to the lives of farmers and consumers.
              </p>
              
              <div className="pl-4 border-l-4 border-green-500">
                <p className="text-green-600">
                  They aim to establish a tech-enabled, direct-to-consumer (D2C) omnichannel marketplace that connects farmers directly with consumers, eliminating middlemen and ensuring fair prices for producers while providing fresh, chemical-free produce to consumers.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Medium+2</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Give+3</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">LinkedIn+3</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">villamart.in</span>
              </div>
            </div>
            
            <div className="flex justify-evenly mt-6">
              <div className="flex flex-col items-center">
                <Users className="text-green-600 mb-2" />
                <span className="text-sm text-green-700">Farmers</span>
              </div>
              <div className="flex flex-col items-center">
                <ShoppingBag className="text-green-600 mb-2" />
                <span className="text-sm text-green-700">Consumers</span>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="text-green-600 mb-2" />
                <span className="text-sm text-green-700">Fair Prices</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision Card - Hover transformations isolated and simplified */}
        <div 
          className={`relative flex-1 bg-gradient-to-bl from-green-100 to-emerald-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 cursor-pointer ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: hoverVision ? 'scale(1.05)' : 'scale(1)',
            transitionProperty: 'transform, box-shadow',
            boxShadow: hoverVision ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transitionDelay: animate ? '300ms' : '0ms'
          }}
          onMouseEnter={() => setHoverVision(true)}
          onMouseLeave={() => setHoverVision(false)}
        >
          <FloatingIcons />
          
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-tr-full"></div>
          
          {/* Card front (visible when not hovered) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoverVision ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-center p-8">
              <Sprout className="text-green-500 mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold text-green-800 mb-2 flex items-center justify-center">
                <span className="text-3xl mr-2">🌈</span> Vision
              </h2>
              <p className="text-green-700 text-lg">Hover to discover</p>
            </div>
          </div>
          
          {/* Card back (visible when hovered) */}
          <div className={`relative z-10 p-8 transition-opacity duration-500 ${hoverVision ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Sprout className="text-green-500 animate-bounce" size={28} />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-green-800 flex items-center">
                <span className="text-3xl mr-2">🌈</span> Vision
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-green-700">
                VillaMart envisions a future where the traditional agriculture supply chain is transformed into a dynamic, technology-driven, and accessible system.
              </p>
              
              <div className="pl-4 border-l-4 border-green-500">
                <p className="text-green-600">
                  By leveraging their Phygital Platform As A Service (PPAAS) model, they strive to empower local farmers, rural women self-help groups (SHGs), producer groups (PGs), and Farmer Producer Organizations (FPOs) with user-friendly technology, fostering sustainable livelihoods and boosting local economies.
                </p>
              </div>
              
              <p className="text-green-700">
                Through their innovative approach, VillaMart is committed to reducing food waste, enhancing food safety, and promoting healthy eating, thereby contributing to better overall public health and supporting local communities.
              </p>
              
              <div className="flex justify-end">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">villamart.in</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-center text-green-700">
                If you'd like more information on VillaMart's initiatives or how to get involved, feel free to ask!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated farm decorations */}
      <div className="mt-12 w-full max-w-5xl">
        <div className="relative h-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className={`absolute bottom-0 transition-all duration-1000 ease-in-out ${animate ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ 
                left: `${index * 14}%`, 
                transitionDelay: `${index * 0.1}s`,
                opacity: 0.8 - (index * 0.05)
              }}
            >
              <Sprout 
                size={24 + (index % 3) * 8} 
                className="text-green-600" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}