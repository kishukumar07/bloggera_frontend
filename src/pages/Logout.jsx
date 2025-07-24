import React from "react";
import { useAuth } from "../Context/AuthCheckContext";

function Logout() {
  const { setAuthenticated } = useAuth();

  localStorage.removeItem("token");
  setAuthenticated(false);
  return <div>Logout yes i know i'll update this also </div>;
}

export default Logout;
