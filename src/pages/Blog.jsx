import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
import formatDate from "../utils/dateFormatter";
import { useBlog } from "../Context/BlogContext";
import {LoadingModel} from "../components/comman/LoadingModel"; 
export default function Blog() {
  const { blogs } = useBlog();
// const blogs =[] ;
  // console.log(blogs);
if(!(blogs.length)){
   return <LoadingModel/> ; 
}

  //  NOW WE HAVE BLOG WE HAVE TO DISPLAY IT IN DIV ... //also have to transfer the blog to the latest blog in /dashboard...

  return (
    <main className="min-h-screen bg-black text-white font-sans px-4 md:px-2 py-0">
      {/* Page Title */}
      <section className="text-center mb-5">
        <p className="text-balance text-gray-400 mt-2">
          Dive into the minds of passionate writers.
        </p>         
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog._id}
            className="bg-gray-900 border  border-gray-500 rounded-xloverflow-hidden transition-all duration-300 hover:scale-[1.02] "
          > 
          <img
                src="/Prog.png"
                // alt={blog.title}
                alt="blog pic"
               className=" h-30"
              />
           
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-white-400">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-300">{blog.category}</p>
              <div className="text-xs text-gray-500 flex justify-between items-center">
                <span>By {blog.author}</span>
                <span>{formatDate(blog.createdAt)}</span>
              </div>      
              <Link
                to={`/OneBlog/${blog._id}`}
                className=" inline-block text-white font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} Bloggera. All rights reserved.
      </footer>
    </main>
  );
}
