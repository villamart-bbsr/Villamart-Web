import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Leaf, Sprout, Home, Building, Users, BookOpen, Phone, MessageSquare, Sun, Moon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/user";


export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const companyMenuRef = useRef(null);
  const blogsMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const companyTimeoutRef = useRef(null);
  const blogsTimeoutRef = useRef(null);
  const profileTimeoutRef = useRef(null);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (companyMenuRef.current && !companyMenuRef.current.contains(event.target)) {
        setCompanyDropdownOpen(false);
      }
      if (blogsMenuRef.current && !blogsMenuRef.current.contains(event.target)) {
        setBlogsDropdownOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  // Modified mobile dropdown toggles
  const toggleMobileCompanyDropdown = () => {
    setCompanyDropdownOpen(prev => !prev);
    setBlogsDropdownOpen(false);
    setProfileDropdownOpen(false);
  };
  
  const toggleMobileBlogsDropdown = () => {
    setBlogsDropdownOpen(prev => !prev);
    setCompanyDropdownOpen(false);
    setProfileDropdownOpen(false);
  };
  
  const toggleMobileProfileDropdown = () => {
    setProfileDropdownOpen(prev => !prev);
    setCompanyDropdownOpen(false);
    setBlogsDropdownOpen(false);
  };
  
  // Desktop dropdown handlers with delay
  const handleCompanyMouseEnter = () => {
    clearTimeout(companyTimeoutRef.current);
    setCompanyDropdownOpen(true);
  };
  
  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
    }, 200);
  };
  
  const handleBlogsMouseEnter = () => {
    clearTimeout(blogsTimeoutRef.current);
    setBlogsDropdownOpen(true);
  };
  
  const handleBlogsMouseLeave = () => {
    blogsTimeoutRef.current = setTimeout(() => {
      setBlogsDropdownOpen(false);
    }, 200);
  };
  
  const handleProfileMouseEnter = () => {
    clearTimeout(profileTimeoutRef.current);
    setProfileDropdownOpen(true);
  };
  
  const handleProfileMouseLeave = () => {
    profileTimeoutRef.current = setTimeout(() => {
      setProfileDropdownOpen(false);
    }, 200);
  };
  
  // Improved logout handler
  const logoutHandler = () => {
    dispatch(logout());
  };
  
  // Color scheme based on farming theme
  const navBgColor = darkMode 
    ? isScrolled ? "bg-green-900/95 backdrop-blur-sm" : "bg-green-900" 
    : isScrolled ? "bg-green-50/90 backdrop-blur-sm" : "bg-green-50";
  const textColor = darkMode ? "text-green-50" : "text-green-800";
  const hoverColor = darkMode ? "hover:bg-green-800" : "hover:bg-green-100";
  const dropdownBgColor = darkMode ? "bg-green-800" : "bg-white";
  const borderColor = darkMode ? "border-green-700" : "border-green-200";
  const buttonHoverEffect = "relative overflow-hidden group";
  
  // For debugging - visible in console
  console.log("User State:", userState);
  console.log("Is user logged in?", Boolean(userState?.userInfo));
  
  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${navBgColor} ${textColor} shadow-lg transition-all duration-500 ${isScrolled ? "h-16" : "h-20"}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left Side with animation */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center text-2xl font-bold transition-all duration-300 transform hover:scale-105">
                
              <img src="/images/villamart-logo.png" alt="" className="h-18"/>
              </a>
            </div>
            
            {/* Mobile menu button with animation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md focus:outline-none ${hoverColor} transition-all duration-300 cursor-pointer`}
              >
                {mobileMenuOpen ? 
                  <X size={24} className="transform rotate-90 transition-transform duration-300" /> : 
                  <Menu size={24} className="transform transition-transform duration-300" />
                }
              </button>
            </div>
            
            {/* Desktop Navigation - Center with animations */}
            <div className="hidden md:flex md:items-center md:justify-center flex-1 space-x-1">
              <a href="/" className={`px-3 py-2 rounded-md flex items-center ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Home size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Home</span>
              </a>
              
              {/* Company Dropdown with animations - Hover trigger on desktop */}
              <div 
                className="relative" 
                ref={companyMenuRef}
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                <button 
                  className={`px-3 py-2 rounded-md flex items-center ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}
                >
                  <Building size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Company</span>
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${companyDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {companyDropdownOpen && (
                  <div 
                    className={`absolute mt-1 w-48 rounded-md shadow-lg ${dropdownBgColor} ring-1 ring-black ring-opacity-5 transform transition-all duration-300 origin-top z-50`}
                    onMouseEnter={handleCompanyMouseEnter}
                    onMouseLeave={handleCompanyMouseLeave}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="/moreInfo" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">About</a>
                      <a href="/journey" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">Journey</a>
                      <a href="/media" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">Media</a>
                      <a href="/gallery" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">Gallery</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/franchise" className={`px-3 py-2 rounded-md flex items-center ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Franchise Model</span>
              </a>
              
              {/* Blogs Dropdown with animations - Hover trigger on desktop */}
              <div 
                className="relative" 
                ref={blogsMenuRef}
                onMouseEnter={handleBlogsMouseEnter}
                onMouseLeave={handleBlogsMouseLeave}
              >
                <button 
                  className={`px-3 py-2 rounded-md flex items-center ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}
                >
                  <BookOpen size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Blogs</span>
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${blogsDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {blogsDropdownOpen && (
                  <div 
                    className={`absolute mt-1 w-48 rounded-md shadow-lg ${dropdownBgColor} ring-1 ring-black ring-opacity-5 transform transition-all duration-300 origin-top z-50`}
                    onMouseEnter={handleBlogsMouseEnter}
                    onMouseLeave={handleBlogsMouseLeave}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="/blogPage" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">Blog Page</a>
                      <a href="/blog" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`} role="menuitem">Read Blogs</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/contact" className={`px-3 py-2 rounded-md flex items-center ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Phone size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Contact Us</span>
              </a>
            </div>
            
            {/* Right Side - Sign In Button/Account Dropdown & Dark Mode Toggle */}
            <div className="hidden md:flex md:items-center space-x-2">
              {/* Dark mode toggle with animation */}
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full focus:outline-none transition-all duration-500 hover:rotate-12 cursor-pointer"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-300 transition-all duration-500" />
                ) : (
                  <Moon size={20} className="text-gray-600 transition-all duration-500" />
                )}
              </button>
              
              {/* Sign In Button with animation OR Account Dropdown */}
              {userState?.userInfo ? (
                <div 
                  className="relative"
                  ref={profileMenuRef}
                  onMouseEnter={handleProfileMouseEnter}
                  onMouseLeave={handleProfileMouseLeave}
                >
                  <button 
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="ml-4 px-6 py-2 flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                  >
                    <MessageSquare size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="relative inline-block">
                      Account
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-300 inline-block ${profileDropdownOpen ? "rotate-180" : ""}`} 
                      />
                    </span>
                  </button>
                  
                  {profileDropdownOpen && (
                    <div 
                      className={`absolute right-0 mt-1 w-48 rounded-md shadow-lg ${dropdownBgColor} ring-1 ring-black ring-opacity-5 transform transition-all duration-300 origin-top z-50`}
                      onMouseEnter={handleProfileMouseEnter}
                      onMouseLeave={handleProfileMouseLeave}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {userState?.userInfo?.admin && (
                          <button
                            onClick={() => navigate("/admin")}
                            type="button"
                            className={`w-full text-left block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}
                            role="menuitem"
                          >
                            Admin Dashboard
                          </button>
                        )}
                        <button
                          onClick={() => navigate("/profile")}
                          type="button"
                          className={`w-full text-left block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}
                          role="menuitem"
                        >
                          Profile Page
                        </button>
                        <button
                          onClick={logoutHandler}
                          type="button"
                          className={`w-full text-left block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}
                          role="menuitem"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => navigate("/login")}
                  className="ml-4 px-6 py-2 flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  <MessageSquare size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative inline-block">
                    Sign In
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/40 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile menu with animation */}
        <div 
          className={`md:hidden ${navBgColor} border-t ${borderColor} overflow-hidden transition-all duration-500 ease-in-out transform 
          ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" 
              className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
            >
              <Home size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Home
            </a>
            
            {/* Mobile Company Section */}
            <div>
              <button 
                onClick={toggleMobileCompanyDropdown}
                className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center justify-between transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
              >
                <div className="flex items-center">
                  <Building size={16} className="mr-2" />
                  Company
                </div>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-500 ${companyDropdownOpen ? "rotate-180" : ""}`} 
                />
              </button>
              
              <div 
                className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
                ${companyDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <a href="/moreInfo" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  About
                </a>
                <a href="/journey" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  Journey
                </a>
                <a href="/media" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  Media
                </a>
                <a href="/gallery" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  Gallery
                </a>
              </div>
            </div>
            
            <a href="/franchise" 
              className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
            >
              <Users size={16} className="mr-2" />
              Franchise Model
            </a>
            
            {/* Mobile Blogs Section */}
            <div>
              <button 
                onClick={toggleMobileBlogsDropdown}
                className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center justify-between transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
              >
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Blogs
                </div>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-500 ${blogsDropdownOpen ? "rotate-180" : ""}`} 
                />
              </button>
              
              <div 
                className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
                ${blogsDropdownOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <a href="/blogPage" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  Create Blog
                </a>
                <a href="/blog" 
                  className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                >
                  Read Blogs
                </a>
              </div>
            </div>
            
            <a href="/contact" 
              className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
            >
              <Phone size={16} className="mr-2" />
              Contact Us
            </a>
            
            {/* Mobile Account/Sign In & Dark Mode Toggle */}
            <div className="pt-2 border-t border-gray-300 dark:border-gray-700">
              <button 
                onClick={toggleDarkMode} 
                className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 cursor-pointer`}
              >
                {darkMode ? (
                  <>
                    <Sun size={16} className="mr-2 text-yellow-300" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={16} className="mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
              
              {userState?.userInfo ? (
                <div>
                  <button 
                    onClick={toggleMobileProfileDropdown}
                    className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center justify-between transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                  >
                    <div className="flex items-center">
                      <MessageSquare size={16} className="mr-2" />
                      Account
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-500 ${profileDropdownOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  
                  <div 
                    className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
                    ${profileDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {userState?.userInfo?.admin && (
                      <button
                        onClick={() => navigate("/admin")}
                        type="button"
                        className={`w-full text-left block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                      >
                        Admin Dashboard
                      </button>
                    )}
                    <button
                      onClick={() => navigate("/profile")}
                      type="button"
                      className={`w-full text-left block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                    >
                      Profile Page
                    </button>
                    <button
                      onClick={logoutHandler}
                      type="button"
                      className={`w-full text-left block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => navigate("/login")}
                  className={`mt-2 w-full px-3 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer`}
                >
                  <MessageSquare size={16} className="mr-2" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Page content spacer */}
      <div className={`transition-all duration-500 ${isScrolled ? "pt-16" : "pt-20"}`}></div>
    </>
  );
}

// The logout action should be imported from your Redux actions file
// If you need to define it here for testing, use:
// const logout = () => {
//   return { type: "LOGOUT_USER" };
// };