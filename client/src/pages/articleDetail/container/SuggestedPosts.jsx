import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images, stables } from "../../../constants";

const SuggestedPosts = ({ className, header, posts = [], tags = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-xl shadow-xl p-6 border-2 border-green-600 ${className}`}
    >
      {/* Header */}
      <h2 className="font-bold text-xl text-green-800 pb-3 border-b-2 border-orange-400 mb-6">
        {header}
      </h2>
      
      {/* Posts List */}
      <div className="space-y-5">
        {posts && posts.slice(0, 5).map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${item.slug}`} className="block">
              <div className="flex gap-4 items-start group-hover:bg-green-50 p-3 rounded-lg transition-all duration-300">
                {/* Post Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-orange-400 shadow-md transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      item?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
                        : images.samplePostImage
                    }
                    alt={item.title}
                  />
                </div>
                
                {/* Post Details */}
                <div>
                  <h3 className="font-medium text-green-800 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        
        {/* View All Link */}
        {posts && posts.length > 5 && (
          <Link 
            to="/blog" 
            className="block text-center mt-4 text-green-700 hover:text-orange-600 font-medium underline transition-colors"
          >
            View all articles
          </Link>
        )}
      </div>
      
      {/* Tags Section */}
      <div className="mt-8">
        <h2 className="font-bold text-xl text-green-800 pb-3 border-b-2 border-orange-400 mb-6">
          Tags
        </h2>
        
        {tags.length === 0 ? (
          <p className="text-green-600 text-sm italic">
            There are no tags for this post
          </p>
        ) : (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={`/blog?tag=${item}`}
                  className="inline-block rounded-md px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-medium text-white text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SuggestedPosts;