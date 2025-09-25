import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Linkedin, Twitter, Facebook, Mail, MapPin, Calendar, Award } from "lucide-react";

// Team details data
const teamDetails = {
    "Dr Ramesh Chandra Biswal": {
        name: "Dr Ramesh Chandra Biswal",
        education: "PhD, IIT Khargpur",
        designation: "Founder & CEO",
        image: "/images/ceo-photo.jpeg",
        linkedin: "https://in.linkedin.com/in/dr-ramesh-chandra-biswal-7151b822",
        facebook: "https://www.facebook.com/rchbiswal/",
        twitter: "https://x.com/rchbiswal",
        email: "ramesh@villamart.in",
        location: "Bhubaneswar, India",
        // joinedDate: "2016",
        achievements: ["Materials Scientist", "Agripreneur", "Innovation Leader"],
        about: `He is a Materials Scientist turned Agripreneur with over 8 years of experience designing sustainable business models at the intersection of agriculture, technology, and social impact. As the Founder of VillaMart, he built a PhyGital (Physical + Digital) supply chain platform that connects farmers directly to consumers — delivering fair pricing, reducing post-harvest losses, and ensuring year-round access to healthy, locally sourced produce.

His core strengths include:

• Assessing and implementing technology solutions for farmers
• Designing and optimizing rural value chains
• Building capacity for FPOs & SHGs
• Developing retail & franchise models
• Forging strategic partnerships with quick commerce platforms, retail chains, and institutions
• Deploying post-harvest technology & traceability tools

His work is driven by a mission to boost farmer incomes, build transparent supply chains, and bring traceable, quality produce to urban markets — combining grassroots insight with purposeful innovation and scalable execution.`,
    },
    "Silarani Mohanty": {
        name: "Silarani Mohanty",
        education: "MBA, Operations Management",
        designation: "Chief Operating Officer",
        image: "/images/ourTeam/COO.jpg",
        linkedin: "https://linkedin.com/in/silarani-mohanty",
        facebook: "https://www.facebook.com/share/17FHaF1VW9",
        email: "cgo@villamart.com",
        location: "Bhubaneswar, India",
        // joinedDate: "2018",
        achievements: ["Operations Excellence", "Process Optimization", "Team Leadership"],
        about: `She is the Chief Operating Officer at VillaMart, passionate about creating operational excellence that drives organizational success. Her role involves streamlining processes, fostering collaboration, and ensuring consistent value delivery to both farmers and customers.

Highly organized and committed to easing the workload of her team, she finds genuine joy in enhancing operational efficiency and removing obstacles. Trust and dependability are qualities she considers essential for growth, and she takes pride in being dedicated to both.

Beyond her professional role, she nurtures her plants at home, which serve as her healers and create a positive environment for her and her surroundings.

She believes in going the extra mile to help others achieve their dreams while maintaining balance and standing her ground when needed. Dedicated to continuous improvement and operational agility, she is committed to ensuring that VillaMart stays ahead in the rapidly evolving agricultural landscape.`,
    },
    "Swetaparna Panigrahi": {
        name: "Swetaparna Panigrahi",
        education: "Semi-Qualified Chartered Accountant",
        designation: "Chief Financial Officer",
        image: "/images/ourTeam/CFO.jpg",
        linkedin: "https://www.linkedin.com/in/swetaparna-panigrahi-a502a0219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "cfo@villamart.in",
        location: "Bhubaneswar, India",
        // joinedDate: "2019",
        achievements: ["Financial Strategy", "Budget Management", "Fundraising Expert"],
        about: `She is the Chief Financial Officer at VillaMart, bringing financial stewardship and strategic planning expertise to support the organization's mission of empowering farmers and building resilient supply chains. With a background as a Semi-Qualified Chartered Accountant and experience with organizations like EY, she has held progressively responsible positions before joining VillaMart.

Her work in the finance domain encompasses comprehensive financial management, including planning, budgeting, forecasting, fundraising, and fund management. She ensures that resources are optimized to maximize impact for farming communities while maintaining sustainable growth.

Beyond her passion for numbers and financial analysis, she enjoys traveling, reading, and engaging in social work. She firmly believes that strong financial foundations enable lasting positive change in the agricultural sector.`,
    },
    "Rakesh Kumar Panda": {
        name: "Rakesh Kumar Panda",
        education: "B.Tech Computer Science",
        designation: "Chief Technology Officer",
        image: "/images/ourTeam/CTO.jpg",
        email: "cto@villamart.in",
        location: "Bhubaneswar, India",
        joinedDate: "2020",
        achievements: ["Technology Innovation", "Platform Development", "Digital Transformation"],
        "about": "He is the Chief Technology Officer (CTO) at VillaMart, specializing in leading and scaling high-performance technology teams, driving innovation, and executing visionary tech strategies to propel business success. His core strengths lie in aligning technology with business goals, optimizing product development cycles, and implementing systems that enhance operational efficiency.\n\nHe has a proven track record in key areas such as software development, AI integration, cloud architecture, and data security, where he has successfully managed and executed projects and milestones. Passionate about staying ahead of the tech curve, he cultivates a collaborative culture and ensures that his teams remain agile in a rapidly changing tech landscape.\n\nIn his role as CTO, he focuses on:\n- Leadership and team development\n- Innovation and technology strategy\n- Product development and system optimization\n- Stakeholder management and cross-functional collaboration\n- Driving operational scalability and efficiency\n\nHe thrives on problem-solving, strategic planning, and fostering environments where technology-driven solutions transform businesses and improve customer experiences."   },
    "Sangita Behura": {
        name: "Sangita Behura",
        education: "MBA Agribusiness Management, B.Tech Computer Science",
        designation: "Manager-People, Project & Partnership",
        image: "/images/ourTeam/MPP.jpg",
        linkedin: "https://www.linkedin.com/in/sangita-behura-9a07179b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        facebook: "https://www.facebook.com/share/162ha5FAr1/?mibextid=wwXIfr",
        email: "partnerships@villamart.in",
        location: "Bhubaneswar, India",
        // joinedDate: "2021",
        achievements: ["Agribusiness Excellence", "FPO Development", "Market Linkage Specialist"],
        about: `Sangita leads projects at Villamart and brings 7+ years experience in Agribusiness, Market development and Rural livelihood promotion. She has worked with leading institutions like NABARD, Odisha Livelihood Mission and other key institutions building FPOs, market linkages and capacity building and DPR preparations.

She holds an MBA in Agribusiness Management and B.Tech in Computer Science, bringing a unique blend of technical and agricultural expertise to her role. Her extensive experience spans across various aspects of rural development and agricultural value chain enhancement.

Key areas of expertise:
• FPO (Farmer Producer Organization) development and capacity building
• Market linkage creation and supply chain optimization
• Rural livelihood promotion and farmer empowerment
• Project management and stakeholder coordination
• DPR (Detailed Project Report) preparation and implementation

Her work focuses on creating sustainable agricultural ecosystems that benefit farmers while driving organizational growth and impact in the agricultural sector.`,
    },
    "Harishankar Pal": {
        name: "Harishankar Pal",
        education: "B.Sc Agriculture",
        designation: "Farmer Success Manager",
        image: "/images/ourTeam/FS.jpg",
        linkedin: "https://www.linkedin.com/in/harishankar-pal-8a05822aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        facebook: "https://www.facebook.com/share/1BG3jLPL2d/",
        email: "farmconnect@villamart.in",
        location: "Rural Odisha, India",
        // joinedDate: "2022",
        achievements: ["Farmer Partnership Building", "Supply Chain Optimization", "Market Development"],
        about: `He is the Farmer Success Manager (FSM) at VillaMart, specializing in working closely with farmers to build strong partnerships, enhance agricultural practices, and create sustainable market linkages that drive both farmer prosperity and business growth. His core strengths lie in aligning farmer needs with organizational goals, streamlining procurement and supply processes, and implementing strategies that ensure quality produce and fair value for farmers.

He has a proven track record in key areas such as farmer engagement, crop planning, supply chain optimization, quality assurance, and market development, where he has successfully managed and executed impactful initiatives. He is passionate about empowering farmers with knowledge, fostering collaboration, and ensuring that they remain competitive in a rapidly evolving agri-business landscape.

In his role as Farmer Success Manager, he focuses on:
• Farmer relationship building and support
• Market linkage and procurement strategies
• Quality assurance and product optimization
• Stakeholder management and collaboration with FPOs, NGOs, and companies
• Driving scalability and efficiency in agri-supply chains

He thrives on problem-solving, strategic planning, and creating ecosystems where farmer-centric solutions transform livelihoods and strengthen the agri-value chain."`,
    },
    "Kamal Kumar Mohanty": {
        name: "Kamal Kumar Mohanty",
        education: "Master of Science (MSc) in Agriculture",
        designation: "Farm Resource Manager",
        image: "/images/ourTeam/FR.jpg",
        linkedin: "https://www.linkedin.com/in/kamal-kumar-mohanty-62a01b283/",
        facebook: "https://www.facebook.com/share/1FQwW4krpz/",
        email: "support@villamart.in",
        location: "Rural Odisha, India",
        // joinedDate: "2022",
        achievements: ["Modern Agricultural Practices", "Sustainable Farming Systems", "Agricultural Innovation"],
        about: `Kamal Kumar Mohanty holds a Master of Science (MSc) degree in Agriculture with hands-on experience in modern agricultural practices and sustainable farming systems. His academic and practical background includes specialization in crop planning, soil health management & implementation of innovative agricultural technologies.

He joined as a Farm Resource Manager and helps in managing resources while being passionate about advancing agricultural operations through continuous innovation and technology. His expertise spans across various aspects of agricultural resource management and sustainable farming practices.

Key areas of focus:
• Crop planning and agricultural strategy
• Soil health management and optimization
• Implementation of innovative agricultural technologies
• Resource management and allocation
• Sustainable farming system development
• Agricultural operations advancement through technology

Kamal is dedicated to transforming traditional farming practices through modern agricultural techniques and ensuring optimal resource utilization for maximum productivity and sustainability.`,
    },
    "Dr Dillip Kumar Mishra": {
        name: "Dr Dillip Kumar Mishra",
        education: "PhD, IIT Bombay; M.Tech, NIT Jamshedpur; M.Sc, Berhampur University",
        designation: "Co-Founder",
        image: "/images/ourTeam/co-founder.jpeg",
        email: "dillip@villamart.in",
        location: "Bhubaneswar, India",
        achievements: [
            "US Patent Holder",
            "16 Research Publications",
            "Industrial R&D Leader",
            "Nanomaterials Expert",
            "3D Printing Innovator"
        ],
        about: `Dr Dillip Kumar Mishra is a materials scientist with 10+ years of industrial and research experience in solar cells, carbon fiber, nanotube, graphene, and advanced composites. He has published 16 research articles and holds a US patent (US8617507B2).

He has led major projects in Chemical Vapor Deposition (CVD), pulsed laser ablation, dye-sensitized solar cells, and carbon composites, and has reviewed over 20 manuscripts for international journals.

Technical expertise includes:
• CVD growth of carbon fiber/nanotube/graphene
• Sputtering target preparation
• Nanomaterial analysis using SEM, Raman spectroscopy, XPS, UV-VIS-NIR
• 3D design and printing (100+ hours)
• Automation and yield improvement in fiber production
• Thermal management for electronics

Industrial Experience:
• Project Leader (R&D), Advanced International Multitech Co. Ltd, Taiwan
• Post-Doctoral Researcher, Dept. of Materials Science & Engg., NCKU, Taiwan

Other activities:
• Bluetooth-connected sensor apps
• Obstacle-avoiding toy car
• Smart trash can
• RGB color detection system

Dr Mishra bridges research and industry, driving innovation and sustainable solutions at VillaMart.`,
    },
    "Ajit Bag": {
        name: "Ajit Bag",
        education: "MBA, Marketing & Strategy",
        designation: "CGO",
        image: "/images/ourTeam/CGO.jpeg",
        linkedin: "https://www.linkedin.com/in/ajit-bag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "coo@villamart.in",
        location: "Bhubaneswar, India",
        achievements: [
            "Growth Strategy Expert",
            "Market Expansion Leader",
            "Partnership Builder",
            "Innovation Champion"
        ],
        about: `Ajit Bag is the Chief Growth Officer (CGO) at VillaMart, passionate about driving sustainable growth and expanding the company's impact across new markets and communities. His role focuses on identifying strategic opportunities, building strong partnerships, and fostering a culture of innovation that empowers the team and stakeholders.

With a background in marketing and strategy, he brings a data-driven approach to scaling operations and unlocking new revenue streams. He thrives on solving complex challenges, developing creative solutions, and leading cross-functional teams to achieve ambitious goals.

He believes that true growth comes from collaboration, adaptability, and a relentless pursuit of excellence. At VillaMart, he is committed to building lasting relationships, enhancing the brand presence, and ensuring meaningful value is delivered to farmers, partners, and customers alike.

He works to grow the business while making a positive difference in the agri-business ecosystem.`,
    },
};

