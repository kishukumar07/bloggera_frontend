import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const changeHandler = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  const handelSubmit = (formData) => {
    fetch("https://bloggera-gpel.onrender.com/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // console.log(data);
          localStorage.setItem("token", data.token);
          alert(data.msg);
          navigate("/dashboard");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] px-4">
      <div className="relative bg-[#1c1c1c]/80 shadow-2xl backdrop-blur-lg border border-orange-500/10 rounded-2xl p-6 max-w-sm w-full z-10 overflow-hidden">
        {/* Glowing circle */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br from-orange-500 to-yellow-400 opacity-20 blur-2xl rounded-full z-0 animate-pulse" />

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <img src="/logo.png" alt="Logo" className="w-16 relative z-10" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-white">
            Welcome Back
          </h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            Sign in to your <span className="text-orange-400">Bloggera</span>{" "}
            account
          </p>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!formData.email || !formData.password)
                return alert("All fields required");
              handelSubmit(formData);
            }}
          >
            <div>
              {/* <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label> */}
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={(e) => changeHandler("email", e.target.value)}
              />
            </div>
            <div>
              {/* <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-1"
              >
                Password
              </label> */}
              <input
                type="password"
                id="password"
                placeholder="Your Pasword"
                className="w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.password}
                onChange={(e) => changeHandler("password", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold py-2 rounded-md hover:from-orange-600 hover:to-yellow-500 transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-gray-700 w-full"></span>
            <span className="px-2 text-gray-500 text-sm">or</span>
            <span className="border-t border-gray-700 w-full"></span>
          </div>

          {/* GitHub */}
          <button
            onClick={handleGitHubLogin}
            className="w-full bg-black border border-gray-700 hover:border-white text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0a12 12 0 00-3.793 23.399c.6.111.793-.261.793-.58v-2.27c-3.338.726-4.043-1.609-4.043-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.493.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.47-2.381 1.236-3.221-.124-.304-.535-1.529.117-3.187 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.653 1.658.242 2.883.118 3.187.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .322.192.694.8.576A12 12 0 0012 0z"
              />
            </svg>
            Continue with GitHub
          </button>

          {/* Register */}
          <div className="mt-4 text-center text-sm text-gray-400">
            Don’t have an account?
            <Link
              to="/register"
              className="text-orange-400 font-medium hover:underline ml-1"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
