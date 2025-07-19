import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token doesn't exist, redirect to login

  if (!token) {
    // and not expired
    return <Navigate to="/login" replace />;
  }
  const decoded = jwtDecode(token);
  // console.log(decoded);

  const currentTime = Date.now() / 1000; // in seconds
  try {

    if (decoded.exp < currentTime) {
    // console.log(decoded.exp ,currentTime)
      // Token has expired
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }

    // If token exists, render the protected content
    return children;
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