// Custom component to render formatted text with better structure
const FormattedAbout = ({ text, name }) => {
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => {
        // Check if it's a bullet list section
        if (paragraph.includes('•') || paragraph.includes('-')) {
          const lines = paragraph.split('\n');
          const title = lines[0];
          const listItems = lines.slice(1).filter(line => line.trim() && (line.includes('•') || line.includes('-')));
          
          if (listItems.length > 0) {
            return (
              <div key={index} className="space-y-4">
                {title && !title.includes('•') && !title.includes('-') && (
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    {title.trim()}
                  </p>
                )}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item.replace(/^[•\-]\s*/, '').trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }
        }
        
        // Regular paragraph
        return (
          <p key={index} className="text-gray-700 leading-relaxed text-lg">
            {paragraph.trim()}
          </p>
        );
      })}
    </div>
  );
};

export default function TeamMemberDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const decodedName = decodeURIComponent(name);
  const details = teamDetails[decodedName];

  if (!details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white px-4">
        <Helmet>
          <title>Team Member Not Found - VillaMart</title>
        </Helmet>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Award className="w-12 h-12 text-white/70" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Team Member Not Found</h2>
          <p className="text-white/80 mb-8 text-center max-w-md">Sorry, we couldn't find the team member you're looking for.</p>
          <button
            className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{details.name} - {details.designation} | VillaMart Team</title>
        <meta 
          name="description" 
          content={`Learn more about ${details.name}, ${details.designation} at VillaMart. ${details.about.substring(0, 150)}...`} 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <button
              className="btn btn-ghost gap-2 text-gray-600 hover:text-emerald-600 text-sm sm:text-base"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
              Back to Team
            </button>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="xl:col-span-1"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden xl:sticky xl:top-24">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 sm:p-8 text-white relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                      <img
                        src={details.image}
                        alt={details.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h1 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">{details.name}</h1>
                    <p className="text-emerald-100 font-medium mb-2 text-sm sm:text-base">{details.designation}</p>
                    {details.education && (
                      <p className="text-emerald-200/80 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full inline-block max-w-full">
                        {details.education}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact info */}
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {details.email && (
                      <div className="flex items-start gap-3 text-gray-600">
                        <Mail size={16} className="text-emerald-600 mt-1 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                        <span className="text-xs sm:text-sm break-all">{details.email}</span>
                      </div>
                    )}
                    {details.location && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin size={16} className="text-emerald-600 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                        <span className="text-xs sm:text-sm">{details.location}</span>
                      </div>
                    )}
                    {details.joinedDate && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar size={16} className="text-emerald-600 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                        <span className="text-xs sm:text-sm">Joined {details.joinedDate}</span>
                      </div>
                    )}
                  </div>

                  {/* Social links */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 text-gray-500">
                    {details.linkedin && (
                      <a
                        href={details.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600 w-8 h-8 min-h-8"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {details.twitter && (
                      <a
                        href={details.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600 w-8 h-8 min-h-8"
                      >
                        <Twitter size={14} />
                      </a>
                    )}
                    {details.facebook && (
                      <a
                        href={details.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600 w-8 h-8 min-h-8"
                      >
                        <Facebook size={14} />
                      </a>
                    )}
                  </div>

                  {/* Achievements */}
                  {details.achievements && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Award size={16} className="text-emerald-600 sm:w-[18px] sm:h-[18px]" />
                        Key Achievements
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {details.achievements.map((achievement, index) => (
                          <div key={index} className="badge badge-outline badge-primary text-xs px-2 py-1">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* About section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="xl:col-span-2"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="leading-tight">About {details.name.split(' ')[0]}</span>
                  </h2>
                </div>
                
                <div className="max-w-none">
                  <FormattedAbout text={details.about} name={details.name} />
                </div>

                {/* Call to action */}
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                    Want to connect?
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Feel free to reach out for collaboration opportunities or just to say hello!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {details.linkedin && (
                      <a
                        href={details.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white gap-2 btn-sm sm:btn-md"
                      >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Connect on LinkedIn
                      </a>
                    )}
                    {details.email && (
                      <a
                        href={`mailto:${details.email}`}
                        className="btn btn-outline btn-primary border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white gap-2 btn-sm sm:btn-md"
                      >
                        <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Send Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}