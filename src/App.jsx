import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

import { BlogProvider } from "./Context/BlogContext";

function App() {
  return (
    <div>
      <Navbar />

      <BlogProvider>
        <AppRoutes />
      </BlogProvider>
    </div>
  );
}

export default App;
