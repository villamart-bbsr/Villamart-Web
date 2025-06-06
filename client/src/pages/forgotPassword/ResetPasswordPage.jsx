import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import MainLayout from "../../components/MainLayout";
import { resetPassword } from "../../services/index/users";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset Password Mutation
  const { mutate: resetPasswordMutation, isLoading: isResetting } = useMutation({
    mutationFn: (data) => resetPassword(data),
    onSuccess: () => {
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    resetPasswordMutation({ token, newPassword });
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
              <span className="text-2xl">🔒</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-[#16A34A] mb-2">
            Reset Your Password
          </h1>
          
          <p className="text-center text-[#15803D] mb-6">
            Please enter your new password below.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col w-full">
              <label htmlFor="newPassword" className="text-[#16A34A] font-medium text-sm block mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="placeholder:text-[#86EFAC] text-[#15803D] rounded-lg px-4 py-2 font-medium block w-full outline-none border-2 border-[#86EFAC] transition-all duration-300 focus:ring-4 focus:ring-[#86EFAC]/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86EFAC]">
                  🔒
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="confirmPassword" className="text-[#16A34A] font-medium text-sm block mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="placeholder:text-[#86EFAC] text-[#15803D] rounded-lg px-4 py-2 font-medium block w-full outline-none border-2 border-[#86EFAC] transition-all duration-300 focus:ring-4 focus:ring-[#86EFAC]/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86EFAC]">
                  🔒
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isResetting || !newPassword || !confirmPassword}
              className="w-full bg-[#22C55E] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#16A34A] focus:outline-none focus:ring-4 focus:ring-[#86EFAC]/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isResetting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Resetting Password...</span>
                </div>
              ) : (
                'Reset Password'
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

export default ResetPasswordPage; 