import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (key, value) => {
    setformData({ ...formData, [key]: value });
  };

  const handleGitHubLogin = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const handelSubmit = (formData) => {
    //this will handel the form data by making a post req to backend

    // console.log(formData);

    // http://localhost:4500/user/register
    fetch("http://localhost:4500/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(`${data.msg}`);
          navigate("/login");
        } else {
          alert(`${data.msg}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full relative overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse z-0"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-16 relative z-10"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Join the Bloggera community
          </p>

          {/* Form */}
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!formData.email || !formData.password || !formData.name) {
                alert("Please fill in all fields");
                return;
              }

              handelSubmit(formData);
              // console.log(formData);
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.name}
              onChange={(e) => changeHandler("name", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.email}
              onChange={(e) => changeHandler("email", e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.password}
              onChange={(e) => changeHandler("password", e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-md"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* GitHub OAuth */}
          <button
            onClick={handleGitHubLogin}
            className="w-full bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.87 10.95c.58.11.8-.25.8-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.05 1.79 2.75 1.27 3.43.97.1-.77.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.1-.12-.3-.52-1.5.11-3.14 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 2.88-.39c.98 0 1.97.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.64.23 2.84.11 3.14.74.8 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.68.81.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            <span>Continue with GitHub</span>
          </button>

          {/* Extra Options */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-600">
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
