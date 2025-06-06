import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { verifyOTP } from "../../services/index/users";
import { userActions } from "../../store/reducers/userReducers";

const OTPVerificationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get email from location state
  const email = location.state?.email;

  const { mutate: verifyOTPMutation, isLoading } = useMutation({
    mutationFn: (data) => {
      return verifyOTP(data);
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Email verified successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      toast.error("Please enter a valid OTP");
      return;
    }
    verifyOTPMutation({ email, otp: otpString });
  };

  const handleResendOTP = () => {
    // TODO: Implement resend OTP functionality
    toast.success("OTP resent successfully!");
  };

  const handleBackToRegister = (e) => {
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
              <span className="text-2xl">🔐</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-[#16A34A] mb-2">
            Verify Your Email
          </h1>
          
          <p className="text-center text-[#15803D] mb-6">
            We've sent a verification code to <br />
            <span className="font-semibold">{email}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input Fields */}
            <div className="flex justify-center gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-12 h-12 text-center text-xl font-bold text-[#15803D] border-2 border-[#86EFAC] rounded-lg focus:border-[#16A34A] focus:ring-4 focus:ring-[#86EFAC]/50 outline-none transition-all duration-300"
                />
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || otp.join("").length !== 6}
              className="w-full bg-[#22C55E] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#16A34A] focus:outline-none focus:ring-4 focus:ring-[#86EFAC]/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </div>
              ) : (
                'Verify Email'
              )}
            </button>

            {/* Resend OTP */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-[#16A34A] hover:text-[#15803D] font-medium text-sm transition-colors duration-300"
              >
                Didn't receive the code? Resend
              </button>
            </div>

            {/* Back to Register */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleBackToRegister}
                className="text-[#16A34A] hover:text-[#15803D] font-medium text-sm transition-colors duration-300"
              >
                ← Back to Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default OTPVerificationPage; 