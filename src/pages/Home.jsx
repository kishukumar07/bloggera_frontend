import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Glowing Orb Effects */}
      <div className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] bg-yellow-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-2xl animate-ping"></div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left: Text */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#ff6a3d]">
              Bloggera
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Discover insightful articles, share your stories, and connect with a
            community of readers and writers.
          </p>
          <div className="flex gap-4">
            <Link
              to="/blogs"
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-black px-6 py-2 rounded-md font-semibold shadow-md hover:shadow-[0_0_20px_#ff6a3d] transition"
            >
              Explore Blogs
            </Link>
            <Link
              to="/dashboard"
              className="border border-orange-400 text-orange-400 px-6 py-2 rounded-md font-medium hover:bg-orange-500 hover:text-black hover:shadow-[0_0_15px_#ff6a3d] transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right: Logo */}
        <div className="mt-10 md:mt-0 relative">
          {/* Glowing background */}
          <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />
          <img
            src="/logo.png"
            alt="App Logo"
            className="w-full max-w-xs md:max-w-md relative z-10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#111111] py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "✍️", title: "Write", text: "Publish your ideas and share your thoughts with the world." },
            { icon: "📖", title: "Read", text: "Browse content from diverse creators and topics that matter." },
            { icon: "💬", title: "Engage", text: "Connect with a growing community of readers and bloggers." },
          ].map(({ icon, title, text }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#ff6a3d50] transition"
            >
              <h3 className="text-xl font-bold text-orange-400">
                {icon} {title}
              </h3>
              <p className="mt-2 text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 bg-black relative z-10 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Bloggera. All rights reserved.
      </footer>
    </main>
  );
}

export default Home;
