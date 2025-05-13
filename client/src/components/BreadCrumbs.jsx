import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap bg-amber-50 px-3 rounded-lg border border-amber-200 shadow-sm mb-4">
      <Link 
        to="/" 
        className="flex items-center text-green-700 hover:text-green-900 transition-colors duration-300 text-sm font-medium"
      >
        <FaHome className="mr-2" />
        <span>Home</span>
      </Link>
      
      {data.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center"
        >
          <FaChevronRight className="mx-2 text-amber-500" />
          
          {index !== data.length - 1 ? (
            <Link 
              to={item.link}
              className="text-green-700 hover:text-green-900 transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-amber-700 font-semibold text-sm">
              {item.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;