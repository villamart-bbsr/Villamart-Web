import React from 'react';

const BusinessModelDiagram = () => {
  return (
    <div className="bg-cyan-50 p-8 min-h-screen w-full relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-full w-1/3">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0 C50,20 50,80 0,100" stroke="green" fill="none" strokeWidth="0.5" />
            <path d="M0,0 C30,40 70,60 0,100" stroke="green" fill="none" strokeWidth="0.5" />
            <path d="M0,0 C70,30 30,70 0,100" stroke="green" fill="none" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,0 C50,20 50,80 0,100" stroke="green" fill="none" strokeWidth="0.5" />
            <path d="M0,0 C30,40 70,60 0,100" stroke="green" fill="none" strokeWidth="0.5" />
            <path d="M0,0 C70,30 30,70 0,100" stroke="green" fill="none" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="relative mb-16">
        <h1 className="text-5xl font-bold text-green-800 pb-2">BUSINESS MODEL</h1>
        <div className="w-72 h-1 bg-orange-500"></div>
        <div className="absolute right-4 top-0">
          <div className="flex items-center">
            <div className="text-green-500 text-4xl">villa</div>
            <div className="text-orange-500 text-4xl">mart</div>
            <div className="text-xs align-top mt-1">®</div>
            <div className="ml-2 mt-1">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-500 fill-current">
                <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                <path d="M12,7L9,15H15L12,7Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="relative flex justify-center items-center">
        {/* Flow diagram layout */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
          {/* Farmers Group */}
          <div className="relative">
            <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
              <div className="bg-white rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                  <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.89,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-center">FARMERS GROUP</div>
            </div>
          </div>

          {/* Horizontal line connecting Farmers to PFC */}
          <div className="hidden md:block w-12 h-1 bg-black"></div>

          {/* PFC */}
          <div className="relative">
            <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
              <div className="bg-white rounded-full p-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                  <path d="M19,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2M11,16H9V18H7V16H5V14H7V12H9V14H11V16M15,16H13V18H11V16H9V14H11V12H13V14H15V16M19,16H17V18H15V16H13V14H15V12H17V14H19V16Z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-center">PROCUREMENT CUM</div>
              <div className="text-xl font-bold text-center">FULFILMENT CENTER</div>
              <div className="text-xl font-bold text-center">(PFC)</div>
            </div>
          </div>

          {/* Three distribution channels - position them to the right of PFC */}
          <div className="flex flex-col gap-8 ml-8">
            {/* Lines connecting PFC to distribution channels */}
            <div className="hidden md:flex flex-col gap-8">
              {/* Upper distribution path */}
              <div className="flex items-center">
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">FRANCHISE OUTLETS</div>
                </div>
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">COLONY, APT,</div>
                  <div className="text-xl font-bold text-center">SOCIETY</div>
                </div>
              </div>

              {/* Middle distribution path */}
              <div className="flex items-center">
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18A2,2 0 0,1 9,20M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75M18,2.76L16.59,1.35L11.76,6.18L9.41,3.82L8,5.23L11.76,9L18,2.76Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">VILLA BASKET</div>
                </div>
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">COLONY, APT,</div>
                  <div className="text-xl font-bold text-center">SOCIETY</div>
                </div>
              </div>

              {/* Lower distribution path */}
              <div className="flex items-center">
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M15,11V5.83C15,5.3 15.3,4.83 15.77,4.71L19.27,3.71C19.76,3.58 20.25,3.94 20.38,4.43C20.4,4.54 20.42,4.66 20.42,4.77V10.42C20.42,10.95 20.11,11.43 19.63,11.55L16.13,12.55C15.64,12.68 15.14,12.31 15.01,11.82C15,11.71 14.98,11.6 14.98,11.5V7.08L7.92,8.5V15.92C7.92,16.45 7.61,16.93 7.13,17.05L3.63,18.05C3.14,18.18 2.64,17.82 2.5,17.33C2.5,17.22 2.5,17.11 2.5,17V11.35C2.5,10.82 2.81,10.34 3.29,10.22L6.79,9.22C7.28,9.09 7.78,9.45 7.91,9.94C7.92,10.05 7.92,10.16 7.92,10.27V14.67L14.98,13.25V5.83Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">HORECA (B2B)</div>
                </div>
                <div className="w-12 h-1 bg-black"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">HOTEL/ HOSTEL/</div>
                  <div className="text-xl font-bold text-center">CANTEEN/ SCHOOL</div>
                </div>
              </div>
            </div>
            
            {/* Mobile view stacked layout */}
            <div className="md:hidden flex flex-col gap-8">
              {/* Distribution channels - stacked vertically for mobile */}
              <div className="flex flex-col gap-4">
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">FRANCHISE OUTLETS</div>
                </div>
                <div className="h-8 w-1 bg-black mx-auto"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">COLONY, APT,</div>
                  <div className="text-xl font-bold text-center">SOCIETY</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18A2,2 0 0,1 9,20M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75M18,2.76L16.59,1.35L11.76,6.18L9.41,3.82L8,5.23L11.76,9L18,2.76Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">VILLA BASKET</div>
                </div>
                <div className="h-8 w-1 bg-black mx-auto"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">COLONY, APT,</div>
                  <div className="text-xl font-bold text-center">SOCIETY</div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="bg-white rounded-full p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-green-800 fill-current">
                      <path d="M15,11V5.83C15,5.3 15.3,4.83 15.77,4.71L19.27,3.71C19.76,3.58 20.25,3.94 20.38,4.43C20.4,4.54 20.42,4.66 20.42,4.77V10.42C20.42,10.95 20.11,11.43 19.63,11.55L16.13,12.55C15.64,12.68 15.14,12.31 15.01,11.82C15,11.71 14.98,11.6 14.98,11.5V7.08L7.92,8.5V15.92C7.92,16.45 7.61,16.93 7.13,17.05L3.63,18.05C3.14,18.18 2.64,17.82 2.5,17.33C2.5,17.22 2.5,17.11 2.5,17V11.35C2.5,10.82 2.81,10.34 3.29,10.22L6.79,9.22C7.28,9.09 7.78,9.45 7.91,9.94C7.92,10.05 7.92,10.16 7.92,10.27V14.67L14.98,13.25V5.83Z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-center">HORECA (B2B)</div>
                </div>
                <div className="h-8 w-1 bg-black mx-auto"></div>
                <div className="bg-green-800 rounded-lg p-4 w-64 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold text-center">HOTEL/ HOSTEL/</div>
                  <div className="text-xl font-bold text-center">CANTEEN/ SCHOOL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting lines for desktop */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
          {/* Vertical lines from PFC to 3 distribution channels */}
          <svg className="absolute top-0 left-0" width="180" height="300" viewBox="0 0 180 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top line to Franchise Outlets */}
            <path d="M0 50 H 180" stroke="black" strokeWidth="4" />
            
            {/* Middle Line to Villa Basket */}
            <path d="M0 150 H 180" stroke="black" strokeWidth="4" />
            
            {/* Bottom Line to HORECA */}
            <path d="M0 250 H 180" stroke="black" strokeWidth="4" />
            
            {/* Vertical connector */}
            <path d="M0 50 V 250" stroke="black" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelDiagram;