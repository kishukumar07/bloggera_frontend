import React, { useState } from "react";
import Blog from "./Blog"

import CreateBlog from "../components/Createblog";
import Myblog from "../components/Myblog";
// import SavedBlog from "../components/Savedblog";
import Editblog from "../components/Editblog";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  //css
const buttonStyle = (tab) =>
  `px-3 py-1.5 font-serif text-sm rounded transition duration-300 ${
    activeTab === tab
      ? "bg-orange-500 text-black"
      : "border border-gray-600 text-gray-300 hover:bg-orange-500 hover:text-black"
  }`;

  return (
    <div className="min-h-screen bg-[#000000] text-white p-6">

      {/* Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <button
          className={buttonStyle("latest")}
          onClick={() => setActiveTab("latest")}
        >
          Latest Blogs
        </button>
        <button
          className={buttonStyle("create")}
          onClick={() => setActiveTab("create")}
        >
          Create Blog
        </button>
        <button
          className={buttonStyle("myblogs")}
          onClick={() => setActiveTab("myblogs")}
        >
          My Blogs
        </button>
        {/* <button
          className={buttonStyle("saved")}
          onClick={() => setActiveTab("saved")}
        >
          Saved Blogs
        </button> */}
      </div>

      {/* Conditional Render */}
      <div >
        {activeTab === "latest" && <Blog /> }
        {activeTab === "create" && <CreateBlog setActiveTab={setActiveTab} />}
        {activeTab === "myblogs" && (
          <Myblog
            setActiveTab={setActiveTab}
            setSelectedBlogId={setSelectedBlogId}
            selectedBlogId={selectedBlogId}
          />
        )}
        {/* {activeTab === "saved" && <SavedBlog />} */}
        {activeTab === "edit" && (
          <Editblog blogId={selectedBlogId} setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
