import React from 'react';

const StickyCards = () => {
  const cards = [
    {
      id: 1,
      title: "Design Systems",
      description: "Building consistent and scalable design systems for modern applications with reusable components and clear guidelines.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks and cutting-edge technologies.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      icon: "💻"
    },
    {
      id: 3,
      title: "User Experience",
      description: "Crafting intuitive and delightful user experiences through research, prototyping, and iterative design processes.",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      icon: "✨"
    },
    {
      id: 4,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: "📱"
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights through advanced analytics and beautiful data visualizations.",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icon: "📊"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Architecting scalable cloud infrastructure and implementing DevOps practices for modern applications.",
      color: "bg-gradient-to-br from-teal-500 to-blue-600",
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sticky Cards</h1>
          <p className="text-gray-400">Scroll to see the stacking effect in action</p>
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile: Sticky Cards */}
        <div className="lg:hidden">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="sticky"
              style={{ 
                top: `${80 + (cards.length - 1 - index) * 20}px`,
                zIndex: index + 1
              }}
            >
              <div className="h-screen flex items-center justify-center py-20">
                <div className={`
                  w-full max-w-2xl mx-auto p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105
                  ${card.color} text-white relative overflow-hidden
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{card.icon}</span>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                          Card {card.id}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                    <p className="text-base leading-relaxed opacity-90 mb-6">
                      {card.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm text-sm">
                        Learn More
                      </button>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 4x2 Grid */}
        <div className="hidden lg:block py-20">
          <div className="grid grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`
                  ${index >= 4 ? 'mt-6' : ''} 
                  group cursor-pointer
                `}
              >
                <div className={`
                  h-80 p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                  ${card.color} text-white relative overflow-hidden
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-white"></div>
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{card.icon}</span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {card.id}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed opacity-90 flex-grow">
                      {card.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <button className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm text-xs group-hover:bg-white/40">
                        Explore
                      </button>
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="py-20 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="lg:hidden">Sticky Effect!</span>
              <span className="hidden lg:block">Grid Layout!</span>
            </h3>
            <p className="text-gray-400">
              <span className="lg:hidden">You've seen all the cards stack as you scrolled.</span>
              <span className="hidden lg:block">Clean 4x2 grid layout for larger screens.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCards;