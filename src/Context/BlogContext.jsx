import React from "react";

import getblogs from "../utils/fetchblogs.js";
import { useState, useEffect, createContext, useContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getblogs();
      // console.log(blogs); // logs actual blogs
      setBlogs(blogs); // assuming setBlogs is from useState
    };
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
