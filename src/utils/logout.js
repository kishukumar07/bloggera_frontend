export const logout = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`https://bloggera-gpel.onrender.com/user/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.json());
  return res.ok;
};
