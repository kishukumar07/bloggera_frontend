import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthCheckContext";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { setAuthenticated } = useAuth();

  const changeHandler = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handelSubmit = (formData) => {
    //the url will be change for admin login purpose
    // fetch("https://bloggera-gpel.onrender.com/admin/login", {
    fetch("http://localhost:4500/admin/login", {
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
          setAuthenticated(true);
          navigate("/adminDashboard", { replace: true }); //the navigation  will also change for the admin purpose
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
        {/* <div className="absolute -top-16 -left-16 w-40 h-40 bg-gradient-to-br from-green-500 to-yellow-400 opacity-20 blur-2xl rounded-full z-0 animate-pulse" /> */}

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <img src="/logo.png" alt="Logo" className="w-16 relative z-10" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-white">
            Welcome Back Admin
          </h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            Sign in to your{" "}
            <span className="text-green-400">Bloggera-Admin</span> account
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
                className="w-full px-3 py-2 bg-[#121212] text-white border border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full bg-gradient-to-r from-green-500 to-yellow-400 text-black font-semibold py-2 rounded-md hover:from-green-600 hover:to-yellow-500 transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-gray-700 w-full"></span>
            <span className="px-2 text-gray-500 text-sm"></span>
            <span className="border-t border-gray-700 w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
