import { motion } from "framer-motion";

const VideoPopup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closePopup}
    >
      <motion.div
        className="relative bg-white p-4 rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-black font-bold text-lg"
          onClick={closePopup}
        >
          X
        </button>
        <div className="w-[80vw] max-w-[800px]">
          <video controls autoPlay muted className="w-full h-auto">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoPopup;