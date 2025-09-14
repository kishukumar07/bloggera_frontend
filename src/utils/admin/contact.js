const getAllContacts = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const res = await fetch(
      "https://bloggera-gpel.onrender.com/admin/contacts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Failed to fetch contacts: ${res.status}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { error: error.message };
  }
};

const updatingContactStatus = async ({ status, CId }) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return "No token found. Please log in again.";
    }

    const res = await fetch(
      `https://bloggera-gpel.onrender.com/admin/contacts/${CId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      }
    );

    // Handle non-OK status
    if (!res.ok) {
      let errorMessage = `Error ${res.status}: ${res.statusText}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // ignore JSON parse error, fallback to default message
      }
      return errorMessage;
    }

    // Handle success case
    const data = await res.json();
    return data.message || "Status updated successfully.";
  } catch (error) {
    // Catch network or unexpected errors
    return `Request failed: ${error.message}`;
  }
};

const deleteContact = async ({ CId }) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return "No token found. Please log in again.";
    }

    const res = await fetch(
      `https://bloggera-gpel.onrender.com/admin/contacts/${CId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    // Handle non-OK status
    if (!res.ok) {
      let errorMessage = `Error ${res.status}: ${res.statusText}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // ignore JSON parse error, fallback to default message
      }
      return errorMessage;
    }

    // Handle success case
    const data = await res.json();
    return data.message || "Status updated successfully.";
  } catch (error) {
    // Catch network or unexpected errors
    return `Request failed: ${error.message}`;
  }
};

export { getAllContacts, updatingContactStatus, deleteContact };
