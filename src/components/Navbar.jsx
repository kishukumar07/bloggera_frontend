import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
      {/* Left - Logo and Brand */}
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src="/logo.png" alt="logo" />
        <Link to="/" className="text-xl font-bold text-gray-800">
          Bloggera
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="text-sm text-blue-600 font-semibold hover:underline"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
