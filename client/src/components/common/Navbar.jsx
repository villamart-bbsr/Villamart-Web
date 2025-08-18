import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Leaf, Sprout, Home, Building, Users, BookOpen, Phone, MessageSquare, Sun, Moon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/actions/user";
import { stables } from "../../constants";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  
  // State hooks
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Refs for dropdowns
  const companyMenuRef = useRef(null);
  const blogsMenuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const companyTimeoutRef = useRef(null);
  const blogsTimeoutRef = useRef(null);
  const profileTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setCompanyDropdownOpen(false);
      setBlogsDropdownOpen(false);
      setProfileDropdownOpen(false);
    }
  }, [mobileMenuOpen]);
  
  // Handle clicks outside dropdowns (desktop only)
  useEffect(() => {
    function handleClickOutside(event) {
      // Handle mobile menu click outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle mobile menu"]')) {
        setMobileMenuOpen(false);
      }

      if (!mobileMenuOpen) { // Only run when mobile menu is closed
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
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Toggle functions
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  // Mobile dropdown toggles with proper state management
  const toggleMobileCompanyDropdown = () => {
    setCompanyDropdownOpen(prev => {
      const newState = !prev;
      if (newState) {
        setBlogsDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
      return newState;
    });
  };
  
  const toggleMobileBlogsDropdown = () => {
    setBlogsDropdownOpen(prev => {
      const newState = !prev;
      if (newState) {
        setCompanyDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
      return newState;
    });
  };
  
  const toggleMobileProfileDropdown = () => {
    setProfileDropdownOpen(prev => {
      const newState = !prev;
      if (newState) {
        setCompanyDropdownOpen(false);
        setBlogsDropdownOpen(false);
      }
      return newState;
    });
  };
  
  // Desktop dropdown handlers with delay
  const handleCompanyMouseEnter = () => {
    clearTimeout(companyTimeoutRef.current);
    setCompanyDropdownOpen(true);
  };
  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => setCompanyDropdownOpen(false), 200);
  };
  
  const handleBlogsMouseEnter = () => {
    clearTimeout(blogsTimeoutRef.current);
    setBlogsDropdownOpen(true);
  };
  const handleBlogsMouseLeave = () => {
    blogsTimeoutRef.current = setTimeout(() => setBlogsDropdownOpen(false), 200);
  };
  
  const handleProfileMouseEnter = () => {
    clearTimeout(profileTimeoutRef.current);
    setProfileDropdownOpen(true);
  };
  const handleProfileMouseLeave = () => {
    profileTimeoutRef.current = setTimeout(() => setProfileDropdownOpen(false), 200);
  };
  
  // Logout handler
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  
  // Dynamic styles
  const navBgColor = darkMode 
    ? isScrolled ? "bg-green-900/95 backdrop-blur-sm" : "bg-green-900" 
    : isScrolled ? "bg-green-50/90 backdrop-blur-sm" : "bg-green-50";
  const textColor = darkMode ? "text-green-50" : "text-green-800";
  const hoverColor = darkMode ? "hover:bg-green-800" : "hover:bg-green-100";
  const dropdownBgColor = darkMode ? "bg-green-800" : "bg-white";
  const borderColor = darkMode ? "border-green-700" : "border-green-200";
  const buttonHoverEffect = "relative overflow-hidden group";
  
  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${navBgColor} ${textColor} shadow-lg transition-all duration-500 m-0 ${isScrolled ? "h-16" : "h-24"}`} >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center text-2xl font-bold transition-all duration-300 transform hover:scale-105 px-4 ">
                <img src="/images/villamart-logo.png" alt="" className={` transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'} mb-5 mt-5`}/>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md focus:outline-none ${hoverColor} transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                aria-label="Toggle mobile menu"
              >
                <div className="relative z-10">
                  {mobileMenuOpen ? 
                    <X size={24} className="transform rotate-90 transition-all duration-500 ease-in-out" /> : 
                    <Menu size={24} className="transform transition-all duration-500 ease-in-out" />
                  }
                </div>
                <div className="absolute inset-0 bg-green-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
            
            {/* Desktop nav */}
            <div className="hidden lg:flex lg:items-center lg:justify-center ">
              <a href="/" className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Home size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Home</span>
              </a>
              
              {/* Company Dropdown */}
              <div className="relative" ref={companyMenuRef} onMouseEnter={handleCompanyMouseEnter} onMouseLeave={handleCompanyMouseLeave}>
                <button className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                  <Building size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Company</span>
                  <ChevronDown size={20} className={`ml-1 transition-transform duration-300 ${companyDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {companyDropdownOpen && (
                  <div className={`absolute mt-1 w-48 rounded-md shadow-md ${dropdownBgColor} transform transition-all duration-300 origin-top z-50`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="/about" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>About</a>
                      <a href="/journey" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>Journey</a>
                      <a href="/media" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>Media</a>
                      <a href="/gallery" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>Gallery</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/franchise" className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Franchise Model</span>
              </a>
              
              {/* <a href="/team" className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Our Team</span>
              </a> */}
              
              {/* Blogs Dropdown */}
              {/* <div className="relative" ref={blogsMenuRef} onMouseEnter={handleBlogsMouseEnter} onMouseLeave={handleBlogsMouseLeave}>
                <button className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                  <BookOpen size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Blogs</span>
                  <ChevronDown size={20} className={`ml-1 transition-transform duration-300 ${blogsDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {blogsDropdownOpen && (
                  <div className={`absolute mt-1 w-48 rounded-md shadow-md ${dropdownBgColor} transform transition-all duration-300 origin-top z-50`}>
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="/blogPage" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>Blog Page</a>
                      <a href="/blog" className={`block px-4 py-3 text-base font-medium ${hoverColor} transition-all duration-200 hover:translate-x-1 hover:text-green-600 cursor-pointer`}>Read Blogs</a>
                    </div>
                  </div>
                )}
              </div> */}

              <a href="/blogs" className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <BookOpen size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Blogs</span>
              </a>
              
              <a href="/contact" className={`px-4 py-2 rounded-md flex items-center text-lg ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Phone size={20} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Contact Us</span>
              </a>
            </div>

            {/* Tab view nav (visible on sm and up, hidden on md and up, hidden on mobile) */}
            <div className="hidden sm:flex md:hidden items-center justify-between w-full px-2 overflow-x-auto scrollbar-hide">
              <a href="/" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Home size={20} />
                <span>Home</span>
              </a>
              <a href="/about" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Building size={20} />
                <span>About</span>
              </a>
              <a href="/journey" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Sprout size={20} />
                <span>Journey</span>
              </a>
              <a href="/media" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Leaf size={20} />
                <span>Media</span>
              </a>
              <a href="/gallery" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={20} />
                <span>Gallery</span>
              </a>
              <a href="/franchise" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={20} />
                <span>Franchise</span>
              </a>
              {/* <a href="/team" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Users size={20} />
                <span>Our Team</span>
              </a> */}
              <a href="/blogs" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <BookOpen size={20} />
                <span>Blogs</span>
              </a>
              <a href="/contact" className={`flex flex-col items-center px-2 py-1 mx-1 rounded-md text-xs ${hoverColor} ${buttonHoverEffect} transition duration-300 hover:text-green-600 cursor-pointer`}>
                <Phone size={20} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden ${navBgColor} border-t ${borderColor} overflow-hidden transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
              <Home size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Home
            </a>
            
            {/* Mobile Company */}
            <div>
              <button onClick={toggleMobileCompanyDropdown} className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center justify-between transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
                <div className="flex items-center">
                  <Building size={16} className="mr-2" />
                  Company
                </div>
                <ChevronDown size={16} className={`transition-transform duration-500 ${companyDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${companyDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/about" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`} onClick={() => { setCompanyDropdownOpen(false); setMobileMenuOpen(false); }}>About</a>
                <a href="/journey" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`} onClick={() => { setCompanyDropdownOpen(false); setMobileMenuOpen(false); }}>Journey</a>
                <a href="/media" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`} onClick={() => { setCompanyDropdownOpen(false); setMobileMenuOpen(false); }}>Media</a>
                <a href="/gallery" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`} onClick={() => { setCompanyDropdownOpen(false); setMobileMenuOpen(false); }}>Gallery</a>
              </div>
            </div>
            
            <a href="/franchise" className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
              <Users size={16} className="mr-2" />
              Franchise Model
            </a>
            
            {/* <a href="/team" className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
              <Users size={16} className="mr-2" />
              Our Team
            </a> */}
            
            {/* Mobile Blogs */}
            {/* <div>
              <button onClick={toggleMobileBlogsDropdown} className={`w-full text-left px-3 py-2 rounded-md ${hoverColor} flex items-center justify-between transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Blogs
                </div>
                <ChevronDown size={16} className={`transition-transform duration-500 ${blogsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${blogsDropdownOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/blogPage" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>Create Blog</a>
                <a href="/blog" className={`block px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>Read Blogs</a>
              </div>
            </div> */}

            <a href="/blogs" className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
              <BookOpen size={16} className="mr-2" />
              Blogs
            </a>
            
            <a href="/contact" className={`block px-3 py-2 rounded-md ${hoverColor} flex items-center transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer`}>
              <Phone size={16} className="mr-2" />
              Contact Us
            </a>

            {/* Mobile Auth Section */}
            {/* {userState?.userInfo ? (
              <div className="mt-2">
                <button 
                  onClick={toggleMobileProfileDropdown}
                  className={`w-full px-3 py-2 rounded-md flex items-center justify-between ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer relative overflow-hidden group`}
                >
                  <div className="flex items-center relative z-10">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-500 transition-transform duration-300 group-hover:scale-110">
                      {userState.userInfo.avatar ? (
                        <img
                          src={stables.UPLOAD_FOLDER_BASE_URL + userState.userInfo.avatar}
                          alt="profile"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-green-100 flex items-center justify-center">
                          <MessageSquare size={16} className="text-green-600 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      )}
                    </div>
                    <span className="ml-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full">Profile</span>
                  </div>
                  <ChevronDown size={16} className={`transition-all duration-500 ease-in-out ${profileDropdownOpen ? "rotate-180" : ""}`} />
                  <div className="absolute inset-0 bg-green-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <div className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${profileDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {userState?.userInfo?.admin && (
                    <button 
                      onClick={() => { navigate("/admin"); setMobileMenuOpen(false); }} 
                      className={`block w-full text-left px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer relative overflow-hidden group`}
                    >
                      <span className="relative z-10">Admin Dashboard</span>
                      <div className="absolute inset-0 bg-green-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  )}
                  {userState?.userInfo?.isEmployee && (
                    <button 
                      onClick={() => { navigate("/employee/posts/manage"); setMobileMenuOpen(false); }} 
                      className={`block w-full text-left px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer relative overflow-hidden group`}
                    >
                      <span className="relative z-10">Create Blog</span>
                      <div className="absolute inset-0 bg-green-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  )}
                  <button 
                    onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }} 
                    className={`block w-full text-left px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer relative overflow-hidden group`}
                  >
                    <span className="relative z-10">Profile Page</span>
                    <div className="absolute inset-0 bg-green-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button 
                    onClick={() => { logoutHandler(); setMobileMenuOpen(false); }} 
                    className={`block w-full text-left px-3 py-2 rounded-md ${hoverColor} transition-all duration-300 hover:translate-x-2 hover:text-green-600 cursor-pointer relative overflow-hidden group`}
                  >
                    <span className="relative z-10">Logout</span>
                    <div className="absolute inset-0 bg-green-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigate("/login")} 
                className={`w-full mt-2 px-3 py-2 rounded-md flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 text-white transition-all duration-300 hover:translate-x-2 cursor-pointer relative overflow-hidden group`}
              >
                <MessageSquare size={16} className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">Member Access</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            )} */}
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className={`transition-all duration-500 ${isScrolled ? "pt-16" : "pt-24"}`}></div>
    </>
  );
}