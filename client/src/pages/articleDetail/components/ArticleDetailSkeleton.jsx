import React from "react";
import { BiImageAlt } from "react-icons/bi";

const ArticleDetailSkeleton = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="h-6 w-64 bg-green-200 rounded mb-6 mx-4"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Skeleton */}
        <article className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200 animate-pulse">
          {/* Featured Image Skeleton */}
          <div className="relative w-full aspect-[2/1] bg-green-100 flex justify-center items-center border-b-4 border-orange-200">
            <BiImageAlt className="text-6xl text-green-300" />
          </div>
          
          {/* Title Area Skeleton */}
          <div className="p-6 bg-gradient-to-t from-green-50 to-transparent">
            <div className="h-8 bg-green-200 rounded-lg w-3/4 mb-4"></div>
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-green-200 rounded-full"></div>
              <div className="h-6 w-24 bg-green-200 rounded-full"></div>
            </div>
          </div>
          
          {/* Content Skeleton */}
          <div className="p-6 md:p-8">
            <div className="space-y-4">
              <div className="h-4 bg-green-100 rounded w-full"></div>
              <div className="h-4 bg-green-100 rounded w-full"></div>
              <div className="h-4 bg-green-100 rounded w-5/6"></div>
              <div className="h-4 bg-green-100 rounded w-full"></div>
              <div className="h-4 bg-green-100 rounded w-3/4"></div>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-green-50">
              <div className="h-5 w-40 bg-green-200 rounded mb-4"></div>
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-green-200 rounded-full"></div>
                <div className="h-8 w-8 bg-green-200 rounded-full"></div>
                <div className="h-8 w-8 bg-green-200 rounded-full"></div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t-2 border-green-50">
              <div className="h-6 w-32 bg-green-200 rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-20 bg-green-50 rounded-lg border border-green-100"></div>
                <div className="h-20 bg-green-50 rounded-lg border border-green-100"></div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Sidebar Skeleton */}
        <div className="lg:w-1/3 space-y-8">
          {/* Suggested Posts Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
            <div className="h-6 w-32 bg-orange-200 rounded-lg mb-6"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-16 h-16 rounded-lg bg-orange-100 flex-shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-green-100 rounded w-full"></div>
                    <div className="h-3 bg-green-100 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="h-6 w-16 bg-orange-200 rounded-lg my-6"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-6 bg-orange-100 rounded-full w-16"></div>
              ))}
            </div>
          </div>
          
          {/* Author Box Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
            <div className="h-6 w-40 bg-green-200 rounded-lg mb-6"></div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-green-100"></div>
              <div className="space-y-2">
                <div className="h-4 bg-green-200 rounded w-24"></div>
                <div className="h-3 bg-green-100 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailSkeleton;