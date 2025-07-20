import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchblogById from "../utils/fetchblogById";
import { useNavigate } from "react-router-dom";
function OneBlog() {
  const navigate = useNavigate();
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchblogById(blog_id);
      setBlog(data);
    })();
  }, [blog_id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-12 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md border border-orange-400/30 shadow-[0_0_60px_rgba(255,140,0,0.2)] hover:shadow-[0_0_80px_rgba(255,140,0,0.4)] transition-all duration-500">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400 leading-tight">
          {blog.title.replace(/^"|"$/g, "")}
        </h1>

        <p className="text-sm text-gray-300 mb-8">
          ✍️ By <span className="text-white font-medium">{blog.author}</span>{" "}
          &nbsp;|&nbsp; 📚 Category:{" "}
          <span className="text-orange-300">{blog.category}</span>
        </p>

        <hr className="border-gray-600 mb-8" />

        <div className="text-lg text-gray-200 leading-relaxed space-y-6">
          {blog.content.split("\\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-md bg-orange-500 text-black font-semibold hover:bg-orange-600 transition shadow-md"
        >
          ⬅️ Go Back
        </button>
      </div>
    </div>
  );
}

export default OneBlog;
