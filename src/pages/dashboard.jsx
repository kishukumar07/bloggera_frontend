import React, { useState } from "react";
import LatestBlog from "../components/Latestblog";
import CreateBlog from "../components/Createblog";
import Myblog from "../components/Myblog";
import SavedBlog from "../components/Savedblog";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const buttonStyle = (tab) =>
    `rounded-lg text-white font-semibold py-3 px-4 transition duration-300 shadow-lg ${
      activeTab === tab
        ? "bg-gradient-to-r from-orange-500 to-yellow-400"
        : "bg-[#1a1a1a] border border-orange-600 hover:bg-orange-700"
    }`;

  return (
    <div className="min-h-screen bg-[#000000] text-white p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        🧠 Your <span className="text-yellow-400">Dashboard</span>
      </h1>

      {/* Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button
          className={buttonStyle("latest")}
          onClick={() => setActiveTab("latest")}
        >
          📰 Latest Blogs
        </button>
        <button
          className={buttonStyle("create")}
          onClick={() => setActiveTab("create")}
        >
          ✍️ Create Blog
        </button>
        <button
          className={buttonStyle("myblogs")}
          onClick={() => setActiveTab("myblogs")}
        >
          📚 My Blogs
        </button>
        <button
          className={buttonStyle("saved")}
          onClick={() => setActiveTab("saved")}
        >
          💾 Saved Blogs
        </button>
      </div>

      {/* Conditional Render */}
      <div className="bg-[#111111] p-6 rounded-xl shadow-inner border border-orange-800">
        {activeTab === "latest" && <LatestBlog />}
        {activeTab === "create" && <CreateBlog />}
        {activeTab === "myblogs" && <Myblog />}
        {activeTab === "saved" && <SavedBlog />}
      </div>
    </div>
  );
};

export default Dashboard;
