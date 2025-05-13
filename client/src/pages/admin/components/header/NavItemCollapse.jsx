import React, { useEffect, useState } from "react";

const NavItemCollapse = ({
  title,
  children,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (activeNavName !== name) {
      setIsChecked(false);
    }
  }, [activeNavName, name]);

  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-200 ${
      name === activeNavName ? "bg-green-700" : ""
    }`}>
      <div 
        className={`flex items-center gap-x-3 py-3 px-4 cursor-pointer ${
          name === activeNavName
            ? "font-bold text-white"
            : "font-medium text-gray-200 hover:bg-green-700"
        }`}
        onClick={() => {
          setActiveNavName(name);
          setIsChecked(!isChecked);
        }}
      >
        <span className={name === activeNavName ? "text-orange-300" : "text-orange-300"}>
          {icon}
        </span>
        {title}
        <svg 
          className={`ml-auto w-5 h-5 transition-transform ${isChecked || name === activeNavName ? "rotate-180" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isChecked || name === activeNavName ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="py-2 text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavItemCollapse;