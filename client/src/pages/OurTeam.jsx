import React, { useState } from 'react';
import { FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('CORE TEAM');
  const [selectedMember, setSelectedMember] = useState(0);

  const teamData = {
    'CORE TEAM': [
      {
        name: "Srikumar Misra",
        position: "Founder & Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
        description: "Sri started Milk Mantra in 2009 with the vision of creating an exciting, pure and healthy dairy products brand in India, whilst creating sustainable impact amongst network farmers - especially in Odisha"
      },
      {
        name: "Sarah Johnson",
        position: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1494790108755-2616c7c1f2d2?w=600&h=800&fit=crop&crop=face",
        description: "Sarah brings over 15 years of operational excellence in the dairy industry, focusing on supply chain optimization and sustainable farming practices"
      },
      {
        name: "Michael Chen",
        position: "Head of Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
        description: "Michael leads our digital transformation initiatives, implementing cutting-edge technology solutions to modernize dairy operations"
      },
      {
        name: "Priya Sharma",
        position: "Marketing Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
        description: "Priya drives brand strategy and market expansion, with a focus on connecting with health-conscious consumers across India"
      }
    ],
    // 'BOARD': [
    //   {
    //     name: "David Wilson",
    //     position: "Chairman",
    //     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
    //     description: "David brings 25 years of board experience in food and agriculture sector, providing strategic guidance for sustainable growth"
    //   },
    //   {
    //     name: "Dr. Anita Patel",
    //     position: "Independent Director",
    //     image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=800&fit=crop&crop=face",
    //     description: "Dr. Patel is a renowned expert in sustainable agriculture with PhD in Agricultural Sciences from IIT Delhi"
    //   },
    //   {
    //     name: "Rajesh Kumar",
    //     position: "Board Member",
    //     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
    //     description: "Rajesh has extensive experience in rural development and farmer welfare programs across India"
    //   }
    // ],
    // 'INVESTORS': [
    //   {
    //     name: "Green Valley Capital",
    //     position: "Lead Investor",
    //     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&crop=face",
    //     description: "Green Valley Capital is our primary investment partner, focusing on sustainable food and agriculture ventures"
    //   },
    //   {
    //     name: "Impact Ventures",
    //     position: "Strategic Investor",
    //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    //     description: "Impact Ventures specializes in companies that create positive social and environmental impact"
    //   },
    //   {
    //     name: "Agricultural Innovation Fund",
    //     position: "Sector Specialist",
    //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    //     description: "AIF focuses exclusively on agricultural technology and sustainable farming solutions"
    //   }
    // ],
    'PARTNERS': [
      {
        name: "Rural Cooperative Network",
        position: "Farming Partner",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
        description: "Our largest network of dairy farmers across Odisha, representing over 10,000 farming families"
      },
      {
        name: "TechAgri Solutions",
        position: "Technology Partner",
        image: "https://images.unsplash.com/photo-1494790108755-2616c7c1f2d2?w=600&h=800&fit=crop&crop=face",
        description: "Leading provider of IoT and AI solutions for dairy farm management and optimization"
      },
      {
        name: "Sustainable Logistics Corp",
        position: "Distribution Partner",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
        description: "Our cold chain and distribution partner ensuring fresh products reach consumers efficiently"
      }
    ]
  };

  const currentTeam = teamData[activeTab];
  const currentMember = currentTeam[selectedMember];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedMember(0);
  };

  const handleMemberClick = (index) => {
    setSelectedMember(index);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Left Side - Sticky Profile Section */}
      <div className="w-1/2 relative overflow-hidden -top-10">
        {/* Background with curved green overlay */}
        <div className="absolute inset-0">
          <img 
            src={currentMember.image}
            alt={currentMember.name}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          {/* Curved green overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/40"></div>
        </div>
        
        {/* Curved green section */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-3/4 h-80 ">
      {/* Optional SVG Background */}
      {/* <svg className="absolute top-0 w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
        <path d="M0,80 Q200,0 400,80 L400,80 L0,80 Z" fill="rgb(34 197 94)" />
      </svg> */}

      <div className="bg-green-500 rounded-xl shadow-2xl h-full p-6 sm:p-10 text-white relative overflow-hidden">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 transition-all duration-500">
          {currentMember.name}
        </h1>

        <p className="text-green-100 text-lg sm:text-xl font-medium mb-3 transition-all duration-500">
          {currentMember.position}
        </p>

        <p className="text-sm sm:text-base leading-relaxed transition-all duration-500 mb-6 max-w-3xl">
          {currentMember.description}
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer">
            <FaLinkedinIn className="text-white text-base" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer">
            <FaFacebookF className="text-white text-base" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all cursor-pointer">
            <FaEnvelope className="text-white text-base" />
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-1/2 overflow-y-auto bg-gray-50">
        <div className="p-12">
          {/* Header Section */}
          <div className="mb-12">
            <p className="text-green-500 font-medium mb-4 text-sm uppercase tracking-wide">team</p>
            <h2 className="text-5xl font-light text-gray-700 mb-2">
              OUR TEAM
            </h2>
            <h3 className="text-5xl font-light text-gray-400 mb-8">
              OF <span className="font-medium text-gray-700">PEOPLE</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
            VillaMart is powered by a passionate team of innovators committed to building a vibrant, sustainable, and inclusive agri-tech ecosystem. With a focus on purity, efficiency, and impact, we aim to transform rural supply chains while empowering farmers and delivering value to every stakeholder.


            </p>

            {/* Navigation tabs */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
              {Object.keys(teamData).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-green-500 text-white rounded-md' 
                      : 'text-gray-600 hover:text-green-500 hover:bg-gray-100 rounded-md'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {currentTeam.map((member, index) => (
              <div 
                key={index} 
                onClick={() => handleMemberClick(index)}
                className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedMember === index 
                    ? 'ring-2 ring-green-500 shadow-lg transform -translate-y-1' 
                    : 'shadow-md'
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-green-500 font-medium text-sm mb-2">{member.position}</p>
                  {selectedMember === index && (
                    <div className="flex items-center text-green-500 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Currently Selected
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team Card */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-md">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-6xl font-light">+</div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Join Our Team</h4>
                <p className="text-green-500 font-medium text-sm mb-2">Open Positions</p>
              </div>
            </div>
          </div>

          {/* Bottom spacing for scrolling */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;