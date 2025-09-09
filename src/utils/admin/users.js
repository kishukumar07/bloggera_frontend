const fetchAllUsers = async () => {
  const token = localStorage.getItem("token"); // or wherever you store it

  try {
    const res = await fetch("https://bloggera-gpel.onrender.com/admin/users", {
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
    // console.log("Users:", data);
    return data;
  } catch (err) {
    console.error("Fetch error:", err.message);
    return err.message;
  }
};

// router.delete("/users/:id", deleteUser);
const deleteUser = async (UId) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`https://bloggera-gpel.onrender.com/admin/users/${UId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

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

// router.patch("/users/:id/role", updateURole);
const updateURole = async ({ newRole, UId }) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`https://bloggera-gpel.onrender.com/admin/users/${UId}/role`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newRole }),
    });

    if (!res.ok) {
      return "something wen't wrong try again...";
    }
    const data = await res.json();
    // console.log(data);
    return data.message;
  } catch (err) {
    return err.message;
  }
};

export { fetchAllUsers, deleteUser, updateURole };

//this can be modified in the best way ...
