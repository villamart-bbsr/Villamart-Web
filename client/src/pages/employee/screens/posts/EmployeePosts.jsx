import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { createPost, getAllPosts } from "../../../../services/index/posts";
import DataTable from "../../../admin/components/DataTable";
import { images } from "../../../../constants";
import { stables } from "../../../../constants";
import { FaPlus } from "react-icons/fa";

const EmployeePosts = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: postsData, isLoading, isFetching } = useQuery({
    queryFn: () => {
      return getAllPosts({ searchKeyword, page: currentPage });
    },
    queryKey: ["posts", searchKeyword, currentPage],
  });

  const { mutate: mutateCreatePost, isLoading: isLoadingCreatePost } = useMutation({
    mutationFn: ({ token }) => {
      return createPost({
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Post is created, edit that now!");
      navigate(`/employee/posts/manage/edit/${data.slug}`);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleCreateNewPost = () => {
    mutateCreatePost({ token: userState.userInfo.token });
  };

  const searchKeywordHandler = (e) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Manage Posts</h1>
        <button
          disabled={isLoadingCreatePost}
          onClick={handleCreateNewPost}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          <FaPlus className="text-sm" />
          <span>{isLoadingCreatePost ? "Creating..." : "Create New Post"}</span>
        </button>
      </div>

      <DataTable
        pageTitle="Manage Posts"
        dataListName="Posts"
        searchInputPlaceHolder="Post's title..."
        searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
        searchKeywordOnChangeHandler={searchKeywordHandler}
        searchKeyword={searchKeyword}
        tableHeaderTitleList={[
          "Author",
          "Title",
          "Category",
          "Date",
          "Actions",
        ]}
        isLoading={isLoading}
        isFetching={isFetching}
        data={postsData?.data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        headers={postsData?.headers}
        userState={userState}
      >
        {postsData?.data.map((post) => (
          <tr key={post._id} className="hover:bg-green-50">
            <td className="px-5 py-5 text-sm bg-white border-b border-green-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="relative block">
                    <img
                      src={
                        post?.user?.avatar
                          ? stables.UPLOAD_FOLDER_BASE_URL + post?.user?.avatar
                          : images.userImage
                      }
                      alt={post?.user?.name}
                      className="mx-auto object-cover rounded-full w-10 aspect-square border-2 border-green-300"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-medium whitespace-no-wrap">
                    {post?.user?.name}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-green-200">
              <p className="text-gray-700 whitespace-no-wrap">{post?.title}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-green-200">
              <div className="flex gap-x-2">
                {post?.categories.map((category) => (
                  <span
                    key={category._id}
                    className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-green-200">
              <p className="text-gray-700 whitespace-no-wrap">
                {new Date(post?.createdAt).toLocaleDateString()}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-green-200">
              <Link
                to={`/employee/posts/manage/edit/${post?.slug}`}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </DataTable>
    </div>
  );
};

export default EmployeePosts; 