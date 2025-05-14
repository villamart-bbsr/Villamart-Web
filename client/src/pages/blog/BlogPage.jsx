import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../../services/index/posts";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCard from "../../components/ArticleCard";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import AsyncMultiSelectTagDropdown from "../../components/SelectAsyncPaginate";
import { getAllCategories } from "../../services/index/postCategories";
import { filterCategories } from "../../utils/multiSelectTagUtils";

let isFirstRun = true;

const promiseOptions = async (search, loadedOptions, { page }) => {
  const { data: categoriesData, headers } = await getAllCategories(
    search,
    page,
  );

  return {
    options: filterCategories(search, categoriesData),
    hasMore:
      parseInt(headers["x-totalpagecount"]) !==
      parseInt(headers["x-currentpage"]),
    additional: {
      page: page + 1,
    },
  };
};

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const currentPage = parseInt(searchParamsValue?.page) || 1;
  const searchKeyword = searchParamsValue?.search || "";

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage, 12, categories),
    queryKey: ["posts", categories],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, searchKeyword, refetch]);

  const handlePageChange = (page) => {
    // change the page's query string in the URL
    setSearchParams({ page, search: searchKeyword });
  };

  const handleSearch = ({ searchKeyword }) => {
    setSearchParams({ page: 1, search: searchKeyword });
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-green-900 to-green-800 py-6">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">VillaMart Blog</h1>
        <p className="text-center text-green-100 mb-0">Harvesting Knowledge, Growing Community</p>
      </div>
      
      <section className="container flex flex-col px-5 py-10 mx-auto bg-stone-50">
        <div className="flex flex-col mb-10 space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:gap-x-4">
          <div className="flex-grow">
            <Search 
              className="w-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 rounded-lg" 
              onSearchKeyword={handleSearch} 
            />
          </div>
          <div className="lg:w-1/3">
            <AsyncMultiSelectTagDropdown
              placeholder={"Filter by categories..."}
              loadOptions={promiseOptions}
              onChange={(selectedValues) => {
                setCategories(selectedValues.map((item) => item.value));
              }}
              className="border-green-600 focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap pb-10 md:gap-x-6 gap-y-6">
          {isLoading || isFetching ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-24px)] rounded-xl overflow-hidden shadow-lg bg-white"
              />
            ))
          ) : isError ? (
            <ErrorMessage 
              message="Couldn't fetch the posts data" 
              className="text-orange-600 font-semibold bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500 shadow-md w-full" 
            />
          ) : data?.data.length === 0 ? (
            <div className="w-full flex items-center justify-center p-12">
              <p className="text-orange-600 font-semibold bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 shadow-md">No Posts Found!</p>
            </div>
          ) : (
            data?.data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-24px)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border-b-4 border-green-600 hover:border-orange-500"
              />
            ))
          )}
        </div>
        
        {!isLoading && (
          <div className="flex justify-center mt-4">
            <div className="bg-white py-3 px-6 rounded-full shadow-md border border-green-200">
              <Pagination
                onPageChange={(page) => handlePageChange(page)}
                currentPage={currentPage}
                totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
              />
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default BlogPage;