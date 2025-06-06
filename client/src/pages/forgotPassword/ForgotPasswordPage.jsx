import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import MainLayout from "../../components/MainLayout";
import { requestPasswordReset } from "../../services/index/users";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Request Password Reset
  const { mutate: requestReset, isLoading: isRequesting } = useMutation({
    mutationFn: (email) => requestPasswordReset(email),
    onSuccess: () => {
      toast.success("Password reset link sent to your email");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    requestReset(email);
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/login");
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
        
        .animate-slide-in-right {
          animation: slideInFromRight 0.6s ease-out;
        }
      `}</style>

      <section className={`w-full min-h-screen bg-[#F0FDF4] flex items-center justify-center p-4 page-transition ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl animate-slide-in-right">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔑</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-[#16A34A] mb-2">
            Reset Password
          </h1>
          
          <p className="text-center text-[#15803D] mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-[#16A34A] font-medium text-sm block mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="placeholder:text-[#86EFAC] text-[#15803D] rounded-lg px-4 py-2 font-medium block w-full outline-none border-2 border-[#86EFAC] transition-all duration-300 focus:ring-4 focus:ring-[#86EFAC]/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86EFAC]">
                  📧
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isRequesting || !email}
              className="w-full bg-[#22C55E] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#16A34A] focus:outline-none focus:ring-4 focus:ring-[#86EFAC]/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isRequesting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Reset Link...</span>
                </div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={handleBackToLogin}
              className="text-[#16A34A] hover:text-[#15803D] font-medium text-sm transition-colors duration-300"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ForgotPasswordPage; 