import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchblogById from "../utils/fetchblogById";
import { useNavigate } from "react-router-dom";
import {LoadingModel} from "../components/comman/LoadingModel"; 
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
    return <LoadingModel/> ; 
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-12 ">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-orange-400 leading-tight">
          {blog.title.replace(/^"|"$/g, "")}
        </h1>

        <p className="text-sm font-extralight      text-gray-300 mb-8">
          Author: <span className="text-gray-300 font-extralight">{blog.author}</span>{" "}
           Category:{" "}
          <span className="text-gray-300 font-extralight">{blog.category}</span>
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
          className="px-3 py-1.5 border border-grey-500 font-serif text-white hover:bg-white hover:text-black rounded  text-sm"
        >
           Go Back
        </button>
      </div>
    </div>
  );
}

export default OneBlog;
