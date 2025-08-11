import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

// Example: Add social links to each member (customize per member as needed)
const teamMembers = [
	{
		name: "Dr Ramesh Chandra Biswal",
		role: "Founder & CEO",
		image: "/images/ceo-photo.jpeg", // Place your image in public/images/
		quote:
			"Together, we challenge ourselves for a better tomorrow by meaningful designs that help live our best life and maintain lasting relevance",
		twitter: "https://twitter.com/rchbiswal",
		facebook: "https://www.facebook.com/rchbiswal/",
		linkedin: "https://in.linkedin.com/in/dr-ramesh-chandra-biswal-7151b822",
	},
	{
		name: "Jenny Wilson",
		role: "Design Lead",
		image: "/images/jenny.jpg",
		quote:
			"Contemporary design and well-made products are things that we think everybody should be able to have. It's the reason we do what we do",
		twitter: "https://twitter.com/jennywilson",
		facebook: "https://facebook.com/jennywilson",
		linkedin: "https://linkedin.com/in/jennywilson",
	},
	{
		name: "Bessie Cooper",
		role: "Product Manager",
		image: "/images/bessie.jpg",
		quote:
			"Our collection is ever-evolving. Yet, it remains consistently relatable and accessible. Our purpose is to inspire and help create the look you want.",
		twitter: "https://twitter.com/bessiecooper",
		facebook: "https://facebook.com/bessiecooper",
		linkedin: "https://linkedin.com/in/bessiecooper",
	},
	// Add more team members here as needed...

	// {
	//   name: "Devon Lane",
	//   role: "UI/UX Designer",
	//   image:
	//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
	//   quote:
	//     "Innovation meets functionality in every design we create. We believe in crafting experiences that resonate with users on a deeper level.",
	// },
	// {
	//   name: "Marvin McKinney",
	//   role: "Frontend Developer",
	//   image:
	//     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
	//   quote:
	//     "Code is poetry in motion. Every line we write brings ideas to life and creates digital experiences that inspire and engage.",
	// },
	// {
	//   name: "Arlene McCoy",
	//   role: "Brand Strategist",
	//   image:
	//     "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
	//   quote:
	//     "Brand identity is the soul of every product. We craft stories that connect hearts and minds, creating lasting emotional bonds.",
	// },
	// {
	//   name: "Jerome Bell",
	//   role: "Technical Lead",
	//   image:
	//     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
	//   quote:
	//     "Technology should be invisible yet powerful. We build robust solutions that seamlessly integrate into people's daily lives.",
	// },
];

// Floating particles component
const FloatingParticles = () => {
	const particles = Array.from({ length: 20 }, (_, i) => (
		<div
			key={i}
			className="absolute w-2 h-2 bg-green-300/30 rounded-full"
			style={{
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
				animationDelay: `${Math.random() * 10}s`,
			}}
		/>
	));
	return <>{particles}</>;
};

// Geometric background shapes
const GeometricShapes = () => (
	<div className="absolute inset-0 overflow-hidden">
		<div
			className="absolute -top-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
			style={{ animation: "pulse 4s ease-in-out infinite" }}
		/>
		<div
			className="absolute top-1/4 -right-20 w-60 h-60 bg-green-300/10 rounded-full blur-2xl"
			style={{
				animation: "pulse 4s ease-in-out infinite",
				animationDelay: "2s",
			}}
		/>
		<div
			className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"
			style={{
				animation: "pulse 4s ease-in-out infinite",
				animationDelay: "4s",
			}}
		/>
		<div
			className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"
			style={{ animation: "spin 20s linear infinite" }}
		/>

		{/* Moving gradient orbs */}
		<div
			className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-transparent rounded-full"
			style={{ animation: "bounce 4s ease-in-out infinite" }}
		/>
		<div
			className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-l from-green-500/20 to-transparent rounded-full"
			style={{
				animation: "bounce 4s ease-in-out infinite",
				animationDelay: "3s",
			}}
		/>
	</div>
);

const TwitterIcon = () => (
	<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
		<path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.634 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.388 5.976 4.47 4.47 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z" />
	</svg>
);
const FacebookIcon = () => (
	<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
		<path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .592 23.405 0 22.675 0" />
	</svg>
);
const LinkedInIcon = () => (
	<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
		<path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
	</svg>
);

// Add a details object for each team member (expand as needed)
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

