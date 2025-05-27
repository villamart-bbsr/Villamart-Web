import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { createPost } from "../../../../services/index/posts";
import { useNavigate } from "react-router-dom";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Editor from "../../../../components/editor/Editor";
import MultiSelectTagDropdown from "../../../admin/components/select-dropdown/MultiSelectTagDropdown";
import {
  categoryToOption,
  filterCategories,
} from "../../../../utils/multiSelectTagUtils";
import { getAllCategories } from "../../../../services/index/postCategories";

const promiseOptions = async (inputValue) => {
  const { data: categoriesData } = await getAllCategories();
  return filterCategories(inputValue, categoriesData);
};

const CreateEmployeePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [photo, setPhoto] = useState(null);
  const [body, setBody] = useState(null);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [postSlug, setPostSlug] = useState("");
  const [caption, setCaption] = useState("");

  const {
    mutate: mutateCreatePost,
    isLoading: isLoadingCreatePost,
  } = useMutation({
    mutationFn: ({ formData, token }) => {
      return createPost({
        formData,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["posts"]);
      toast.success("Post is created");
      navigate(`/employee/posts/manage/edit/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleCreatePost = async () => {
    let formData = new FormData();

    if (photo) {
      formData.append("postPicture", photo);
    }

    formData.append(
      "document",
      JSON.stringify({ body, categories, title, tags, slug: postSlug, caption })
    );

    mutateCreatePost({
      formData,
      token: userState.userInfo.token,
    });
  };

  return (
    <div className="bg-green-50 text-black">
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1 bg-white p-6 rounded-xl shadow-md border border-green-200">
          <label htmlFor="postPicture" className="w-full cursor-pointer">
            {photo ? (
              <img
                src={URL.createObjectURL(photo)}
                alt={title}
                className="rounded-xl w-full border-2 border-green-300"
              />
            ) : (
              <div className="w-full min-h-[200px] bg-green-100 flex justify-center items-center rounded-xl border-2 border-green-300 border-dashed">
                <HiOutlineCamera className="w-10 h-auto text-green-600" />
              </div>
            )}
          </label>
          <input
            type="file"
            className="sr-only"
            id="postPicture"
            onChange={handleFileChange}
          />
          <div className="d-form-control w-full mt-4">
            <label className="d-label" htmlFor="title">
              <span className="d-label-text text-green-800 font-medium">Title</span>
            </label>
            <input
              id="title"
              value={title}
              className="d-input d-input-bordered border-green-300 !outline-green-500 text-xl font-medium font-roboto text-gray-800 p-3 rounded-lg w-full"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="d-form-control w-full mt-4">
            <label className="d-label" htmlFor="caption">
              <span className="d-label-text text-green-800 font-medium">Caption</span>
            </label>
            <input
              id="caption"
              value={caption}
              className="d-input d-input-bordered border-green-300 !outline-green-500 text-xl font-medium font-roboto text-gray-800 p-3 rounded-lg w-full"
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
            />
          </div>
          <div className="d-form-control w-full mt-4">
            <label className="d-label" htmlFor="slug">
              <span className="d-label-text text-green-800 font-medium">Slug</span>
            </label>
            <input
              id="slug"
              value={postSlug}
              className="d-input d-input-bordered border-green-300 !outline-green-500 text-xl font-medium font-roboto text-gray-800 p-3 rounded-lg w-full"
              onChange={(e) =>
                setPostSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())
              }
              placeholder="Post slug"
            />
          </div>
          <div className="mb-5 mt-4">
            <label className="d-label">
              <span className="d-label-text text-green-800 font-medium">Categories</span>
            </label>
            <div className="border border-green-300 rounded-lg">
              <MultiSelectTagDropdown
                loadOptions={promiseOptions}
                onChange={(newValue) =>
                  setCategories(newValue.map((item) => item.value))
                }
              />
            </div>
          </div>
          <div className="mb-5 mt-4">
            <label className="d-label">
              <span className="d-label-text text-green-800 font-medium">Tags</span>
            </label>
            <div className="border border-green-300 rounded-lg">
              <CreatableSelect
                isMulti
                onChange={(newValue) =>
                  setTags(newValue.map((item) => item.value))
                }
                className="relative z-20"
              />
            </div>
          </div>
          <div className="w-full mt-4 border border-green-300 rounded-lg overflow-hidden">
            <Editor
              editable={true}
              onDataChange={(data) => {
                setBody(data);
              }}
            />
          </div>
          <button
            disabled={isLoadingCreatePost}
            type="button"
            onClick={handleCreatePost}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-3 mt-6 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoadingCreatePost ? "Creating..." : "Create Post"}
          </button>
        </article>
      </section>
    </div>
  );
};

export default CreateEmployeePost; 