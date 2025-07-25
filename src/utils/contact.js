export const postContactMsg = async (formData) => {
  try {
    const res = await fetch("https://bloggera-gpel.onrender.com/contact/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data.success) {
      console.log(data);
      return true;
    } else {
      console.log(data.msg);
      return false; // return empty array on failure
    }
  } catch (err) {
    console.log("Fetch error:", err);
    return false; // return empty array on error
  }
};
