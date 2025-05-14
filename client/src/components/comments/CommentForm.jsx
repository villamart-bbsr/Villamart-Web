import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHanlder,
  formCancelHandler = null,
  initialText = "",
  loading = false,
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHanlder(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border-2 border-green-500 rounded-lg p-4 bg-white shadow-md text-black">
        <textarea
          className="w-full focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white rounded-md p-3 min-h-[120px] border border-green-100 transition-all duration-300"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse gap-y-2 items-center gap-x-3 pt-4 min-[420px]:flex-row w-full min-[420px]:justify-end">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              type="button"
              className="cursor-pointer px-6 py-2.5 rounded-lg border-2 border-red-500 text-red-600 font-medium hover:bg-red-50 transition-colors duration-300 w-full min-[420px]:w-auto"
            >
              Cancel
            </button>
          )}
          <button
            disabled={loading}
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg w-full min-[420px]:w-auto"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span>Sending...</span>
              </div>
            ) : (
              btnLabel
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;