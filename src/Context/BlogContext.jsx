import getblogs from "../utils/fetchblogs.js";
import fetchMyBlogs from "../utils/fetchMyBlog.js"
import { useState, useEffect, createContext, useContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  
  const [blogs, setBlogs] = useState([]);
  const [myBlogs,setMyBlogs] =useState([]); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try{
        const blogs = await getblogs();
        const myBlogs = await fetchMyBlogs(); 
        setBlogs(blogs); 
        setMyBlogs(myBlogs);
      }catch(err){
                console.error(err);
      }
    };
    fetchBlogs();

    
   }, []);

  return (
    <BlogContext.Provider value={{ blogs , myBlogs , setMyBlogs}}>
                {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext); 