//There is one bug i need to when i'm deleting {i'snt updating ui instantly...}
//same for edit.jsx...

import { useState } from "react";
import { useBlog } from "../Context/BlogContext";
import deleteBlog from "../utils/deleteBlog";
import { ConfirmationModal } from "./comman/ConfirmationModal.jsx";
import { LoadingModel } from "../components/comman/LoadingModel";

const Myblog = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { myBlogs, setMyBlogs } = useBlog();

  const onConfirm = async () => {
    setMyBlogs((prev) => prev.filter((b) => b._id !== props.selectedBlogId));
    setShowConfirm(false);
    const res = await deleteBlog(props.selectedBlogId);
    if (!res) {
      console.log("Delete failed, refetch needed");
    }
  };

  let message = "Are you sure?";

  const getPreview = (text, limit = 200) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const cleanTitle = (title) => {
    return title.replaceAll(`"`, "");
  };

  if (!myBlogs) {
    return <LoadingModel />;
  }

  if (myBlogs.length === 0) {
    return <p className="text-center text-gray-400">No blogs found</p>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden px-4 md:px-10  bg-black text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-extralight text-white mb-2"> My Blogs</h2>
        <p className="text-gray-400 mb-10">
          View and manage the blogs you've published.
        </p>

        <div className="space-y-6">
          {myBlogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full p-6 rounded-xl bg-gray-900 border border-gray-700 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <h3 className="text-2xl font-bold text-white break-words line-clamp-2">
                    {cleanTitle(blog.title)}
                  </h3>
                  <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded">
      
                    {blog.category}

                  </span>

                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {getPreview(blog.content)}
                </p>

                <div className="flex justify-between items-center pt-2">
  
                  <span className="text-xs text-gray-400">{
                `${blog.author}, your blog is ${
  blog.status === "approved"
    ? "approved "
    : blog.status === "pending"
    ? "under review. Please wait for admin approval. For any queries, contact via the Contact page."
    : blog.status === "rejected"
    ? "rejected . For more details, contact the admin via the Contact page."
    : blog.status
}.`
                  }</span>
                  <div className="space-x-4">
                    <button
                      className="text-yellow-400 hover:text-yellow-300 font-medium"
                      onClick={() => {
                        props.setActiveTab("edit");
                        props.setSelectedBlogId(blog._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setShowConfirm(true);
                        props.setSelectedBlogId(blog._id);
                      }}
                      className="text-red-500 hover:text-red-400 font-medium"
                    >
                      Delete
                    </button>
                    {showConfirm && props.selectedBlogId === blog._id && (
                      <ConfirmationModal
                        message={message}
                        onConfirm={onConfirm}
                        onCancel={() => {
                          setShowConfirm(false);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myblog;
