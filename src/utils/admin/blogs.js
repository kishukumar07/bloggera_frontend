const fetchBlog = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://bloggera-gpel.onrender.com/admin/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return "something wen't wrong try again...";
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err.message);
    return err.message;
  }
};

const updateBState = async ({ BId, status }) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `https://bloggera-gpel.onrender.com/admin/blog/${BId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({ status }),
      }
    );

    if (!res.ok) {
      return "something wen't wrong try again...";
    }

    const data = await res.json();

    return data.message;
  } catch (err) {
    console.error("Fetch error:", err.message);
    return err.message;
  }
};

// router.delete("/users/:id", deleteUser);
const deleteBlog = async (BId) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(
      `https://bloggera-gpel.onrender.com/admin/blogs/${BId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      return "something wen't wrong try again...";
    }

    const data = await res.json();
    console.log(data);
    return data.message;
  } catch (err) {
    return err.message;
  }
};

export { fetchBlog, updateBState, deleteBlog };
