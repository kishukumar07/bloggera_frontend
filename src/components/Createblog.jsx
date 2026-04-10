import { useState } from "react";
import createContent from "../utils/createContent";


//i'll have to do this in separate file and then import and use 
//do every where for clean css structure ...
//#utility css class...
//yes but dont need to globalize this cause you dont know which component will differ in input style

//css 
const btnSuccess = "px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm";
const inputStyle =
  "w-full p-3 rounded-lg bg-[#1a1a1a]  text-white placeholder-gray-400"; 



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

  const handleSubmit = async (blog) => {
    const res = await createContent(blog);

    if (res) {
    
      setActiveTab("latest");
    
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extralight text-gray-200">Create a New Blog</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!blog.title || !blog.content || !blog.category) {
            alert("Please fill in all fields before submitting.");
            return;
          }
          //check for emptyness...
          handleSubmit(blog);
        }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          className={inputStyle}
          value={blog.title}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("title", event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Blog Category"
          className={inputStyle}
          value={blog.category}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("category", event.target.value);
          }}
        />
        <textarea
          rows="6"
          placeholder="Write your blog content here..."
          className={inputStyle}
          value={blog.content}
          onChange={(event) => {
            // console.log(event.target.value);
            changeHandler("content", event.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className={btnSuccess}
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
