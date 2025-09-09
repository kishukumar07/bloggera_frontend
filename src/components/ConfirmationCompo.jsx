import React from "react";

import deleteBlog from "../utils/deleteBlog";

export default function ConfirmationCompo({ setShowConfirm, selectedBlogId }) {
  const handleConfirm = () => {
    const res = deleteBlog(selectedBlogId);
    if (res) {
      setShowConfirm(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="absolute bottom-[50%] right-[57%] w-20 h-20 bg-orange-500 blur-2xl opacity-20 rounded-full animate-pulse z-0"></div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl text-center">
        <p className="text-lg font-semibold mb-4 text-black">Are you sure?</p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={() => setShowConfirm(false)}
          >
            Cancel 
          </button>
        </div>
      </div>
    </div>
  );
}
