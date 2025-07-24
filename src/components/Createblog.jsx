import { useState } from "react";
import createContent from "../utils/createContent";

const CreateBlog = ({ setActiveTab }) => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    category: "",
  });

  const changeHandler = (key, value) => {
    setBlog({ ...blog, [key]: value });
    // console.log(blog);
  };

  const handelSubmit = async (blog) => {
    const res = await createContent(blog);

    if (res) {
      //we have to change the state of the active tab in /dashboard  to "latest"
      setActiveTab("latest");
      // console.log(`${setActiveTab}`);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400">
        ✍️ Create a New Blog
      </h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!blog.title || !blog.content || !blog.category) {
            alert("Please fill in all fields before submitting.");
            return;
          }
          //check for emptyness...
          handelSubmit(blog);
        }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"
          value={blog.title}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("title", event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Blog Category"
          className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"
          value={blog.category}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("category", event.target.value);
          }}
        />
        <textarea
          rows="6"
          placeholder="Write your blog content here..."
          className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"
          value={blog.content}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("content", event.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
