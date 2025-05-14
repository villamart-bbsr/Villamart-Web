import React from "react";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";

import { images, stables } from "../../constants";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div
      className={`flex flex-nowrap items-start gap-x-3 ${parentId ? "pl-6 border-l-2 border-green-200 mt-4" : "bg-white shadow-sm"} p-4 rounded-lg transition-all duration-300 hover:bg-green-50`}
      id={`comment-${comment?._id}`}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-400 flex-shrink-0 shadow-sm">
        <img
          src={
            comment?.user?.avatar
              ? stables.UPLOAD_FOLDER_BASE_URL + comment.user.avatar
              : images.userImage
          }
          alt="user profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-bold text-green-800 text-sm">
              {comment.user.name}
            </h5>
            <span className="text-xs text-green-600">
              {new Date(comment.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
              })}
            </span>
          </div>
          {commentBelongsToUser && (
            <div className="flex space-x-2">
              <button
                className="text-green-700 hover:text-orange-600 transition-colors cursor-pointer"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
                title="Edit comment"
              >
                <FiEdit2 className="w-4 h-auto" />
              </button>
              <button
                className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                onClick={() => deleteComment(comment._id)}
                title="Delete comment"
              >
                <FiTrash className="w-4 h-auto" />
              </button>
            </div>
          )}
        </div>
        
        {!isEditing && (
          <div className="mt-3 text-gray-700 bg-green-50 p-3 rounded-md border-l-2 border-green-300">
            <p>{comment.desc}</p>
          </div>
        )}
        
        {isEditing && (
          <div className="mt-3">
            <CommentForm
              btnLabel="Update"
              formSubmitHanlder={(value) => updateComment(value, comment._id)}
              formCancelHandler={() => setAffectedComment(null)}
              initialText={comment.desc}
            />
          </div>
        )}
        
        <div className="flex items-center text-green-700 font-medium text-sm mt-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-1 hover:text-orange-600 transition-colors py-1 px-2 rounded-md hover:bg-green-100 cursor-pointer"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
        </div>
        
        {isReplying && (
          <div className="mt-3">
            <CommentForm
              btnLabel="Reply"
              formSubmitHanlder={(value) =>
                addComment(value, repliedCommentId, replyOnUserId)
              }
              formCancelHandler={() => setAffectedComment(null)}
            />
          </div>
        )}
        
        {replies.length > 0 && (
          <div className="mt-3 space-y-3">
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;