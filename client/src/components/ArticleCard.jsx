import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaSeedling } from "react-icons/fa";

import { images, stables } from "../constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(54,_83,_20,_0.15)_0px_9px_30px] border border-amber-200 hover:shadow-[rgba(54,_83,_20,_0.25)_0px_12px_35px] transition-shadow duration-300 ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden">
          <img
            src={
              post.photo
                ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
                : images.samplePostImage
            }
            alt="title"
            className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-amber-100 bg-opacity-80 rounded-full px-2 py-1 text-xs font-medium text-green-800">
            {post.caption}
          </div>
        </div>
      </Link>
      <div className="p-5 bg-amber-50">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto font-bold text-xl text-green-800 md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <p className="text-green-700 mt-3 text-sm md:text-lg">
            {post.caption}
          </p>
        </Link>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <div className="relative">
              <img
                src={
                  post.user.avatar
                    ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                    : images.userImage
                }
                alt="post profile"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-amber-300"
              />
              {post.user.verified && (
                <div className="absolute -bottom-1 -right-1 bg-amber-50 rounded-full p-1">
                  <FaSeedling className="w-3 h-3 text-green-600" />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold italic text-green-800 text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    post.user.verified ? "bg-green-600" : "bg-amber-600"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-green-600" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-amber-600" />
                  )}
                </span>
                <span className="italic text-green-700 text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Not Verified"} 
                </span>
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-2 py-1 rounded-lg">
            <span className="font-bold text-green-700 italic text-sm md:text-base">
              {new Date(post.createdAt).getDate()}{" "}
              {new Date(post.createdAt).toLocaleString("default", {
                month: "long",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;