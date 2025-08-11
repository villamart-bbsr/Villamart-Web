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
    email: "ramesh@villamart.com",
    location: "Bhubaneswar, India",
    joinedDate: "2016",
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
  "Jenny Wilson": {
    name: "Jenny Wilson",
    education: "M.Des, NID Ahmedabad",
    designation: "Design Lead",
    image: "https://i.pravatar.cc/400?img=1",
    linkedin: "https://linkedin.com/in/jennywilson",
    facebook: "https://facebook.com/jennywilson",
    twitter: "https://twitter.com/jennywilson",
    email: "jenny@villamart.com",
    location: "Mumbai, India",
    joinedDate: "2018",
    achievements: ["UI/UX Expert", "Brand Strategist", "Design Innovator"],
    about: `Jenny is a passionate designer with a keen eye for contemporary aesthetics and usability. She leads the creative team at VillaMart, ensuring every product and experience is both beautiful and functional.

With over 6 years of experience in design, Jenny has worked with various startups and established companies, helping them create compelling user experiences that drive engagement and growth.

Strengths:
• UI/UX design and research
• Brand identity development
• Product storytelling and marketing
• Team leadership and mentorship
• Design systems and guidelines

Jenny believes everyone deserves access to well-made, thoughtfully designed products. Her design philosophy centers around creating inclusive, accessible, and sustainable design solutions.`,
  },
  "Bessie Cooper": {
    name: "Bessie Cooper",
    education: "MBA, IIM Bangalore",
    designation: "Product Manager",
    image: "https://i.pravatar.cc/400?img=2",
    linkedin: "https://linkedin.com/in/bessiecooper",
    facebook: "https://facebook.com/bessiecooper",
    twitter: "https://twitter.com/bessiecooper",
    email: "bessie@villamart.com",
    location: "Bangalore, India",
    joinedDate: "2019",
    achievements: ["Product Strategy Expert", "Market Research Leader", "Customer Experience Advocate"],
    about: `Bessie is a dynamic product manager with a knack for building relatable and accessible collections. She ensures VillaMart's offerings evolve with customer needs while staying true to the brand's mission.

With a strong background in business strategy and product development, Bessie has successfully launched multiple product lines that have significantly contributed to VillaMart's growth.

Strengths:
• Product strategy and roadmap planning
• Market research and competitive analysis
• Team collaboration and cross-functional leadership
• Customer experience optimization
• Data-driven decision making

Her goal is to inspire and help customers create the look they want while ensuring sustainable and ethical business practices.`,
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
                    About {details.name.split(' ')[0]}
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