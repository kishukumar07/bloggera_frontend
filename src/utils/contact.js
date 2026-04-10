export const postContactMsg = async (formData) => {
  const token = localStorage.getItem("token");
  try {
    if(!token){
      alert("Please login to send message! "); 
      return false; 
    }
    console.log(formData); 
    const res = await fetch("https://bloggera-gpel.onrender.com/contact/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data.success) {
      console.log(data);
      return true;
    } else {
      console.log(data.msg);
      return false;
    }
  } catch (err) {
    console.log("Fetch error:", err);
    return false; 
  }
};
