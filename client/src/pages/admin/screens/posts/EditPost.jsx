import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { getSinglePost, updatePost } from "../../../../services/index/posts";
import { Link, useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../articleDetail/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Editor from "../../../../components/editor/Editor";
import MultiSelectTagDropdown from "../../components/select-dropdown/MultiSelectTagDropdown";
import {
  categoryToOption,
  filterCategories,
} from "../../../../utils/multiSelectTagUtils";
import { getAllCategories } from "../../../../services/index/postCategories";

const promiseOptions = async (inputValue) => {
  const { data: categoriesData } = await getAllCategories();
  return filterCategories(inputValue, categoriesData);
};

const EditPost = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [body, setBody] = useState(null);
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState(null);
  const [postSlug, setPostSlug] = useState(slug);
  const [caption, setCaption] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setInitialPhoto(data?.photo);
      setCategories(data.categories.map((item) => item._id));
      setTitle(data.title);
      setTags(data.tags);
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: mutateUpdatePostDetail,
    isLoading: isLoadingUpdatePostDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updatePost({
        updatedData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Post is updated");
      navigate(`/admin/posts/manage/edit/${data.slug}`, { replace: true });
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

  const handleUpdatePost = async () => {
    let updatedData = new FormData();

    if (!initialPhoto && photo) {
      updatedData.append("postPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );

      updatedData.append("postPicture", picture);
    }

    updatedData.append(
      "document",
      JSON.stringify({ body, categories, title, tags, slug: postSlug, caption })
    );

    mutateUpdatePostDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Post picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  let isPostDataLoaded = !isLoading && !isError;

  return (
    <div className="bg-green-50">
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1 bg-white p-6 rounded-xl shadow-md border border-green-200">
            <label htmlFor="postPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.title}
                  className="rounded-xl w-full border-2 border-green-300"
                />
              ) : initialPhoto ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                  alt={data?.title}
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
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-3 py-2 mt-4 hover:bg-red-600"
            >
              Delete Image
            </button>
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/blog?category=${category.name}`}
                  className="text-green-700 bg-green-100 px-2 py-1 rounded-md text-sm font-medium inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
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
              {isPostDataLoaded && (
                <div className="border border-green-300 rounded-lg">
                  <MultiSelectTagDropdown
                    loadOptions={promiseOptions}
                    defaultValue={data.categories.map(categoryToOption)}
                    onChange={(newValue) =>
                      setCategories(newValue.map((item) => item.value))
                    }
                  />
                </div>
              )}
            </div>
            <div className="mb-5 mt-4">
              <label className="d-label">
                <span className="d-label-text text-green-800 font-medium">Tags</span>
              </label>
              {isPostDataLoaded && (
                <div className="border border-green-300 rounded-lg">
                  <CreatableSelect
                    defaultValue={data.tags.map((tag) => ({
                      value: tag,
                      label: tag,
                    }))}
                    isMulti
                    onChange={(newValue) =>
                      setTags(newValue.map((item) => item.value))
                    }
                    className="relative z-20"
                  />
                </div>
              )}
            </div>
            <div className="w-full mt-4 border border-green-300 rounded-lg overflow-hidden">
              {isPostDataLoaded && (
                <Editor
                  content={data?.body}
                  editable={true}
                  onDataChange={(data) => {
                    setBody(data);
                  }}
                />
              )}
            </div>
            <button
              disabled={isLoadingUpdatePostDetail}
              type="button"
              onClick={handleUpdatePost}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-3 mt-6 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoadingUpdatePostDetail ? "Updating..." : "Update Post"}
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPost;