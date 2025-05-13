import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const EnhancedImpact = () => {
  const impactRef = useRef(null);
  const isImpactInView = useInView(impactRef, { once: false, margin: '-100px' });

  // Track scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: impactRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress for background blob animation
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const blobOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);
  const blobTranslateX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const blobTranslateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Parallax effect for emojis
  const emojiTranslateY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const impactItems = [
    {
      title: 'Empowering Farmers',
      description:
        'Direct access to consumers allows farmers to sell their produce without middlemen, improving income and reducing exploitation. Tech-enabled procurement offers fair pricing and transparency.',
      emoji: '👨‍🌾',
      color: 'green',
    },
    {
      title: 'Reducing Food Waste',
      description:
        'Technologies like solar dryers, AI procurement, and smart storage reduce waste, optimize inventory, and ensure faster distribution to reduce spoilage.',
      emoji: '♻️',
      color: 'orange',
    },
    {
      title: 'Enhancing Food Safety',
      description:
        'Cool storage, Ozone cleaning, and freeze drying reduce chemicals and preserve freshness, promoting better health through safer produce.',
      emoji: '🛡️',
      color: 'green',
    },
    {
      title: 'Supporting Local Economies',
      description:
        'VillaMart empowers local SHGs, PGs, and FPOs with tech, while its franchise model drives local employment and economic growth.',
      emoji: '🏪',
      color: 'orange',
    },
    {
      title: 'Environmental Impact',
      description:
        'Battery-powered mobile markets, reduced food waste, and short supply chains help lower emissions and support sustainable agriculture.',
      emoji: '🌍',
      color: 'green',
    },
    {
      title: 'Creation of Self-Employment',
      description:
        'Franchising and tech operations create diverse self-employment opportunities, fostering inclusive economic development.',
      emoji: '💼',
      color: 'orange',
    },
  ];

  return (
    <motion.div
      ref={impactRef}
      initial="hidden"
      animate={isImpactInView ? 'visible' : 'hidden'}
      variants={staggerChildren}
      className="relative py-16"
    >
      {/* Background gradient decorative element */}
      <motion.div
        className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/30 to-green-100/30 blur-3xl -z-10"
        style={{
          scale: blobScale,
          opacity: blobOpacity,
          x: blobTranslateX,
          y: blobTranslateY,
        }}
      />

      {/* Section Heading */}
      <motion.div
        className="flex items-center justify-center mb-12"
        variants={fadeInUp}
      >
        <div className="flex items-center">
          <motion.div
            className="h-1 w-10 bg-orange-500 mr-4 rounded-full"
            initial={{ width: 0 }}
            animate={isImpactInView ? { width: '40px' } : { width: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-700"
            variants={fadeInUp}
          >
            Societal Impact
          </motion.h2>
        </div>
      </motion.div>

      {/* Grid of Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerChildren}>
        {impactItems.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden border-b-4 p-6 flex flex-col justify-between text-center transition-transform duration-300 hover:scale-[1.02] min-h-[300px]"
            style={{
              borderColor: item.color === 'green' ? '#22c55e' : '#f97316',
              background:
                item.color === 'green'
                  ? 'linear-gradient(to bottom right, #f0fdf4, #ffffff)'
                  : 'linear-gradient(to bottom right, #fff7ed, #ffffff)',
            }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`text-6xl mb-3 ${item.color === 'green' ? 'text-green-500' : 'text-orange-500'}`}
              style={{ y: emojiTranslateY }}
            >
              {item.emoji}
            </motion.div>
            <h3
              className={`text-xl font-bold mb-2 ${
                item.color === 'green' ? 'text-green-700' : 'text-orange-700'
              }`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EnhancedImpact;