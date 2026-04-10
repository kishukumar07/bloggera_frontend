import React, { useState } from "react";
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
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=Ov23liMKeiAvOWNmLx7K&scope=read:user user:email";

    // setAuthenticated(true);  //this can be handel in better way ...
  };
  const handleSubmit = (formData) => {
    //this will handel the form data by making a post req to backend

    // console.log(formData);

    // http://localhost:4500/user/register
    fetch("https://bloggera-gpel.onrender.com/user/register", {
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
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] px-4">
      <div className="relative  border border-silver-500/10 rounded-2xl p-3 max-w-sm w-full z-10 overflow-hidden">
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative flex justify-center items-center">
              <img
                src="/logo.png"
                alt="App Logo"
                className="w-16 relative z-10"
              />
            </div>
          </div>

          <h2 className="text-2xl font-serif  text-center text-white">
            Create Account
          </h2>
          <p className="text-sm font-light text-center text-gray-400 ">
            Join the Bloggera community
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!formData.email || !formData.password || !formData.name) {
                alert("Please fill in all fields");
                return;
              }

              handleSubmit(formData);
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mt-2"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.name}
                onChange={(e) => changeHandler("name", e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mt-2"
              >
                Email
              </label>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={(e) => changeHandler("email", e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mt-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Pasword"
                className=" w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.password}
                onChange={(e) => changeHandler("password", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className=" mt-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-gray-700 w-full"></span>
            <span className="px-2 text-gray-500 text-sm">or</span>
            <span className="border-t border-gray-700 w-full"></span>
          </div>

          {/* GitHub OAuth */}
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

          {/* Extra Options */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="text-orange-400 hover:underline ml-1"
              >
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
