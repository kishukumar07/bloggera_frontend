import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse z-0"></div>
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-36 h-36 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-24 relative z-10"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Join the Bloggera community today
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
            >
              Register
            </button>
          </form>

          {/* Extra Options */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?
              <Link to="/auth" className="text-orange-500 hover:underline ml-1">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
