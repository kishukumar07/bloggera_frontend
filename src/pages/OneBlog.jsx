import React from "react";
import { useParams } from "react-router-dom";
import fetchblogById from "../utils/fetchblogById";
import { useEffect, useState } from "react";

function OneBlog() {
  let { blog_id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    (async () => {
      const blog = await fetchblogById(blog_id);
      // console.log(blog);
      setBlog(blog);
    })();
  }, [blog_id]);

  // console.log(blog)

  return (
    <div>
      <h1>{JSON.stringify(blog)}</h1>  
      {/* //now have to work on this  */}
    </div>
  );
}

export default OneBlog;
