import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0f0f0f] border-b border-orange-500 shadow-md">
      {/* Left - Logo and Brand */}
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src="/logo.png" alt="logo" />
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
          Bloggera
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex gap-6 text-gray-300 font-medium">
        <Link className="hover:text-orange-400 transition" to="/">Home</Link>
        <Link className="hover:text-orange-400 transition" to="/blogs">Blogs</Link>
        <Link className="hover:text-orange-400 transition" to="/about">About</Link>
        <Link className="hover:text-orange-400 transition" to="/contact">Contact</Link>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="text-sm text-orange-400 font-semibold hover:underline"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="text-sm bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-4 py-1.5 rounded-md font-semibold shadow hover:opacity-90 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
