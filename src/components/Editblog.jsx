import  { useEffect, useState } from "react";
import fetchBlogbyId from "../utils/fetchblogById";
import { updateBlog } from "../utils/Updateblog";
import {useBlog} from "../Context/BlogContext"; 
//i need to review this further... 
const inputStyle ="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"; 

function Editblog(props) {
  const { blogId, setActiveTab } = props;
  const { setMyBlogs } = useBlog();
  
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    category: "",
  });


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await fetchBlogbyId(blogId);

        setBlog({
          title: data.title,
          content: data.content,
          category: data.category,
        });
      } catch (err) {
        console.error("Error fetching blog:", err);
        alert("Failed to load blog. Try again later.");
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  
  const changeHandler = (field, value) => {
    setBlog((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (blog) => {

    if(!blog.title || !blog.content || !blog.category) {
      alert("Please fill in all fields before saving.");
      return;
    }
    
    const res = await updateBlog({ blog, blogId });
    
    if (res){
           setActiveTab("myblogs");
           console.log(res); 
          setMyBlogs((prev) =>
          prev.map((b) => (b._id === blogId ? {   ...b , ...blog }: b)))
    } else{
      console.log("failed to Edit blog.."); 
    }
  };

 
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400"> Edit Blog</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(blog);
        }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          className={inputStyle}
          value={blog.title}
          onChange={(e) => changeHandler("title", e.target.value)}
        />
        <input
          type="text"
          placeholder="Blog Category"
          className={inputStyle}
          value={blog.category}
          onChange={(e) => changeHandler("category", e.target.value)}
        />
        <textarea
          rows="6"
          placeholder="Edit blog content here..."
          className={inputStyle}
          value={blog.content}
          onChange={(e) => changeHandler("content", e.target.value)}
        ></textarea>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg hover:scale-105 transition"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("myblogs")}
            className="px-6 py-3 border border-red-600 text-red-500 font-bold rounded-lg hover:bg-red-700 hover:text-white transition"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editblog;
