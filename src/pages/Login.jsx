import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({ email: "", password: "" });

  const changeHandler = (key, value) => {
    setformData({ ...formData, [key]: value });
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github"; // OAuth redirect
  };

  const handelSubmit = (formData) => {
    //this will handel the form data by making a post req to backend

    // console.log(formData);

    // http://localhost:4500/user/login
    fetch("http://localhost:4500/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // ✅ Login successful
          console.log("Login successful:", data);

          // Save token
          localStorage.setItem("token", data.token);

          // Navigate to dashboard or home
          navigate("/dashboard");
        } else {
          console.error("Login failed:", data.msg);
        alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full relative overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-30 animate-pulse z-0"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-16 relative z-10"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-xs text-gray-500 text-center mb-4">
            Sign in to your Bloggera account
          </p>

          {/* Form */}
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();

              if (!formData.email || !formData.password) {
                alert("Please fill in all fields");
                return;
              }

              handelSubmit(formData);
              console.log("final", formData);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => changeHandler("email", e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => changeHandler("password", e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 text-sm rounded-md transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <span className="border-t border-gray-300 w-full"></span>
            <span className="px-2 text-gray-400 text-xs">or</span>
            <span className="border-t border-gray-300 w-full"></span>
          </div>

          {/* GitHub Button */}
          <button
            onClick={handleGitHubLogin}
            className="w-full bg-gray-800 hover:bg-black text-white py-1.5 text-sm rounded-md flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0a12 12 0 00-3.793 23.399c.6.111.793-.261.793-.58v-2.27c-3.338.726-4.043-1.609-4.043-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.493.997.107-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.47-2.381 1.236-3.221-.124-.304-.535-1.529.117-3.187 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.653 1.658.242 2.883.118 3.187.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .322.192.694.8.576A12 12 0 0012 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Continue with GitHub</span>
          </button>

          {/* Register Link */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-600">
              Don’t have an account?
              <Link
                to="/register"
                className="text-orange-500 hover:underline ml-1"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
