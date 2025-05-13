import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import ArticleCard from "../../../components/ArticleCard";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";
import Search from "../../../components/Search"; // Adjust the path if needed
import { getAllPosts } from "../../../services/index/posts";

const Articles = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, 1, 6),
    queryKey: ["posts", searchKeyword],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword.searchKeyword); // keyword is an object { searchKeyword }
  };

  return (
    <section className="flex flex-col container mx-auto px-5 py-16 bg-amber-50">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
        Latest Farming Insights
      </h2>

      {/* Search Input */}
      <div className="mb-10 max-w-xl w-full mx-auto">
        <Search onSearchKeyword={handleSearch} />
      </div>

      {/* Article Cards */}
      <div className="flex flex-wrap md:gap-x-5 gap-y-8 pb-10">
        {isLoading ? (
          [...Array(3)].map((_, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the posts data" />
        ) : data?.data.length > 0 ? (
          data.data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] border border-amber-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          ))
        ) : (
          <p className="text-center w-full text-gray-600 font-semibold">
            No articles found.
          </p>
        )}
      </div>

      {/* More Articles Button */}
      <Link
        to="/blog"
        className="mx-auto flex items-center gap-x-2 font-bold text-white bg-green-700 hover:bg-green-800 transition-colors duration-300 px-6 py-3 rounded-lg shadow-sm"
      >
        <span>More farming articles</span>
        <FaArrowRight className="w-3 h-3" />
      </Link>
    </section>
  );
};

export default Articles;
