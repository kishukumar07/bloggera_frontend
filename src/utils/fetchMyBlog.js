const getblogs = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:4500/blog/myblogs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (data.success) {
      //   console.log(data.blogs);
      return data.blogs;
    } else {
      //   console.log(data.msg);
      return []; // return empty array on failure
    }
  } catch (err) {
    console.log("Fetch error:", err);
    return []; // return empty array on error
  }
};

export default getblogs;
