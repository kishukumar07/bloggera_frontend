import React from "react";
import { Link } from "react-router-dom";

// Dummy blog data (replace with real API or props later)
const blogs = [
  {
    id: 1,
    title: "The Power of Consistent Writing",
    description: "Discover how daily writing transforms your creativity.",
    author: "Niket Kumar",
    date: "July 17, 2025",
    image: "/prog.png",
  },
  {
    id: 2,
    title: "5 Tips for Beginner Bloggers",
    description: "Start strong with these simple and effective blogging tips.",
    author: "Anjali Sharma",
    date: "July 14, 2025",
    image: "/prog.png",
  },
  {
    id: 3,
    title: "Building Your Audience in 2025",
    description:
      "Learn how to attract and grow your reader base in the AI age.",
    author: "Raj Verma",
    date: "July 10, 2025",
    image: "/prog.png",
  },
  
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans px-6 py-12">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Latest <span className="text-orange-500">Blogs</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Read from our community of passionate writers.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-orange-600">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">{blog.description}</p>
              <div className="text-xs text-gray-500 flex justify-between items-center">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <Link
                to={`/blogs/${blog.id}`}
                className="inline-block mt-2 text-orange-500 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} Bloggera. All rights reserved.
      </footer>
    </main>
  );
}