My work is driven by a mission to boost farmer incomes, build transparent supply chains, and bring traceable, quality produce to urban markets — combining grassroots insight with purposeful innovation and scalable execution.`,
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

Jenny believes everyone deserves access to well-made, thoughtfully designed products.`,
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

Her goal is to inspire and help customers create the look they want.`,
    },
    // Add more team members here as needed...
};

const Card = ({ member, isHovered, setHovered, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const details = teamDetails[member.name];

    // Navigate to user details page
    const openDetailsPage = () => {
        navigate(`/team/${encodeURIComponent(member.name)}`);
    };

    return (
        <>
            <div
                className={`flex-shrink-0 transition-all duration-700 ease-out relative ${
                    isHovered
                        ? "z-50 scale-105 -translate-y-6 rotate-1"
                        : "z-10 scale-100 hover:scale-102"
                }`}
                style={{
                    width: "384px", // fixed width (w-96 = 384px)
                    minWidth: "384px",
                    maxWidth: "384px",
                    height: "600px", // fixed height for all cards
                    minHeight: "600px",
                    maxHeight: "600px",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={handleMouseMove}
            >
                <div className="relative mx-4 h-full">
                    {/* Crazy hover effects */}
                    {isHovered && (
                        <>
                            {/* Outer glow extending beyond boundaries */}
                            <div className="absolute -inset-10 bg-gradient-radial from-green-400/30 via-green-500/10 to-transparent rounded-full blur-2xl animate-pulse z-10" />

                            {/* Explosion effect - extends beyond card */}
                            <div className="absolute -inset-5 animate-ping z-20">
                                <div className="w-full h-full bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-600/20 rounded-3xl blur-xl" />
                            </div>

                            {/* Extended rotating rings */}
                            <div
                                className="absolute -inset-4 z-30"
                                style={{ animation: "spin 2s linear infinite" }}
                            >
                                <div className="w-full h-full border-4 border-green-400/40 rounded-3xl" />
                            </div>
                            <div
                                className="absolute -inset-2 z-30"
                                style={{
                                    animation: "spin 3s linear infinite reverse",
                            }}
                            >
                                <div className="w-full h-full border-2 border-green-300/30 rounded-3xl" />
                            </div>

                            {/* Energy particles extending outside */}
                            <div className="absolute -inset-8 z-40">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
                                        style={{
                                            left: `${10 + i * 7}%`,
                                            top: `${15 + i * 6}%`,
                                            animationDelay: `${i * 0.08}s`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Lightning effects */}
                            <div className="absolute -inset-6 opacity-60 z-40">
                                <div className="absolute top-1/4 left-2 w-0.5 h-10 bg-green-400 animate-ping" />
                                <div
                                    className="absolute bottom-1/3 right-3 w-0.5 h-8 bg-green-400 animate-ping"
                                    style={{ animationDelay: "0.1s" }}
                                />
                                <div
                                    className="absolute top-1/2 -left-2 w-0.5 h-6 bg-green-400 animate-ping"
                                    style={{ animationDelay: "0.2s" }}
                                />
                                <div
                                    className="absolute bottom-1/4 -right-1 w-0.5 h-9 bg-green-400 animate-ping"
                                    style={{ animationDelay: "0.15s" }}
                                />
                            </div>
                        </>
                    )}

                    <div className="bg-white/95 backdrop-blur-sm text-green-900 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer z-50 h-full flex flex-col">
                        {/* Dynamic hover glow with mouse following */}
                        <div
                            className={`absolute inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl ${
                                isHovered ? "animate-pulse" : ""
                            }`}
                            style={{
                                background: isHovered
                                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.3) 0%, rgba(34,197,94,0.1) 50%, transparent 100%)`
                                    : undefined,
                            }}
                        />

                        {/* Shimmer effect */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
                                isHovered ? "translate-x-full" : "translate-x-[-200%]"
                            }`}
                        />

                        {/* Image */}
                        <div className="relative overflow-hidden" style={{ height: "320px" }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-700 ${
                                    isHovered
                                        ? "scale-125 brightness-110 contrast-110 saturate-125"
                                        : "group-hover:scale-110"
                                }`}
                                style={{ minHeight: "320px", maxHeight: "320px" }}
                            />
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
                                    isHovered
                                        ? "opacity-100"
                                        : "opacity-0 group-hover:opacity-100"
                                }`}
                            />

                            {/* Holographic overlay */}
                            {isHovered && (
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-green-600/20 animate-pulse" />
                            )}
                        </div>
                        {/* Info */}
                        <div className="p-8 relative flex-1 flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <h2
                                        className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                                            isHovered
                                                ? "text-green-600 text-2xl animate-pulse"
                                                : "text-green-900 group-hover:text-green-700"
                                        }`}
                                    >
                                        {member.name}
                                    </h2>
                                    <p
                                        className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                                            isHovered
                                                ? "text-green-500 text-sm tracking-wider animate-bounce"
                                                : "text-green-600"
                                        }`}
                                    >
                                        {member.role}
                                    </p>
                                </div>
                                <p
                                    className={`italic leading-relaxed transition-all duration-300 ${
                                        isHovered
                                            ? "text-green-600 text-base transform scale-102"
                                            : "text-green-800 group-hover:text-green-700"
                                    }`}
                                >
                                    "{member.quote}"
                                </p>
                            </div>
                            {/* Social icons and More Info in a single line */}
                            <div className="flex items-center gap-4 mt-6">
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:text-green-700 transition"
                                        aria-label="Twitter"
                                    >
                                        <TwitterIcon />
                                    </a>
                                )}
                                {member.facebook && (
                                    <a
                                        href={member.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:text-green-700 transition"
                                        aria-label="Facebook"
                                    >
                                        <FacebookIcon />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:text-green-700 transition"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedInIcon />
                                    </a>
                                )}
                                {/* More Info button for all team members */}
                                {details && (
                                    <button
                                        className="cursor-pointer ml-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition font-semibold"
                                        onClick={openDetailsPage}
                                        type="button"
                                    >
                                        More Info
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const partners = [
	{
		name: "Director of Horticulture",
		logo: "/images/partners/partner1.png", // Replace with actual image path
	},
	{
		name: "OFSDS",
		logo: "/images/partners/partner2.png", // Replace with actual image path
	},
	{
		name: "ORMAS",
		logo: "/images/partners/partner3.png", // Replace with actual image path
	},
	{
		name: "IRRI",
		logo: "/images/partners/partner4.png", // Replace with actual image path
	},
	{
		name: "Livelyhood Alternatives",
		logo: "/images/partners/partner5.png", // Replace with actual image path
	},
	{
		name: "Mahashakti Foundation",
		logo: "/images/partners/partner6.png", // Replace with actual image path
	},
	{
		name: "Swiggy Instamart",
		logo: "/images/partners/partner7.png", // Replace with actual image path
	},
	{
		name: "Blinkit",
		logo: "/images/partners/partner8.png", // Replace with actual image path
	},
	{
		name: "Reliance Fresh",
		logo: "/images/partners/partner9.png", // Replace with actual image path
	},
	{
		name: "Jio Mart",
		logo: "/images/partners/partner10.png", // Replace with actual image path
	},
	{
		name: "Big Basket",
		logo: "/images/partners/partner11.png", // Replace with actual image path
	},
];

function PartnersSection() {
	const [hovered, setHovered] = useState(null);

	return (
		<div className="relative z-50 mt-32"> {/* z-50 and relative for pop-out */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold text-green-100 mb-2 drop-shadow-lg" style={{ animation: "fadeInUp 1s ease-out" }}>
					Our Partners
				</h2>
				<p className="text-green-200 text-lg opacity-90" style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
					Trusted by industry leaders
				</p>
				<div
					className="h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto mt-6 rounded-full"
					style={{
						width: "0",
						animation: "widthExpand 1s ease-out 0.6s both",
					}}
				/>
			</div>
			<div className="overflow-visible max-w-7xl mx-auto"> {/* overflow-visible for pop-out */}
				<div
					className="flex gap-16 slider-partners flex-nowrap w-max relative"
					onMouseLeave={() => setHovered(null)}
				>
					{[...partners, ...partners].map((p, i) => (
						<div
							key={i}
							className={`flex flex-col items-center justify-center w-48 h-40 bg-white/90 rounded-2xl shadow-xl mx-2 transition-all duration-500 ${
								hovered === i
									? "scale-110 z-50 ring-4 ring-green-400/40"
									: "hover:scale-105"
							}`}
							onMouseEnter={() => setHovered(i)}
							style={{
								position: hovered === i ? "relative" : "static",
								boxShadow: hovered === i ? "0 8px 32px 0 rgba(34,197,94,0.25)" : undefined,
							}}
						>
							<img
								src={p.logo}
								alt={p.name}
								className={`h-16 mb-3 transition-all duration-500 ${
									hovered === i ? "drop-shadow-2xl" : ""
								}`}
								style={{ filter: hovered === i ? "brightness(1.2)" : "none" }}
							/>
							<span
								className={`font-semibold text-green-800 text-lg transition-all duration-300 ${
									hovered === i ? "text-green-600" : ""
								}`}
							>
								{p.name}
							</span>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.slider-partners {
					animation: scroll-partners 30s linear infinite;
				}
				.slider-partners:hover {
					animation-play-state: paused;
				}
				@keyframes scroll-partners {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</div>
	);
}

export default function OurTeam() {
    const [hovered, setHovered] = useState(null);
    const [anyModalOpen, setAnyModalOpen] = useState(false);

    // Determine if any card is hovered or any modal is open
    const isPaused = hovered !== null || anyModalOpen;

    // Pass setAnyModalOpen to Card so it can control modal state
    return (
        <div className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 min-h-screen text-white p-8 relative overflow-hidden">
			{/* Enhanced Background Elements */}
			<GeometricShapes />
			<FloatingParticles />

			{/* Animated background grid */}
			<div className="fixed inset-0 opacity-5">
				<div
					className="h-full w-full"
					style={{
						backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
						backgroundSize: "50px 50px",
						animation: "float 8s ease-in-out infinite",
					}}
				/>
			</div>

			{/* Heading with enhanced effects */}
			<div className="relative z-10 text-center mb-16">
				<h1
					className="text-6xl font-bold text-green-100 drop-shadow-2xl mb-4 hover:animate-pulse cursor-default"
					style={{ animation: "fadeInUp 1s ease-out" }}
				>
					Our Team
				</h1>
				<p
					className="text-green-200 text-lg opacity-90"
					style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}
				>
					Meet the creative minds behind our success
				</p>
				<div
					className="h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto mt-6 rounded-full"
					style={{
						width: "0",
						animation: "widthExpand 1s ease-out 0.6s both",
					}}
				/>

				{/* Floating sparkles around title */}
				<div className="absolute inset-0 pointer-events-none">
					{Array.from({ length: 6 }, (_, i) => (
						<div
							key={i}
							className="absolute w-1 h-1 bg-green-300 rounded-full"
							style={{
								left: `${30 + i * 8}%`,
								top: `${30 + (i % 2) * 20}%`,
								animation: `twinkle 2s ease-in-out infinite`,
								animationDelay: `${i * 0.5}s`,
							}}
						/>
					))}
				</div>
			</div>

			{/* Enhanced continuous slider */}
			<div className="relative z-10 max-w-7xl mx-auto overflow-visible">
				<div
					className={`flex gap-8 overflow-visible slider ${
						isPaused ? "paused" : ""
					}`}
				>
					{/* First set */}
					{teamMembers.map((m, i) => (
						<Card
							key={`first-${i}`}
							member={m}
							index={`first-${i}`}
							isHovered={hovered === `first-${i}`}
							setHovered={setHovered}
							setAnyModalOpen={setAnyModalOpen}
						/>
					))}
					{/* Second set */}
					{teamMembers.map((m, i) => (
						<Card
							key={`second-${i}`}
							member={m}
							index={`second-${i}`}
							isHovered={hovered === `second-${i}`}
							setHovered={setHovered}
							setAnyModalOpen={setAnyModalOpen}
						/>
					))}
					{/* Third set */}
					{teamMembers.map((m, i) => (
						<Card
							key={`third-${i}`}
							member={m}
							index={`third-${i}`}
							isHovered={hovered === `third-${i}`}
							setHovered={setHovered}
							setAnyModalOpen={setAnyModalOpen}
						/>
					))}
					{/* Fourth set */}
					{teamMembers.map((m, i) => (
						<Card
							key={`fourth-${i}`}
							member={m}
							index={`fourth-${i}`}
							isHovered={hovered === `fourth-${i}`}
							setHovered={setHovered}
							setAnyModalOpen={setAnyModalOpen}
						/>
					))}
				</div>
			</div>

			{/* Partners section */}
			<PartnersSection />

			{/* Enhanced CSS animations */}
			<style jsx>{`
				.slider {
					animation: scroll 10s linear infinite;
				}
				.slider.paused {
					animation-play-state: paused;
				}
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(180deg);
					}
				}

				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes widthExpand {
					from {
						width: 0;
					}
					to {
						width: 6rem;
					}
				}

				@keyframes twinkle {
					0%,
					100% {
						opacity: 0;
						transform: scale(0);
					}
					50% {
						opacity: 1;
						transform: scale(1);
					}
				}
			`}</style>
		</div>
	);
}