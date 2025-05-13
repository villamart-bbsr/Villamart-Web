import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      name: "Blinkit",
      logo: "/images/blinkit.png",
      description: "Delivering fresh fruits and vegetables at your doorstep"
    },
    {
      name: "Swiggy Instamart",
      logo: "/images/Instamartlogo.webp",
      description: "Your one-stop shop for groceries and essentials"
    },
    {
      name: "Reliance Fresh",
      logo: "/images/reliance-fresh.png",
      description: "A trusted name in retail, bringing you the best produce"
    }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const hexSize = 30;
  const hexPoints = [
    [0, -hexSize],
    [hexSize * 0.866, -hexSize * 0.5],
    [hexSize * 0.866, hexSize * 0.5],
    [0, hexSize],
    [-hexSize * 0.866, hexSize * 0.5],
    [-hexSize * 0.866, -hexSize * 0.5]
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200 z-0" />

      {/* Animated wave layers */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full"
            style={{
              height: "200px",
              bottom: `${i * 100 - 250}px`,
              backgroundColor: `rgba(74, 222, 128, ${0.05 + i * 0.02})`,
              borderRadius: "50% 50% 0 0",
              transform: "scaleX(1.5)"
            }}
            animate={controls}
          />
        ))}
      </div>

      {/* Hex Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(20)].map((_, row) => (
          <div
            key={`row-${row}`}
            className="flex"
            style={{ marginTop: row % 2 ? `-${hexSize}px` : "0" }}
          >
            {[...Array(20)].map((_, col) => (
              <div
                key={`${row}-${col}`}
                className="relative"
                style={{
                  width: `${hexSize * 1.732}px`,
                  height: `${hexSize * 2}px`
                }}
              >
                <svg
                  width={hexSize * 2}
                  height={hexSize * 2}
                  viewBox={`${-hexSize} ${-hexSize} ${hexSize * 2} ${hexSize * 2}`}
                >
                  <polygon
                    points={hexPoints}
                    fill="none"
                    stroke="#4F7942"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-green-600 text-5xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              🌿
            </motion.div>
            <motion.h2
              className="text-4xl font-bold text-green-800 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our Trusted Partners
            </motion.h2>
            <motion.div
              className="h-1 bg-green-500 mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <motion.p
            className="mt-6 text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            We're proud to collaborate with these exceptional organizations that
            share our vision for sustainable, community-focused agriculture.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <div className="absolute h-12 w-full bottom-0 bg-amber-700/10 rounded-b-lg overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-amber-800/20 rounded-full"
                    style={{
                      width: `${8 + Math.random() * 15}px`,
                      height: `${4 + Math.random() * 8}px`,
                      left: `${i * 5}%`,
                      bottom: `${Math.random() * 8}px`
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="bg-white rounded-lg shadow-xl h-full overflow-hidden cursor-pointer relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoverIndex === index ? 1 : 0 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6"
                      style={{
                        top: `${i * 12}%`,
                        right: `${i % 2 ? 0 : 4}px`
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: hoverIndex === index ? 1 : 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="fill-green-600 w-full h-full"
                      >
                        <path d="M12,3.1L6.1,8.6C7.3,9.7,8,11.2,8,13c0,0.7-0.1,1.3-0.3,1.9L12,19.5l4.3-4.6C16.1,14.3,16,13.7,16,13c0-1.8,0.7-3.3,1.9-4.4L12,3.1z" />
                        <path
                          className="fill-green-800"
                          d="M12,12c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,12,12,12z"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="h-36 flex items-center justify-center p-4 border-b border-green-100 relative">
                  <motion.div
                    className="absolute inset-0 rounded-t-lg"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(255,255,255,0) 70%)"
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoverIndex === index ? 1 : 0,
                      scale: hoverIndex === index ? 1.2 : 0.8
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-28 w-auto object-contain"
                    style={{ minWidth: "160px" }}
                    initial={{ filter: "grayscale(0%)" }}
                    animate={{
                      scale: hoverIndex === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-4 text-xl"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: hoverIndex === index ? 0 : 10,
                      opacity: hoverIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === 0 ? "🌱" : index === 1 ? "🌿" : "🍃"}
                  </motion.div>
                </div>

                <div className="p-6 bg-gradient-to-b from-white to-green-50">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <svg viewBox="0 0 100 20" width="100%" height="20">
                  <motion.path
                    d="M50,0 L50,5 M50,5 C50,5 40,5 30,15 M50,5 C50,5 60,5 70,15 M40,5 C40,5 30,5 20,10 M60,5 C60,5 70,5 80,10"
                    stroke="#4F7942"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-lg -rotate-2"
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.4 }}
            />
            <a href="/contact" className="relative px-8 py-3 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors z-10 cursor-pointer">
              Become Our Partner
            </a>
          </div>
          <div className="mt-4 text-gray-600">
            Join our ecosystem of agricultural innovation
          </div>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 Z" fill="#4F7942" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,100 L100,0 L100,100 Z" fill="#4F7942" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute right-10 top-20 text-5xl opacity-20 pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
      >
        🚜
      </motion.div>
      <motion.div
        className="absolute left-10 bottom-20 text-4xl opacity-20 pointer-events-none"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        🌾
      </motion.div>
    </section>
  );
};

export default Partners;