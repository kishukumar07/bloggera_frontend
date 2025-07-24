function createContent(blog) {
  const token = localStorage.getItem("token");

  fetch("https://bloggera-gpel.onrender.com/blog/create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(blog),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        // console.log(data);
        alert(data.msg);
        return true;
      } else {
        console.log(data);
        alert("something went wrong! please try again");
        return false;
      }
    })
    .catch((err) => {
      console.log(err.msg);
      alert("Something went Wrong! Please try again later");
    });
}

export default createContent;
