import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// You can import this object from a shared file if you want
const teamDetails = {
    "Dr Ramesh Chandra Biswal": {
        name: "Dr Ramesh Chandra Biswal",
        education: "PhD, IIT Khargpur",
        designation: "Founder & CEO",
        image: "/images/ceo-photo.jpeg",
        linkedin: "https://in.linkedin.com/in/dr-ramesh-chandra-biswal-7151b822",
        facebook: "https://www.facebook.com/rchbiswal/",
        twitter: "https://x.com/rchbiswal",
        about: `I'm a Materials Scientist turned Agripreneur with 8+ years of experience designing sustainable business models at the intersection of agriculture, technology, and social impact.
As Founder of VillaMart, I built a PhyGital (Physical + Digital) supply chain platform connecting farmers directly to consumers — delivering fair pricing, reducing post-harvest losses, and ensuring year-round access to healthy, locally sourced produce.

Core strengths:
• Assessing and implementing technology solutions for farmers
• Rural value chain design and optimization
• FPO & SHG capacity building
• Retail & franchise model development
• Strategic partnerships with quick commerce platforms, retail chains, and institutions
• Deploying post-harvest technology & traceability tools

My work is driven by a mission to boost farmer incomes, build transparent supply chains, and bring traceable, quality produce to urban markets — combining grassroots insight with purposeful innovation and scalable execution.`
    },
    "Jenny Wilson": {
        name: "Jenny Wilson",
        education: "M.Des, NID Ahmedabad",
        designation: "Design Lead",
        image: "/images/jenny.jpg",
        linkedin: "https://linkedin.com/in/jennywilson",
        facebook: "https://facebook.com/jennywilson",
        twitter: "https://twitter.com/jennywilson",
        about: `Jenny is a passionate designer with a keen eye for contemporary aesthetics and usability. She leads the creative team at VillaMart, ensuring every product and experience is both beautiful and functional.

Strengths:
• UI/UX design
• Brand identity
• Product storytelling
• Team leadership

Jenny believes everyone deserves access to well-made, thoughtfully designed products.`
    },
    "Bessie Cooper": {
        name: "Bessie Cooper",
        education: "MBA, IIM Bangalore",
        designation: "Product Manager",
        image: "/images/bessie.jpg",
        linkedin: "https://linkedin.com/in/bessiecooper",
        facebook: "https://facebook.com/bessiecooper",
        twitter: "https://twitter.com/bessiecooper",
        about: `Bessie is a dynamic product manager with a knack for building relatable and accessible collections. She ensures VillaMart's offerings evolve with customer needs while staying true to the brand's mission.

Strengths:
• Product strategy
• Market research
• Team collaboration
• Customer experience

Her goal is to inspire and help customers create the look they want.`
    },
};

const TwitterIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.634 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.388 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function TeamMemberDetails() {
    const { name } = useParams();
    const navigate = useNavigate();

    // Decode URI and match with teamDetails
    const decodedName = decodeURIComponent(name);
    const details = teamDetails[decodedName];

    if (!details) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white px-4">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Team Member Not Found</h2>
                    <p className="text-white/80 mb-8">Sorry, we couldn't find the team member you're looking for.</p>
                    <button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-medium transition-all duration-200 transform hover:scale-105"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeftIcon />
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 px-4 py-8">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Header with back button */}
                <div className="mb-8">
                    <button
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeftIcon />
                        <span className="font-medium">Back to Team</span>
                    </button>
                </div>

                {/* Main card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
                    {/* Header section with gradient */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 pt-8 pb-4 text-white relative">
                        <div className="absolute top-6 right-6">
                            <button
                                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                                onClick={() => navigate(-1)}
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/10 p-1">
                                    <img
                                        src={details.image}
                                        alt={details.name}
                                        className="w-full h-full rounded-full object-cover bg-white"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full border-4 border-white"></div>
                            </div>
                            
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold mb-2">{details.name}</h1>
                                <p className="text-emerald-100 text-lg font-medium mb-2">{details.designation}</p>
                                {details.education && (
                                    <p className="text-emerald-200/80 text-sm bg-white/10 px-3 py-1 rounded-full inline-block">
                                        {details.education}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex justify-center md:justify-start gap-4 mt-6 pb-4">
                            {details.linkedin && (
                                <a
                                    href={details.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                            {details.twitter && (
                                <a
                                    href={details.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <TwitterIcon />
                                </a>
                            )}
                            {details.facebook && (
                                <a
                                    href={details.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 transform hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                                About
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                                {details.about}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}