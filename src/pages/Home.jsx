import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-gradient bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Bloggera
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Discover insightful articles, share your stories, and connect with a
            community of readers and writers.
          </p>
          <div className="flex gap-4">
            <Link
              to="/blogs"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Explore Blogs
            </Link>
            <Link
              to="/auth"
              className="border border-orange-500 text-orange-400 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-black transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right: Logo */}
        <div className="mt-10 md:mt-0">
          <div className="relative flex justify-center items-center">
            {/* Glowing background */}
            <div className="absolute w-52 h-52 md:w-72 md:h-72 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse" />

            {/* Actual Logo */}
            <img
              src="/logo.png"
              alt="App Logo"
              className="w-full max-w-xs md:max-w-md relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-orange-400">✍️ Write</h3>
            <p className="mt-2 text-gray-400">
              Publish your ideas and share your thoughts with the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-400">📖 Read</h3>
            <p className="mt-2 text-gray-400">
              Browse content from diverse creators and topics that matter.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-400">💬 Engage</h3>
            <p className="mt-2 text-gray-400">
              Connect with a growing community of readers and bloggers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 bg-black">
        &copy; {new Date().getFullYear()} Bloggera. All rights reserved.
      </footer>
    </main>
  );
}

export default Home;
