import React, { useState, useEffect } from "react";

const teamMembers = [
	{
		name: "Guy Hawkins",
		role: "Creative Director",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
		quote:
			"Together, we challenge ourselves for a better tomorrow by meaningful designs that help live our best life and maintain lasting relevance",
	},
	{
		name: "Jenny Wilson",
		role: "Design Lead",
		image:
			"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
		quote:
			"Contemporary design and well-made products are things that we think everybody should be able to have. It's the reason we do what we do",
	},
	{
		name: "Bessie Cooper",
		role: "Product Manager",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
		quote:
			"Our collection is ever-evolving. Yet, it remains consistently relatable and accessible. Our purpose is to inspire and help create the look you want.",
	},
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

const Card = ({ member, isHovered, setHovered, index }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<div
			className={`flex-shrink-0 w-96 transition-all duration-700 ease-out relative ${
				isHovered
					? "z-50 scale-105 -translate-y-6 rotate-1"
					: "z-10 scale-100 hover:scale-102"
			}`}
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			onMouseMove={handleMouseMove}
			style={{
				transform: isHovered
					? `scale(1.08) translateY(-24px) rotateX(5deg) rotateY(${
							(mousePosition.x - 192) * 0.02
					  }deg)`
					: "scale(1)",
				transformOrigin: "center center",
			}}
		>
			<div className="relative mx-4">
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

				<div className="bg-white/95 backdrop-blur-sm text-green-900 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer z-50">
					{/* Dynamic hover glow with mouse following */}
					<div
						className={`absolute inset-0 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl ${
							isHovered ? "animate-pulse" : ""
						}`}
						style={{
							background: isHovered
								? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)`
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
					<div className="relative overflow-hidden">
						<img
							src={member.image}
							alt={member.name}
							className={`w-full h-80 object-cover transition-all duration-700 ${
								isHovered
									? "scale-125 brightness-110 contrast-110 saturate-125"
									: "group-hover:scale-110"
							}`}
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
					<div className="p-8 relative">
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
				</div>
			</div>
		</div>
	);
};

const partners = [
	{
		name: "Acme Corp",
		logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	},
	{
		name: "Globex",
		logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
	},
	{
		name: "Initech",
		logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
	},
	{
		name: "Umbrella",
		logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
	},
	{
		name: "Wayne Enterprises",
		logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
	},
	{
		name: "Stark Industries",
		logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
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
                    animation: scroll-partners 12s linear infinite;
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

	// Determine if any card is hovered
	const isPaused = hovered !== null;

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