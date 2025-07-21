import { useState, useEffect } from "react";
import fetchMyBlogs from "../utils/fetchMyBlog";
// import { Link } from "react-router-dom";

const Myblog = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchMyBlogs();
      setBlogs(data);
    })();
  }, []);

  const getPreview = (text, limit = 200) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const cleanTitle = (title) => {
    return title.replaceAll(`"`, "");
  };

  return (
    <div className="min-h-screen relative overflow-hidden px-4 md:px-10 py-10 bg-black text-white">
      {/* Neon glow background lights */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">📚 My Blogs</h2>
        <p className="text-gray-400 mb-10">
          View and manage the blogs you've published.
        </p>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="w-full p-6 rounded-xl bg-[#1a1a1a] border border-orange-600/20 shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-400/40"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {cleanTitle(blog.title)}
                  </h3>
                  <span className="text-xs bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {getPreview(blog.content)}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-gray-400">
                    ✍️ {blog.author}
                  </span>
                  <div className="space-x-4">
                    <button
                      className="text-yellow-400 hover:text-yellow-300 font-medium transition duration-150"
                      onClick={() => {
                        props.setActiveTab("edit");

                        props.setSelectedBlogId(`${blog._id}`);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    <button className="text-red-500 hover:text-red-400 font-medium transition duration-150">
                      🗑️ Delete
                    </button>
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
