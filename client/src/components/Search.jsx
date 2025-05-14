import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ className, onSearchKeyword }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchKeyword({ searchKeyword });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-y-3 relative ${className}`}
    >
      <div className="relative group">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-700 transition-colors duration-200" />
        <input
          className="placeholder:font-medium font-medium text-gray-800 placeholder:text-gray-400 rounded-xl pl-12 pr-24 w-full py-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-green-100 shadow-md transition-all duration-200 hover:border-green-200 md:py-4"
          type="text"
          placeholder="Search for farming articles..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          aria-label="Search articles"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg px-5 py-2 transition-all duration-200 shadow-sm hover:shadow md:py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;