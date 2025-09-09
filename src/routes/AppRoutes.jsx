import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

import Auth from "../pages/Auth";

import Blog from "../pages/Blog";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/dashboard";
import OneBlog from "../pages/OneBlog";

import ProtectedRoute from "../components/ProtectedRoute";

// import Logout from "../pages/Logout";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      {/* <Route path="/logout" element={<Logout />} /> */}

      <Route path="/adminlogin" element={<AdminLogin />} />
      {/* Protected Routes */}
      <Route
        path="/adminDashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blogs"
        element={
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        }
      />

      {/* route:"...adminDashboardPannel..."
     Protected by AdminloginComponenet
    */}

      {/* single blog Route  */}
      <Route path="/OneBlog/:blog_id" element={<OneBlog />} />
    </Routes>
  );
}

export default AppRoutes;
