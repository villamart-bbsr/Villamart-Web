import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import MainLayout from "../../components/MainLayout";
import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducers/userReducers";
import { toast } from "react-hot-toast";
import { useMemo } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);

  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password },
        userId: userState.userInfo._id,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile updated successfully! ✨");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: useMemo(() => {
      return {
        name: profileIsLoading ? "" : profileData.name,
        email: profileIsLoading ? "" : profileData.email,
      };
    }, [profileData?.email, profileData?.name, profileIsLoading]),
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  if (profileIsLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-orange-50 py-12 px-4 text-black">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-200 p-8 animate-pulse">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="w-48 h-8 bg-gray-200 rounded-lg"></div>
                <div className="w-full space-y-4">
                  <div className="h-20 bg-gray-200 rounded-xl"></div>
                  <div className="h-20 bg-gray-200 rounded-xl"></div>
                  <div className="h-20 bg-gray-200 rounded-xl"></div>
                  <div className="h-14 bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-orange-50 py-12 px-4 text-black">
        <div className="container mx-auto max-w-2xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              My Profile
            </h1>
            <p className="text-gray-600 text-lg">Manage your account settings and preferences</p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-orange-200 p-8">
            
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="p-1 bg-orange-100 rounded-full">
                  <ProfilePicture avatar={profileData?.avatar} />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-1">
                {profileData?.name || "Your Name"}
              </h2>
              <p className="text-gray-500 text-sm">Update your profile information</p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
              
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="flex items-center text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      minLength: {
                        value: 1,
                        message: "Name must be at least 1 character",
                      },
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-4 bg-orange-50 border-2 rounded-xl font-medium placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-green-500 focus:bg-white ${
                      errors.name 
                        ? "border-red-300 bg-red-50 focus:border-red-500" 
                        : "border-orange-200 hover:border-orange-300"
                    }`}
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
                {errors.name?.message && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="flex items-center text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email address",
                      },
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-4 bg-orange-50 border-2 rounded-xl font-medium placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-green-500 focus:bg-white ${
                      errors.email 
                        ? "border-red-300 bg-red-50 focus:border-red-500" 
                        : "border-orange-200 hover:border-orange-300"
                    }`}
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email?.message && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="group">
                <label htmlFor="password" className="flex items-center text-gray-700 font-semibold mb-2">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  New Password
                  <span className="text-gray-400 text-sm ml-2 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    placeholder="Enter new password (leave blank to keep current)"
                    className={`w-full px-4 py-4 bg-orange-50 border-2 rounded-xl font-medium placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-green-500 focus:bg-white ${
                      errors.password 
                        ? "border-red-300 bg-red-50 focus:border-red-500" 
                        : "border-orange-200 hover:border-orange-300"
                    }`}
                  />
                </div>
                {errors.password?.message && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isValid || profileIsLoading || updateProfileIsLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center">
                  {updateProfileIsLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating Profile...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                      </svg>
                      Update Profile
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Your information is secure and will only be used to improve your experience.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;