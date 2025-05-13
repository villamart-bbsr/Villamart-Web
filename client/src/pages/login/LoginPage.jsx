import React, { useEffect } from "react";
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

  return (
    <MainLayout>
      <section className="w-screen h-screen bg-[#F0F4F8] flex">
        {/* Login Form Section */}
        <div className="w-1/2 bg-white flex items-center justify-center p-12 relative z-10 shadow-2xl">
          <div className="w-full max-w-md">
            <h1 className="font-roboto text-4xl font-bold text-center text-[#FF6F00] mb-12 animate-bounce">
              Login
            </h1>
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-8">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="email"
                  className="text-[#4CAF50] font-semibold block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter a valid email",
                    },
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  placeholder="Enter email"
                  className={`placeholder:text-[#8BC34A] text-[#2E7D32] rounded-lg px-5 py-4 font-semibold block outline-none border-2 transition-all duration-300 focus:ring-4 focus:ring-[#4CAF50]/50 ${
                    errors.email ? "border-red-500" : "border-[#4CAF50]"
                  }`}
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1 animate-pulse">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="password"
                  className="text-[#4CAF50] font-semibold block mb-2"
                >
                  Password
                </label>
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
                  className={`placeholder:text-[#8BC34A] text-[#2E7D32] rounded-lg px-5 py-4 font-semibold block outline-none border-2 transition-all duration-300 focus:ring-4 focus:ring-[#4CAF50]/50 ${
                    errors.password ? "border-red-500" : "border-[#4CAF50]"
                  }`}
                />
                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1 animate-pulse">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <Link
                to="/forget-password"
                className="text-sm font-semibold text-[#FF6F00] hover:underline block text-right transition-all duration-300 hover:text-[#F57C00]"
              >
                Forgot password?
              </Link>
              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="bg-[#4CAF50] text-white font-bold text-lg py-4 px-8 w-full rounded-lg transition-all duration-300 hover:bg-[#45A049] focus:outline-none focus:ring-4 focus:ring-[#4CAF50]/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              <p className="text-sm font-semibold text-[#2E7D32] text-center">
                Do not have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-[#FF6F00] hover:underline transition-all duration-300 hover:text-[#F57C00]"
                >
                  Register now
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110 blur-sm"
            style={{
              backgroundImage: "url('/api/placeholder/1200/1600?text=Farm+Login')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-[#4CAF50]/30 flex items-center justify-center">
            <div className="text-center p-10 bg-white/80 rounded-xl shadow-2xl max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-[#2E7D32] mb-6">
                Welcome to Farmer's Portal
              </h2>
              <p className="text-[#4CAF50] text-lg italic mb-6">
                Cultivating Connections, Harvesting Success
              </p>
              <div className="w-full h-1 bg-[#FF6F00] mb-6"></div>
              <p className="text-[#2E7D32] font-semibold">
                Connecting farmers, empowering agriculture, growing together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;