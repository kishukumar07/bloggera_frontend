export const updateBlog = async ({ blog, blogId }) => {
  try {
    const res = await fetch(`http://localhost:4500/blog/update/${blogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      alert("Blog updated successfully!");

      return true;
    } else {
      alert("Failed to update blog. try again later");
    }
  } catch (err) {
    console.error("Error updating blog:", err);
    alert("Something went wrong.");
  }
};
