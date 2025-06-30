import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PFCComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoStep, setCurrentVideoStep] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [activeStep]);

  // Handle modal open/close and prevent body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen]);

  const openVideoModal = (stepId) => {
    setCurrentVideoStep(stepId);
    setIsModalOpen(true);
    setIsModalClosing(false);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setIsModalOpen(false);
      setCurrentVideoStep(null);
      setIsModalClosing(false);
    }, 250); // Match the exit animation duration
  };

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
      hasVideo: true,
      videoSrc: "/videos/sorting-grading.mp4",
    },
    {
      id: 3,
      icon: "💧",
      title: "Cleaning of Chemicals / Pesticides",
      description: "Ozone treatment process",
      hasVideo: true,
      videoSrc: "/videos/OzoneCleaning.mp4",
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

  const getCurrentVideoInfo = () => {
    const step = steps.find((step) => step.id === currentVideoStep);
    return {
      title: step ? step.title : "",
      icon: step ? step.icon : "",
      videoSrc: step ? step.videoSrc : "",
      description: step && step.id === 2
        ? "Our advanced sorting and grading system uses computer vision to assess produce quality, ensuring consistent standards and premium pricing for farmers."
        : "Our ozone cleaning system removes residual chemicals and pesticides from produce using ozone-enriched water. This eco-friendly process ensures higher hygiene standards and extends shelf life by up to 40%."
    };
  };

  return (
    <div className="font-sans mb-10">
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

          /* Scroll Animation */
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in {
            opacity: 0;
            transform: translateX(100px);
            animation: slideIn 0.6s ease-out forwards;
          }

          /* Modal Animations */
          @keyframes modalBackdropFadeIn {
            0% {
              opacity: 0;
              backdrop-filter: blur(0);
            }
            100% {
              opacity: 1;
              backdrop-filter: blur(8px);
            }
          }

          @keyframes modalBackdropFadeOut {
            0% {
              opacity: 1;
              backdrop-filter: blur(8px);
            }
            100% {
              opacity: 0;
              backdrop-filter: blur(0);
            }
          }

          @keyframes modalSlideIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(50px);
            }
            60% {
              opacity: 1;
              transform: scale(1.05) translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes modalSlideOut {
            0% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            100% {
              opacity: 0;
              transform: scale(0.8) translateY(50px);
            }
          }

          .modal-backdrop-enter {
            animation: modalBackdropFadeIn 0.3s ease-out forwards;
          }

          .modal-backdrop-exit {
            animation: modalBackdropFadeOut 0.25s ease-in forwards;
          }

          .modal-content-enter {
            animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .modal-content-exit {
            animation: modalSlideOut 0.25s ease-in forwards;
          }

          /* Add subtle bounce effect for video section */
          @keyframes videoReveal {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .video-reveal {
            animation: videoReveal 0.5s ease-out 0.2s both;
          }

          /* Text content fade in */
          @keyframes textFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .text-fade-in {
            animation: textFadeIn 0.6s ease-out 0.3s both;
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
          <div className="bg-green-100 p-4 flex items-center justify-center h-full">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/images/flowchart-1.png"
                alt="Procurement Flowchart"
                className="max-h-[600px] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section - Steps */}
          <div className="p-6">
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isActive = index <= activeStep;
                const { ref, inView } = useInView({
                  triggerOnce: true, // Animation triggers only once
                  threshold: 0.3, // Trigger when 30% of the element is visible
                });

                return (
                  <div
                    key={step.id}
                    ref={ref}
                    className={`flex items-center bg-white/90 p-4 rounded-lg shadow-md border-l-4 
                      ${isActive ? "border-green-600 opacity-100" : "border-gray-300 opacity-70"}
                      transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer
                      ${inView ? "animate-slide-in" : ""}`}
                    style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation
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

                    {step.hasVideo && isActive && (
                      <button
                        onClick={() => openVideoModal(step.id)}
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
        <div 
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 ${
            isModalClosing ? 'modal-backdrop-exit' : 'modal-backdrop-enter'
          }`}
          style={{ backdropFilter: 'blur(8px)' }}
          onClick={closeModal}
        >
          <div 
            className={`bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden ${
              isModalClosing ? 'modal-content-exit' : 'modal-content-enter'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button - always visible */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <span className="text-green-700 text-xl">{getCurrentVideoInfo().icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-700 pr-4">
                  {getCurrentVideoInfo().title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="cursor-pointer flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
                aria-label="Close video"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                {/* Responsive Layout - Stacked on mobile, side by side on large screens */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  {/* Video Section - Vertical layout for large screens */}
                  <div className="lg:w-1/2 xl:w-2/5">
                    <div className="aspect-[9/16] lg:aspect-[9/16] bg-black rounded-lg overflow-hidden video-reveal max-w-md mx-auto lg:max-w-none lg:h-[70vh]">
                      <video
                        className="w-full h-full object-contain"
                        muted
                        loop
                        src={getCurrentVideoInfo().videoSrc}
                        autoPlay
                        controls
                        controlsList="nodownload"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="lg:w-1/2 xl:w-3/5 flex flex-col justify-center text-fade-in">
                    <div className="lg:hidden mb-4">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <span className="text-green-700 text-xl">{getCurrentVideoInfo().icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-green-700">
                          {getCurrentVideoInfo().title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                        {getCurrentVideoInfo().description}
                      </p>
                      
                      {/* Additional details based on step */}
                      <div className="bg-green-50 p-4 lg:p-6 rounded-lg border-l-4 border-green-400 transform hover:scale-105 transition-transform duration-200">
                        <h4 className="font-semibold text-green-800 mb-3 text-lg">Key Benefits:</h4>
                        <ul className="text-sm lg:text-base text-green-700 space-y-2">
                          {currentVideoStep === 2 ? (
                            <>
                              <li>• Automated quality assessment using AI</li>
                              <li>• Consistent grading standards</li>
                              <li>• Increased farmer revenue through premium pricing</li>
                              <li>• Reduced manual labor and human error</li>
                            </>
                          ) : (
                            <>
                              <li>• 99.9% removal of chemical residues</li>
                              <li>• 40% increase in shelf life</li>
                              <li>• Eco-friendly cleaning process</li>
                              <li>• Preserves nutritional value</li>
                            </>
                          )}
                        </ul>
                      </div>

                      {/* Additional info section for large screens */}
                      <div className="hidden lg:block bg-blue-50 p-4 lg:p-6 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-3 text-lg">Technical Specifications:</h4>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-sm lg:text-base text-blue-700">
                          {currentVideoStep === 2 ? (
                            <>
                              <div>• Processing Speed: 500kg/hour</div>
                              <div>• Accuracy Rate: 99.5%</div>
                              <div>• Size Categories: 12 different grades</div>
                              <div>• Quality Parameters: 8 assessment points</div>
                            </>
                          ) : (
                            <>
                              <div>• Ozone Concentration: 2.5 ppm</div>
                              <div>• Treatment Time: 3-5 minutes</div>
                              <div>• Water Temperature: 15-20°C</div>
                              <div>• Efficiency Rate: 99.9%</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with close button for mobile */}
            <div className="lg:hidden p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeModal}
                className="cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                aria-label="Close video"
              >
                Close
              </button>
            </div>

            {/* Desktop footer */}
            <div className="hidden lg:block p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="cursor-pointer px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                  aria-label="Close video"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}