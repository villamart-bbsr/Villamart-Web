import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { login } from "../../services/index/users";
import { userActions } from "../../store/reducers/userReducers";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate("/register");
    }, 300);
  };

  return (
    <MainLayout>
      <style jsx>{`
        .page-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .page-transition.transitioning {
          opacity: 0;
          transform: translateX(-20px);
        }
        
        .smooth-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .smooth-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 111, 0, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .smooth-link:hover::before {
          left: 100%;
        }
        
        .register-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .register-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 111, 0, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }
        
        .register-button:hover::after {
          width: 300px;
          height: 300px;
        }
        
        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 111, 0, 0.3);
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInFromLeft 0.6s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInFromRight 0.6s ease-out;
        }
      `}</style>
      
      <section className={`w-full h-screen bg-[#F0FDF4] flex flex-col lg:flex-row page-transition ${isTransitioning ? 'transitioning' : ''}`}>
        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10 shadow-2xl animate-slide-in-left h-full">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌱</span>
              </div>
            </div>

            <h1 className="font-roboto text-2xl sm:text-3xl lg:text-3xl font-bold text-center text-[#16A34A] mb-4 lg:mb-6 animate-bounce">
              Welcome Back
            </h1>
            
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-3 sm:space-y-4 lg:space-y-4">
              {/* Email Input */}
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-[#16A34A] font-medium text-sm sm:text-base block mb-1.5 sm:mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Enter a valid email",
                      },
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    placeholder="Enter email"
                    className={`placeholder:text-[#86EFAC] text-[#15803D] rounded-lg px-4 py-2.5 sm:py-3 lg:py-4 font-medium block w-full outline-none border-2 transition-all duration-300 focus:ring-4 focus:ring-[#86EFAC]/50 cursor-text ${
                      errors.email ? "border-red-500" : "border-[#86EFAC]"
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86EFAC]">
                    📧
                  </div>
                </div>
                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1 animate-pulse flex items-center gap-1">
                    <span>⚠️</span>
                    {errors.email?.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="flex flex-col w-full">
                <label htmlFor="password" className="text-[#16A34A] font-medium text-sm sm:text-base block mb-1.5 sm:mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password length must be at least 6 characters",
                      },
                    })}
                    placeholder="Enter password"
                    className={`placeholder:text-[#86EFAC] text-[#15803D] rounded-lg px-4 py-2.5 sm:py-3 lg:py-4 font-medium block w-full outline-none border-2 transition-all duration-300 focus:ring-4 focus:ring-[#86EFAC]/50 cursor-text ${
                      errors.password ? "border-red-500" : "border-[#86EFAC]"
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86EFAC]">
                    🔒
                  </div>
                </div>
                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1 animate-pulse flex items-center gap-1">
                    <span>⚠️</span>
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-xs sm:text-sm font-medium text-[#16A34A] hover:underline transition-all duration-300 hover:text-[#15803D] smooth-link cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="bg-[#22C55E] text-white font-semibold text-sm sm:text-base lg:text-lg py-2.5 sm:py-3 lg:py-4 px-6 w-full rounded-lg transition-all duration-300 hover:bg-[#16A34A] focus:outline-none focus:ring-4 focus:ring-[#86EFAC]/50 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Divider */}
              <div className="relative my-3 sm:my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 sm:px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-xs sm:text-sm text-[#15803D] mb-1 sm:mb-2">
                  Don't have an account?
                </p>
                <a 
                  href="/register"
                  onClick={handleRegisterClick}
                  className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-4 sm:px-6 border-2 border-[#86EFAC] text-[#16A34A] font-medium text-sm sm:text-base rounded-lg transition-all duration-300 hover:bg-[#86EFAC]/10 hover:border-[#16A34A] register-button cursor-pointer"
                >
                  Create Account
                </a>
              </div>
            </form>

            {/* Mobile Features */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 lg:hidden">
              <div className="text-center p-2 sm:p-3 bg-[#86EFAC]/10 rounded-lg">
                <div className="text-lg sm:text-xl mb-1">🚀</div>
                <p className="text-[10px] sm:text-xs text-[#15803D] font-medium">Fast & Secure</p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-[#86EFAC]/10 rounded-lg">
                <div className="text-lg sm:text-xl mb-1">🌾</div>
                <p className="text-[10px] sm:text-xs text-[#15803D] font-medium">Farm Management</p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-[#86EFAC]/10 rounded-lg">
                <div className="text-lg sm:text-xl mb-1">📊</div>
                <p className="text-[10px] sm:text-xs text-[#15803D] font-medium">Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Hidden on mobile */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden animate-slide-in-right">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110 blur-sm"
            style={{
              backgroundImage: "url('/api/placeholder/1200/1600?text=Farm+Login')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
         <div className="absolute inset-0 bg-[#86EFAC]/30 flex items-center justify-center">
  <div className="text-center p-10 bg-white/80 rounded-xl shadow-2xl max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
    <h2 className="text-3xl font-bold text-[#15803D] mb-6">
      Members Only Access
    </h2>
    <p className="text-[#16A34A] text-lg italic mb-6">
      Trusted Farmers. Private Insights. Shared Growth.
    </p>
    <div className="w-full h-1 bg-[#22C55E] mb-6 transform origin-left transition-transform duration-1000 hover:scale-x-110"></div>
    <p className="text-[#15803D] font-semibold">
      This section is reserved for registered members of our farming network.
      Please log in to continue.
    </p>
  </div>
</div>

        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
