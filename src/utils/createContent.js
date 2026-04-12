async function createContent(blog) {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://bloggera-gpel.onrender.com/blog/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();

    if (data.success) {
      alert(data.msg);
      return true;
    } else {
      alert("something went wrong! please try again");
      return false;
    }
  } catch (err) {
    console.log(err);
    alert("Something went Wrong! Please try again later");
    return false;
  }
}
export default createContent;
