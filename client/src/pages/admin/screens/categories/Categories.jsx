import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useDataTable } from "../../../../hooks/useDataTable";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../../../../services/index/postCategories";
import DataTable from "../../components/DataTable";
import { useState } from "react";

const Categories = () => {
  const [categoryTitle, setCategoryTitle] = useState("");

  const { mutate: mutateCreateCategory, isLoading: isLoadingCreateCategory } =
    useMutation({
      mutationFn: ({ token, title }) => {
        return createCategory({
          token,
          title,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["categories"]);
        toast.success("Category is created");
        setCategoryTitle("");
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const {
    userState,
    currentPage,
    searchKeyword,
    data: categoriesData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: () => getAllCategories(searchKeyword, currentPage),
    dataQueryKey: "categories",
    deleteDataMessage: "Category is deleted",
    mutateDeleteFn: ({ slug, token }) => {
      return deleteCategory({
        slug,
        token,
      });
    },
  });

  const handleCreateCategory = () => {
    if (!categoryTitle.trim()) {
      toast.error("Category title cannot be empty");
      return;
    }
    
    mutateCreateCategory({
      token: userState.userInfo.token,
      title: categoryTitle,
    });
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 p-6 bg-white rounded-lg shadow-md border border-green-100">
        <h4 className="text-xl font-semibold text-green-800 border-l-4 border-orange-500 pl-3">
          Add New Category
        </h4>
        <div className="w-full mt-6 space-y-4">
          <div className="relative">
            <label htmlFor="categoryTitle" className="text-sm font-medium text-green-700 block mb-2">
              Category Title
            </label>
            <input
              id="categoryTitle"
              value={categoryTitle}
              className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition duration-200"
              onChange={(e) => setCategoryTitle(e.target.value)}
              placeholder="Enter category title"
            />
          </div>
          <button
            disabled={isLoadingCreateCategory || !categoryTitle.trim()}
            type="button"
            onClick={handleCreateCategory}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-3 transition duration-200 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center"
          >
            {isLoadingCreateCategory ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Creating...
              </>
            ) : (
              "Add Category"
            )}
          </button>
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-8">
        <DataTable
          pageTitle=""
          dataListName="Categories"
          searchInputPlaceHolder="Search by category title..."
          searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
          searchKeywordOnChangeHandler={searchKeywordHandler}
          searchKeyword={searchKeyword}
          tableHeaderTitleList={["Title", "Created At", "Actions"]}
          isLoading={isLoading}
          isFetching={isFetching}
          data={categoriesData?.data}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          headers={categoriesData?.headers}
          userState={userState}
        >
          {categoriesData?.data.map((category) => (
            <tr key={category._id} className="hover:bg-green-50 transition duration-150">
              <td className="px-5 py-4 text-sm bg-white border-b border-green-100">
                <div className="flex items-center">
                  <p className="text-gray-800 font-medium">{category.title}</p>
                </div>
              </td>
              <td className="px-5 py-4 text-sm bg-white border-b border-green-100">
                <p className="text-gray-600">
                  {new Date(category.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </td>
              <td className="px-5 py-4 text-sm bg-white border-b border-green-100">
                <div className="flex space-x-3">
                  <Link
                    to={`/admin/categories/manage/edit/${category?._id}`}
                    className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded font-medium text-sm transition duration-150"
                  >
                    Edit
                  </Link>
                  <button
                    disabled={isLoadingDeleteData}
                    type="button"
                    className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 rounded font-medium text-sm transition duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this category?")) {
                        deleteDataHandler({
                          slug: category?._id,
                          token: userState.userInfo.token,
                        });
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default Categories;