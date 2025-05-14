import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createNewComment,
  deleteComment,
  updateComment,
} from "../../services/index/comments";
import { toast } from "react-hot-toast";

const CommentsContainer = ({
  className,
  logginedUserId,
  comments,
  postSlug,
}) => {
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);
  const [affectedComment, setAffectedComment] = useState(null);

  const { mutate: mutateNewComment, isLoading: isLoadingNewComment } =
    useMutation({
      mutationFn: ({ token, desc, slug, parent, replyOnUser }) => {
        return createNewComment({ token, desc, slug, parent, replyOnUser });
      },
      onSuccess: () => {
        toast.success(
          "Your comment is sent successfully, it will be visible after the confirmation of the Admin",
          {
            style: {
              border: '2px solid #16a34a',
              padding: '16px',
              color: '#166534',
              backgroundColor: '#f0fdf4',
            },
            iconTheme: {
              primary: '#f97316',
              secondary: '#fff',
            }
          }
        );
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const { mutate: mutateUpdateComment } = useMutation({
    mutationFn: ({ token, desc, commentId }) => {
      return updateComment({ token, desc, commentId });
    },
    onSuccess: () => {
      toast.success("Your comment is updated successfully", {
        style: {
          border: '2px solid #16a34a',
          padding: '16px',
          color: '#166534',
          backgroundColor: '#f0fdf4',
        },
        iconTheme: {
          primary: '#f97316',
          secondary: '#fff',
        }
      });
      queryClient.invalidateQueries(["blog", postSlug]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: ({ token, desc, commentId }) => {
      return deleteComment({ token, commentId });
    },
    onSuccess: () => {
      toast.success("Your comment is deleted successfully", {
        style: {
          border: '2px solid #16a34a',
          padding: '16px',
          color: '#166534',
          backgroundColor: '#f0fdf4',
        },
        iconTheme: {
          primary: '#f97316',
          secondary: '#fff',
        }
      });
      queryClient.invalidateQueries(["blog", postSlug]);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    mutateNewComment({
      desc: value,
      parent,
      replyOnUser,
      token: userState.userInfo.token,
      slug: postSlug,
    });
    setAffectedComment(null);
  };

  const updateCommentHandler = (value, commentId) => {
    mutateUpdateComment({
      token: userState.userInfo.token,
      desc: value,
      commentId,
    });
    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    mutateDeleteComment({ token: userState.userInfo.token, commentId });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} border-2 border-green-600 rounded-xl p-6 bg-gradient-to-br from-green-50 to-orange-50 shadow-lg`}
    >
      <div className="flex items-center gap-3 mb-6">
        <FiMessageCircle className="text-2xl text-orange-500" />
        <h2 className="font-bold text-xl text-green-800 border-b-2 border-orange-400 pb-2 flex-1">
          Share Your Thoughts
        </h2>
      </div>
      
      <motion.div variants={item}>
        <CommentForm
          btnLabel="Post Comment"
          formSubmitHanlder={(value) => addCommentHandler(value)}
          loading={isLoadingNewComment}
        />
      </motion.div>
      
      {comments.length > 0 ? (
        <motion.div 
          className="space-y-6 mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="font-medium text-green-800 border-b border-green-200 pb-2">
            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
          </h3>
          
          {comments.map((comment) => (
            <motion.div
              key={comment._id}
              variants={item}
            >
              <Comment
                comment={comment}
                logginedUserId={logginedUserId}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                addComment={addCommentHandler}
                updateComment={updateCommentHandler}
                deleteComment={deleteCommentHandler}
                replies={comment.replies}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          variants={item}
          className="text-center py-10 mt-4 bg-white rounded-lg border border-green-200"
        >
          <p className="text-green-700">No comments yet. Be the first to share your thoughts!</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CommentsContainer;