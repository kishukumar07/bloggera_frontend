export const deleteBlog = async (blogid) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`https://bloggera-gpel.onrender.com/blog/delete/${blogid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      alert("Blog Deleted! ");
      return true;
    } else {
      alert("Failed to delete blog. try again later");
      return false;
    }
  } catch (err) {
    console.error("Error deleting blog:", err);
    alert("Something went wrong.");
    return false;
  }
};

export default deleteBlog;
