const fetchblogById = async (blogId) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`https://bloggera-gpel.onrender.com/blog/${blogId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.success) {
      // console.log(data.blog);
      return data.blog;
    } else {
      console.log(data.msg);
      return []; // return empty array on failure
    }
  } catch (err) {
    console.log("Fetch error:", err);
    return []; // return empty array on error
  }
};

export default fetchblogById;
