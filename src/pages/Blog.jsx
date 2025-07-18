import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import formatDate from "../utils/dateFormatter";

// const blogarr = [
//   {
//     id: 1,
//     title: "The Power of Consistent Writing",
//     description: "Discover how daily writing transforms your creativity.",
//     author: "Niket Kumar",
//     date: "July 17, 2025",
//     image: "/prog.png",
//   },
//   {
//     id: 2,
//     title: "5 Tips for Beginner Bloggers",
//     description: "Start strong with these simple and effective blogging tips.",
//     author: "Anjali Sharma",
//     date: "July 14, 2025",
//     image: "/prog.png",
//   },
//   {
//     id: 3,
//     title: "Building Your Audience in 2025",
//     description:
//       "Learn how to attract and grow your reader base in the AI age.",
//     author: "Raj Verma",
//     date: "July 10, 2025",
//     image: "/prog.png",
//   },
// ];
const getblogs = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:4500/blog/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.success) {
      console.log(data.blogs);
      return data.blogs;
    } else {
      console.log(data.msg);
      return []; // return empty array on failure
    }
  } catch (err) {
    console.log("Fetch error:", err);
    return []; // return empty array on error
  }
};

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getblogs();
      // console.log(blogs); // logs actual blogs
      setBlogs(blogs); // assuming setBlogs is from useState
    };

    fetchBlogs();
  }, []);

  // console.log(blogs);

  //  NOW WE HAVE BLOG WE HAVE TO DISPLAY IT IN DIV ... //also have to transfer the blog to the latest blog in /dashboard...

  return (
    <main className="min-h-screen bg-black text-white font-sans px-4 md:px-8 py-16">
      {/* Page Title */}
      <section className="text-center mb-14">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Explore{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Blogs
          </span>
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Dive into the minds of passionate writers.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog._id}
            className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_#ff6a3d40]"
          >
            {/* <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            /> */}
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-orange-400">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-300">{blog.category}</p>
              <div className="text-xs text-gray-500 flex justify-between items-center">
                <span>By {blog.author}</span>
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <Link
                to={`/blogs/${blog._id}`}
                className="inline-block text-orange-400 font-medium hover:underline"
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
