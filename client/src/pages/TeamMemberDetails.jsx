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
        about: `I'm a Materials Scientist turned Agripreneur with 8+ years of experience designing sustainable business models at the intersection of agriculture, technology, and social impact.
As Founder of VillaMart, I built a PhyGital (Physical + Digital) supply chain platform connecting farmers directly to consumers — delivering fair pricing, reducing post-harvest losses, and ensuring year-round access to healthy, locally sourced produce.

Core strengths:
• Assessing and implementing technology solutions for farmers
• Rural value chain design and optimization
• FPO & SHG capacity building
• Retail & franchise model development
• Strategic partnerships with quick commerce platforms, retail chains, and institutions
• Deploying post-harvest technology & traceability tools

My work is driven by a mission to boost farmer incomes, build transparent supply chains, and bring traceable, quality produce to urban markets — combining grassroots insight with purposeful innovation and scalable execution.`,
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
        about: `As Chief Operating Officer at VillaMart, I'm passionate about creating operational excellence that drives organizational success. My role involves streamlining processes, fostering collaboration, and ensuring we consistently deliver value to our farmers and customers.

I'm obsessed with staying organized and making everyone's life easier. It brings genuine joy to take the burden off my team's shoulders, and I always do anything I can to enhance operational efficiency. Trust and dependability are the foundations that can grow a company, and I pride myself on being dedicated to both.

When I'm not optimizing operations, I'm at home nurturing my plants. My plants are my absolute healers and they create a positive environment for me and my surroundings.

I believe in bending over backwards to help others' dreams come true, while understanding the importance of standing your ground and maintaining balance. I am committed to fostering a culture of continuous improvement and operational agility to stay ahead in our rapidly evolving agricultural landscape.`,
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
        about: `As CFO at VillaMart, I bring financial stewardship and strategic planning expertise to support our mission of empowering farmers and building resilient supply chains. With my background as a Semi-Qualified Chartered Accountant and experience with organizations like EY, I've worked in progressively responsible positions before joining VillaMart.

My work in the finance domain encompasses comprehensive financial management including planning, budgeting, forecasting, fundraising, and fund management. I ensure our resources are optimized to maximize impact for our farming communities while maintaining sustainable growth.

Beyond my love for numbers and financial analysis, I enjoy traveling, reading, and social work. I believe that strong financial foundations enable us to create lasting positive change in the agricultural sector.`,
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
        about: `I joined as Chief Technology Officer (CTO). I specialize in leading and scaling high-performance technology teams, driving innovation, and executing visionary tech strategies to propel business success. My core strengths lie in aligning technology with business goals, optimizing product development cycles, and implementing systems that enhance operational efficiency.

I have a proven track record in key areas such as software development, AI integration, cloud architecture, data security, etc., where I've successfully managed and executed projects or milestones. I'm passionate about staying ahead of the tech curve, cultivating a collaborative culture, and ensuring that my teams remain agile in a rapidly changing tech landscape.

In my role as CTO, I focus on:

• Leadership and team development
• Innovation and tech strategy
• Product development and system optimization
• Stakeholder management and cross-functional collaboration
• Driving operational scalability and efficiency

I thrive on problem-solving, strategic planning, and fostering environments where technology-driven solutions transform businesses and improve customer experiences.`,
    },
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
        about: `I joined as Farmer Success Manager (FSM). I specialize in working closely with farmers to build strong partnerships, enhance agricultural practices, and create sustainable market linkages that drive both farmer prosperity and business growth. My core strengths lie in aligning farmer needs with organizational goals, streamlining procurement and supply processes, and implementing strategies that ensure quality produce and fair value for farmers.

I have a proven track record in key areas such as farmer engagement, crop planning, supply chain optimization, quality assurance, and market development, where I've successfully managed and executed impactful initiatives. I'm passionate about empowering farmers with knowledge, fostering collaboration, and ensuring that they remain competitive in a rapidly evolving agri-business landscape.

In my role as Farmer Success Manager, I focus on:

• Farmer relationship building and support
• Market linkage and procurement strategies
• Quality assurance and product optimization
• Stakeholder management and collaboration with FPOs, NGOs, and companies
• Driving scalability and efficiency in agri-supply chains

I thrive on problem-solving, strategic planning, and creating ecosystems where farmer-centric solutions transform livelihoods and strengthen the agri-value chain.`,
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
        about: `As Chief Growth Officer at VillaMart, I am passionate about driving sustainable growth and expanding our impact across new markets and communities. My role focuses on identifying strategic opportunities, building strong partnerships, and fostering a culture of innovation that empowers our team and stakeholders.

With a background in marketing and strategy, I bring a data-driven approach to scaling operations and unlocking new revenue streams. I thrive on solving complex challenges, developing creative solutions, and leading cross-functional teams to achieve ambitious goals.

I believe that true growth comes from collaboration, adaptability, and a relentless pursuit of excellence. At VillaMart, I am committed to building lasting relationships, enhancing our brand presence, and ensuring we deliver meaningful value to farmers, partners, and customers alike.

Let's grow together and make a positive difference in the agri-business ecosystem.`,
    },
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
          <h2 className="text-3xl font-bold mb-4">Team Member Not Found</h2>
          <p className="text-white/80 mb-8">Sorry, we couldn't find the team member you're looking for.</p>
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <button
              className="btn btn-ghost gap-2 text-gray-600 hover:text-emerald-600"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
              Back to Team
            </button>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 "
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-17">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                      <img
                        src={details.image}
                        alt={details.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h1 className="text-2xl font-bold mb-2">{details.name}</h1>
                    <p className="text-emerald-100 font-medium mb-2">{details.designation}</p>
                    {details.education && (
                      <p className="text-emerald-200/80 text-sm bg-white/10 px-3 py-1 rounded-full inline-block">
                        {details.education}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact info */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    {details.email && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail size={18} className="text-emerald-600" />
                        <span className="text-sm">{details.email}</span>
                      </div>
                    )}
                    {details.location && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin size={18} className="text-emerald-600" />
                        <span className="text-sm">{details.location}</span>
                      </div>
                    )}
                    {details.joinedDate && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar size={18} className="text-emerald-600" />
                        <span className="text-sm">Joined {details.joinedDate}</span>
                      </div>
                    )}
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3 mb-6 text-gray-500">
                    {details.linkedin && (
                      <a
                        href={details.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {details.twitter && (
                      <a
                        href={details.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {details.facebook && (
                      <a
                        href={details.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-outline btn-sm border-emerald-200 hover:bg-emerald-600 hover:border-emerald-600"
                      >
                        <Facebook size={16} />
                      </a>
                    )}
                  </div>

                  {/* Achievements */}
                  {details.achievements && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Award size={18} className="text-emerald-600" />
                        Key Achievements
                      </h3>
                      <div className="space-y-2">
                        {details.achievements.map((achievement, index) => (
                          <div key={index} className="badge badge-outline badge-primary text-xs">
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
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    About {details.name}
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {details.about}
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Want to connect?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Feel free to reach out for collaboration opportunities or just to say hello!
                  </p>
                  <div className="flex gap-3">
                    {details.linkedin && (
                      <a
                        href={details.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white gap-2"
                      >
                        <Linkedin size={18} />
                        Connect on LinkedIn
                      </a>
                    )}
                    {details.email && (
                      <a
                        href={`mailto:${details.email}`}
                        className="btn btn-outline btn-primary border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white gap-2"
                      >
                        <Mail size={18} />
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