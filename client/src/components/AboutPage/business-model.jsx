import { useState, useEffect } from "react";

export default function PFCComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const steps = [
    {
      id: 1,
      icon: "🚚",
      title: "AI Based Procurement",
      description: "Smart sourcing from farms",
    },
    {
      id: 2,
      icon: "⚖️",
      title: "Sorting / Grading / Packaging",
      description: "Quality assessment",
    },
    {
      id: 3,
      icon: "💧",
      title: "Cleaning of Chemicals / Pesticides",
      description: "Ozone treatment process",
    },
    {
      id: 4,
      icon: "🏭",
      title: "Storage / Distribution",
      description: "Climate-controlled facilities",
    },
    {
      id: 5,
      icon: "☀️",
      title: "Surplus Management / Value Addition",
      description: "Sustainable processing",
    },
    {
      id: 6,
      icon: "♻️",
      title: "Compost for Unused / Damaged",
      description: "Zero waste initiative",
    },
  ];

  return (
    <div className="font-sans">
      <style>
        {`
          @keyframes superNeonGlow {
            0% {
              box-shadow: 0 0 10px #ff9500, 0 0 20px #ff9500, 0 0 30px #ff9500;
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 15px #ffbb00, 0 0 30px #ffbb00, 0 0 45px #ffbb00, 0 0 60px #ff9500;
              transform: scale(1.05);
            }
            100% {
              box-shadow: 0 0 10px #ff9500, 0 0 20px #ff9500, 0 0 30px #ff9500;
              transform: scale(1);
            }
          }
          
          .mega-glow-play {
            animation: superNeonGlow 1.5s infinite;
          }
          
          @keyframes gradientTitle {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animated-gradient-title {
            background: linear-gradient(90deg, #1e8e3e, #fbbc04, #ff6f00, #1e8e3e);
            background-size: 300% 100%;
            animation: gradientTitle 6s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
          }
          
          .heading-container {
            position: relative;
            padding: 1rem;
            border-radius: 1rem;
            overflow: hidden;
            margin-bottom: 2rem;
          }
          
          .heading-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(59, 130, 246, 0.2));
            z-index: -1;
            border-radius: 1rem;
          }
        `}
      </style>

      <div className="heading-container bg-white/80 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-2 animated-gradient-title">
          PROCUREMENT CUM FULFILLMENT CENTER
        </h1>
        <div className="flex items-center justify-center mb-2">
          <div className="h-1 w-16 bg-green-600 rounded-full mx-2"></div>
          <p className="text-center text-orange-600 font-semibold px-2 py-1 bg-orange-100 rounded-full">
            Tech enabled warehouse
          </p>
          <div className="h-1 w-16 bg-green-600 rounded-full mx-2"></div>
        </div>
        <div className="text-center mb-4">

          <p className="text-center text-green-800 font-medium bg-green-50 inline-block px-4 py-1 rounded-full mx-auto block w-fit">
            A 6 Step Process for Agricultural Excellence
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-green-50 to-blue-50 rounded-xl shadow-lg overflow-hidden border border-green-200 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-green-100 p-4 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="mb-4 text-6xl">🌱</div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                PROCUREMENT CUM FULFILLMENT CENTER
              </h2>
              <p className="text-green-700">
                Transforming agricultural supply chains with technology
              </p>
              <div className="mt-8 bg-white/70 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-700">
                  Our PFC serves as a critical hub in the agricultural ecosystem,
                  connecting farmers directly to markets through a technology-enabled
                  infrastructure that ensures quality, reduces waste, and maximizes value.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Steps */}
          <div className="p-6">
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const isVideoStep = step.id === 3;

                return (
                  <div
                    key={step.id}
                    className={`flex items-center bg-white/90 p-4 rounded-lg shadow-md border-l-4 
                      ${isActive ? "border-green-600 opacity-100" : "border-gray-300 opacity-70"}
                      transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
                  >
                    <div className="relative mr-4">
                      <div
                        className={`${
                          isActive ? "bg-green-100" : "bg-gray-100"
                        } p-3 rounded-full relative`}
                      >
                        <span className="text-2xl">{step.icon}</span>
                        <div
                          className={`absolute -bottom-2 -right-2 ${
                            isActive ? "bg-green-600" : "bg-gray-400"
                          } text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md`}
                        >
                          {step.id}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold ${
                          isActive ? "text-green-800" : "text-gray-600"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>

                    {isVideoStep && (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer ml-2 bg-yellow-500 text-white rounded-full p-3 mega-glow-play flex items-center justify-center w-12 h-12 text-xl hover:bg-yellow-600 transition-all"
                        title="Watch video"
                      >
                        ▶️
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
      >
        ✕
      </button>
      
      {/* Responsive Layout - Stacked on mobile, side by side on larger screens */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Video - Now optimized for vertical video */}
        <div className="md:w-2/5">
          <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-contain"
              src="/videos/OzoneCleaning.mp4"
              controls
            />
          </div>
        </div>
        
        {/* Right: Text Content */}
        <div className="md:w-3/5 flex flex-col justify-center">
          <div className="mb-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <span className="text-green-700 text-2xl">💧</span>
            </div>
            <h3 className="text-2xl font-bold text-green-700">
              Ozone Cleaning Technology
            </h3>
          </div>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Our ozone cleaning system removes residual chemicals and pesticides from produce
            using ozone-enriched water. This eco-friendly process ensures higher hygiene standards
            and extends shelf life by up to 40%.
          </p>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
}