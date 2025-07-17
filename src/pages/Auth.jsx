import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Glowing background behind logo */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse z-0" />

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute w-36 h-36 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-24 relative z-10"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            {isRegister
              ? "Join the Bloggera community today"
              : "Login to continue your blogging journey"}
          </p>

          {/* Form */}
          <form className="space-y-4">
            {isRegister && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          {/* Switch mode */}
          <div className="mt-4 text-center">
            {isRegister ? (
              <p className="text-sm text-gray-600">
                Already have an account?
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-orange-500 hover:underline ml-1"
                >
                  Login
                </button>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Don’t have an account?
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-orange-500 hover:underline ml-1"
                >
                  Register
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
