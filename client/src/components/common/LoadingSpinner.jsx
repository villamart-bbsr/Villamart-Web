import React, { useState, useEffect } from 'react';

export default function PlantGrowingLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => setProgress(0), 1500); // Slightly longer reset delay for better effect
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getPlantHeight = () => {
    return Math.max(0, (progress - 20) * 2.5); // Slightly taller growth
  };

  const getLeafOpacity = (threshold) => {
    return progress >= threshold ? 1 : 0;
  };

  const getLeafScale = (threshold) => {
    return progress >= threshold ? 1 : 0.2; // Start with small scale for pop-in effect
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-100 flex items-center justify-center">
      <style>
        {`
          @keyframes sway {
            0%, 100% { transform: translateX(-50%) rotate(2deg); }
            50% { transform: translateX(-50%) rotate(-2deg); }
          }
          @keyframes leafPop {
            0% { transform: scale(0.2) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1) rotate(5deg); opacity: 1; }
          }
          @keyframes flowerBloom {
            0% { transform: scale(0.3) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.1) rotate(10deg); opacity: 0.8; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes sparkle {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
            100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.3); }
            50% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.6); }
          }
        `}
      </style>
      <div className="text-center">
        {/* Plant Container */}
        <div className="relative w-64 h-80 mx-auto mb-8">
          {/* Pot */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg animate-pulseGlow">
            <div className="w-full h-3 bg-amber-700 rounded-t-sm"></div>
            <div className="absolute top-2 left-2 right-2 h-1 bg-amber-500 rounded"></div>
          </div>

          {/* Soil */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-amber-900 rounded-t-sm"></div>

          {/* Plant Stem */}
          <div 
            className="absolute bottom-20 left-1/2 w-2 bg-green-600 transition-all duration-500 ease-out origin-bottom animate-sway"
            style={{ 
              height: `${getPlantHeight()}px`,
              opacity: progress >= 20 ? 1 : 0 
            }}
          ></div>

          {/* Leaves */}
          {/* First pair of leaves */}
          <div 
            className="absolute left-1/2 transition-all duration-700 ease-out origin-bottom"
            style={{ 
              bottom: `${120 + getPlantHeight() * 0.3}px`,
              transform: `translateX(-50%) scale(${getLeafScale(40)})`,
              opacity: getLeafOpacity(40),
              animation: progress >= 40 ? 'leafPop 0.7s ease-out' : 'none'
            }}
          >
            <div className="flex items-center">
              <div className="w-8 h-6 bg-green-500 rounded-full transform -rotate-45 -mr-2 transition-transform duration-300 hover:scale-110"></div>
              <div className="w-8 h-6 bg-green-500 rounded-full transform rotate-45 -ml-2 transition-transform duration-300 hover:scale-110"></div>
            </div>
          </div>

          {/* Second pair of leaves */}
          <div 
            className="absolute left-1/2 transition-all duration-700 ease-out origin-bottom"
            style={{ 
              bottom: `${140 + getPlantHeight() * 0.5}px`,
              transform: `translateX(-50%) scale(${getLeafScale(60)})`,
              opacity: getLeafOpacity(60),
              animation: progress >= 60 ? 'leafPop 0.7s ease-out' : 'none'
            }}
          >
            <div className="flex items-center">
              <div className="w-10 h-7 bg-green-400 rounded-full transform -rotate-45 -mr-2 transition-transform duration-300 hover:scale-110"></div>
              <div className="w-10 h-7 bg-green-400 rounded-full transform rotate-45 -ml-2 transition-transform duration-300 hover:scale-110"></div>
            </div>
          </div>

          {/* Third pair of leaves */}
          <div 
            className="absolute left-1/2 transition-all duration-700 ease-out origin-bottom"
            style={{ 
              bottom: `${160 + getPlantHeight() * 0.7}px`,
              transform: `translateX(-50%) scale(${getLeafScale(80)})`,
              opacity: getLeafOpacity(80),
              animation: progress >= 80 ? 'leafPop 0.7s ease-out' : 'none'
            }}
          >
            <div className="flex items-center">
              <div className="w-12 h-8 bg-green-300 rounded-full transform -rotate-45 -mr-2 transition-transform duration-300 hover:scale-110"></div>
              <div className="w-12 h-8 bg-green-300 rounded-full transform rotate-45 -ml-2 transition-transform duration-300 hover:scale-110"></div>
            </div>
          </div>

          {/* Flower (appears at the end) */}
          <div 
            className="absolute left-1/2 transition-all duration-1000 ease-out origin-bottom"
            style={{ 
              bottom: `${180 + getPlantHeight()}px`,
              transform: `translateX(-50%) scale(${getLeafScale(95)})`,
              opacity: getLeafOpacity(95),
              animation: progress >= 95 ? 'flowerBloom 1s ease-out' : 'none'
            }}
          >
            <div className="relative">
              {/* Flower petals */}
              <div className="w-4 h-4 bg-pink-400 rounded-full absolute -top-2 -left-2 animate-pulse"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full absolute -top-2 -right-2 animate-pulse delay-100"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full absolute -bottom-2 -left-2 animate-pulse delay-200"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full absolute -bottom-2 -right-2 animate-pulse delay-300"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full absolute -top-3 left-0 animate-pulse delay-400"></div>
              <div className="w-3 h-3 bg-yellow-300 rounded-full absolute -top-1 -left-1 animate-pulseGlow"></div>
            </div>
          </div>

          {/* Floating particles */}
          {progress >= 90 && (
            <>
              <div 
                className="absolute top-16 left-8 w-2 h-2 bg-yellow-300 rounded-full"
                style={{ animation: 'sparkle 1.5s ease-out infinite' }}
              ></div>
              <div 
                className="absolute top-24 right-8 w-1 h-1 bg-pink-300 rounded-full"
                style={{ animation: 'sparkle 1.2s ease-out infinite 0.3s' }}
              ></div>
              <div 
                className="absolute top-32 left-16 w-1 h-1 bg-green-300 rounded-full"
                style={{ animation: 'sparkle 1.8s ease-out infinite 0.6s' }}
              ></div>
            </>
          )}
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4 animate-pulse">Growing...</h2>
          
          {/* Progress Bar */}
          <div className="w-64 h-3 bg-green-200 rounded-full mx-auto mb-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-out animate-pulseGlow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Percentage */}
          <p className="text-green-700 font-medium animate-bounce">{progress}%</p>
          
          {/* Loading message */}
          <p className="text-green-600 mt-4 text-sm transition-opacity duration-500">
            {progress < 20 && "Preparing soil..."}
            {progress >= 20 && progress < 40 && "Planting seed..."}
            {progress >= 40 && progress < 60 && "Growing stem..."}
            {progress >= 60 && progress < 80 && "Sprouting leaves..."}
            {progress >= 80 && progress < 95 && "Developing foliage..."}
            {progress >= 95 && progress < 100 && "Blooming flower..."}
            {progress === 100 && "Complete! 🌸"}
          </p>
        </div>
      </div>
    </div>
  );
}