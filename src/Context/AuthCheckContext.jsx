import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create Context
const AuthContext = createContext();

// 2️⃣ Create Provider component
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token); // true if token exists
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
