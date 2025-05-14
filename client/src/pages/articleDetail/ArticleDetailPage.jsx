import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import BreadCrumbs from "../../components/BreadCrumbs";
import CommentsContainer from "../../components/comments/CommentsContainer";
import MainLayout from "../../components/MainLayout";
import SocialShareButtons from "../../components/SocialShareButtons";
import { images, stables } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getSinglePost } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/editor/Editor";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${data.slug}` },
      ]);
      setBody(parseJsonToHtml(data?.body));
    },
  });

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-green-50 to-orange-50 min-h-screen py-8 text-black">
        {isLoading ? (
          <ArticleDetailSkeleton />
        ) : isError ? (
          <div className="container mx-auto max-w-7xl px-4">
            <ErrorMessage message="Couldn't fetch the post detail" />
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="container mx-auto max-w-7xl px-4"
          >
            {/* Breadcrumbs area */}
            <motion.div variants={item} className="mb-6 px-4">
              <BreadCrumbs data={breadCrumbsData} />
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <motion.article 
                variants={item} 
                className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-600"
              >
                {/* Featured Image */}
                <div className="relative overflow-hidden border-b-4 border-orange-500">
                  <motion.img
                    variants={item}
                    className="w-full h-auto object-cover max-h-96"
                    src={
                      data?.photo
                        ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                        : images.samplePostImage
                    }
                    alt={data?.title}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                      {data?.title}
                    </h1>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {data?.categories.map((category, index) => (
                        <Link
                          key={index}
                          to={`/blog?category=${category.name}`}
                          className="text-white bg-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block hover:bg-green-800 transition-colors shadow-md"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Article Body */}
                <div className="p-6 md:p-8">
                  <motion.div variants={item} className="prose prose-lg max-w-none">
                    {!isLoading && !isError && (
                      <Editor content={data?.body} editable={false} />
                    )}
                  </motion.div>
                  
                  {/* Tags Section */}
                  {data?.tags && data.tags.length > 0 && (
                    <motion.div variants={item} className="mt-8 border-t-2 border-green-100 pt-4">
                      <h3 className="font-medium text-green-800 mb-3">Tagged with:</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="inline-block rounded-md px-3 py-1 bg-orange-100 text-orange-700 border border-orange-300 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Social Share */}
                  <motion.div variants={item} className="mt-8 border-t-2 border-green-100 pt-6">
                    <h3 className="font-medium text-green-800 mb-4">Share this article:</h3>
                    <SocialShareButtons
                      url={encodeURI(window.location.href)}
                      title={encodeURIComponent(data?.title)}
                    />
                  </motion.div>
                  
                  {/* Comments Section */}
                  <motion.div variants={item} className="mt-10 border-t-2 border-green-100 pt-8">
                    <CommentsContainer
                      comments={data?.comments}
                      logginedUserId={userState?.userInfo?._id}
                      postSlug={slug}
                    />
                  </motion.div>
                </div>
              </motion.article>
              
              {/* Sidebar */}
              <motion.div variants={item} className="lg:w-1/3 space-y-8">
                <SuggestedPosts
                  header="Latest Articles"
                  posts={postsData?.data}
                  tags={data?.tags || []}
                />
                
                <motion.div 
                  variants={item}
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-500"
                >
                  <h2 className="font-medium text-xl text-green-800 mb-4 border-b-2 border-green-200 pb-2">
                    About the Author
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-orange-300 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for author image */}
                      <span className="text-green-600 text-lg font-bold">
                        {data?.author?.name?.charAt(0) || "A"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800">
                        {data?.author?.name || "Blog Author"}
                      </h3>
                      <p className="text-sm text-green-600 mt-1">
                        Published on {new Date(data?.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export default ArticleDetailPage;