import React from "react";

// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LatestBlog from "../components/Latestblog";
import CreateBlog from "../components/Createblog";
import Myblog from "../components/Myblog";
import SavedBlog from "../components/Savedblog";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const userName = "Niket";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      {/* <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          👋 Hello, {userName}!
        </h1>
        <p className="text-gray-600 mt-1">
          Ready to write something amazing today?
        </p>
      </div> */}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg font-medium shadow"
          onClick={() => setActiveTab("create")}
        >
          📝 Create New Blog
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-medium shadow"
          onClick={() => {
            setActiveTab("myblogs");
          }}
        >
          📂 My Blogs
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg font-medium shadow"
          onClick={() => {
            setActiveTab("saved");
          }}
        >
          🔖 Saved Blogs
        </button>
      </div>
      {/* conditonlal rendering here  */}
      <div>
        {activeTab === "latest" && <LatestBlog />}
        {activeTab === "create" && <CreateBlog />}
        {activeTab === "myblogs" && <Myblog />}
        {activeTab === "saved" && <SavedBlog />}
      </div>
    </div>
  );
};

export default Dashboard;
