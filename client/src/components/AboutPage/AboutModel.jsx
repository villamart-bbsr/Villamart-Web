import { useState } from 'react';

export default function VillaMartDisplay() {
  const [activeSegment, setActiveSegment] = useState('middle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const segments = {
    premium: {
      title: "Premium Customers",
      description: "High-value customers who prefer digital solutions and quick commerce options.",
      model: "Pnygital Model",
      features: ["Premium product selection", "Mobile app ordering", "Fast delivery options", "Personalized recommendations"]
    },
    middle: {
      title: "Middle-Class Customers",
      description: "Core customer base utilizing both physical stores and digital options.",
      model: "PhyGital & Exclusive Franchise Outlet",
      features: ["Balanced pricing", "Loyalty programs", "Convenient store locations", "Online & offline shopping"]
    },
    lower: {
      title: "Lower-Class Customers",
      description: "Value-oriented customers who prefer traditional market experiences.",
      model: "Haat Model",
      features: ["Affordable basics", "Bulk purchasing options", "Community marketplaces", "Essential product focus"]
    }
  };

  // Modified color logic to use predefined classes instead of dynamic generation
  const getSegmentStyles = (segment) => {
    if (segment === 'premium') {
      return {
        buttonActive: 'bg-orange-600 text-white shadow-md',
        buttonInactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        borderColor: 'border-l-4 border-orange-600',
        bgGradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
        dotColor: 'bg-orange-500'
      };
    } else if (segment === 'middle') {
      return {
        buttonActive: 'bg-green-600 text-white shadow-md',
        buttonInactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        borderColor: 'border-l-4 border-green-600',
        bgGradient: 'bg-gradient-to-r from-green-100 to-green-200',
        dotColor: 'bg-green-500'
      };
    } else { // lower
      return {
        buttonActive: 'bg-orange-600 text-white shadow-md',
        buttonInactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        borderColor: 'border-l-4 border-orange-600',
        bgGradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
        dotColor: 'bg-orange-500'
      };
    }
  };

  const styles = getSegmentStyles(activeSegment);

  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-br from-green-50 to-orange-50 p-6 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">VillaMart's Customer Segmentation Strategy</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 mb-8">
        {/* Left Side - Image */}
        <div className="md:w-2/5 w-full">
          <div className="sticky top-20 rounded-lg overflow-hidden shadow-xl bg-white p-2 cursor-pointer " onClick={() => setIsModalOpen(true)}>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <img src="/images/MobileModel.png" alt="VillaMart Model" className="object-contain max-h-full" />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-3/5 w-full">
          {/* Segment Selector */}
          <div className="flex justify-center gap-4 mb-6 w-full">
            {Object.keys(segments).map((segment) => {
              const segmentStyles = getSegmentStyles(segment);
              return (
                <button
                  key={segment}
                  onClick={() => setActiveSegment(segment)}
                  className={`flex-1 py-3 px-4 rounded-full text-lg font-medium transition-all cursor-pointer ${
                    activeSegment === segment
                      ? segmentStyles.buttonActive
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </button>
              );
            })}
          </div>

          {/* Active Segment Details */}
          <div className="w-full">
            <div className={`p-6 rounded-xl shadow-md transition-all ${styles.bgGradient} ${styles.borderColor}`}>
              <h2 className="text-2xl font-bold mb-2">
                {segments[activeSegment].title}
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {segments[activeSegment].model}
              </h3>
              <p className="text-gray-700 mb-4">
                {segments[activeSegment].description}
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {segments[activeSegment].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${styles.dotColor}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Marketing Strategy Section */}
          <div className="w-full mt-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">VillaMart's Omnichannel Approach</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h3 className="font-bold text-green-700 mb-2">Physical Stores</h3>
                  <p className="text-sm text-gray-700">Strategically located stores with segment-specific layouts and product selections</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <h3 className="font-bold text-orange-700 mb-2">Digital Presence</h3>
                  <p className="text-sm text-gray-700">Mobile app and website with personalized experiences for each customer segment</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h3 className="font-bold text-green-700 mb-2">Community Markets</h3>
                  <p className="text-sm text-gray-700">Value-focused marketplaces catering to traditional shopping preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-white/60 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl w-full p-4 bg-white rounded-xl shadow-lg" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-gray-100 text-black px-3 py-1 rounded-full shadow hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img src="/images/MobileModel.png" alt="Expanded VillaMart Model" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}