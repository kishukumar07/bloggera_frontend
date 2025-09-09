
export const fetchAll = async () => {
  const token = localStorage.getItem("token"); // or wherever you store it

  try {
    const [usersRes, blogsRes, contactsRes] = await Promise.all([
      fetch("https://bloggera-gpel.onrender.com/admin/dashboard/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
      fetch("https://bloggera-gpel.onrender.com/admin/dashboard/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
      fetch("https://bloggera-gpel.onrender.com/admin/dashboard/contacts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }),
    ]);

    const [usersData, blogsData, contactsData] = await Promise.all([
      usersRes.json(),
      blogsRes.json(),
      contactsRes.json(),
    ]);
// console.log(usersData, blogsData, contactsData);



   const result =  {...usersData,...blogsData,...contactsData}; 

return result ; 
   

  } catch (err) {
    console.error("Error fetching dashboard data:", err);
  }
};
