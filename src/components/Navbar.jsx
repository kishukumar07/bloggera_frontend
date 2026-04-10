import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthCheckContext";
import { logout } from "../utils/logout";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const { authenticated, setAuthenticated } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Button styles (consistent UI)
  const btnPrimary =
    "px-3 py-1.5 border border-grey-500 font-serif text-white hover:bg-white hover:text-black rounded  text-sm";
  

  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      localStorage.removeItem("token");
      setAuthenticated(false);
      navigate("/");
    } else {
      alert("Login first");
      navigate("/");
    }
  };

  // Check admin role
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (authenticated && token) {
      try {
        const role = jwtDecode(token).role;
        setIsAdmin(role === "admin");
      } catch (e) {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, [authenticated]);

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-[#0f0f0f] border-b shadow-md">
      
      {/* Left - Logo */}
      <div className="flex items-center gap-3">
        <img className="w-10 h-10" src="/logo.png" alt="logo" />
        <Link
          to="/"
          className="text-2xl   bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-serif "
        >
          Bloggera
        </Link>
      </div>

      {/* Center - Navigation */}
      <div className="hidden md:flex gap-6 text-gray-300 font-medium">
        {isAdmin ? (
          <Link
            className="hover:text-orange-400 transition"
            to="/admindashboard"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link className="hover:text-orange-400 transition font-serif" to="/">
              Home
            </Link>
            <Link className="hover:text-orange-400 transition font-serif" to="/about">
              About
            </Link>
            <Link className="hover:text-orange-400 transition font-serif" to="/contact">
              Contact
            </Link>
          </>
        )}
      </div>

      {/* Right - Auth */}
      {!authenticated ? (
        <div className="flex gap-2">

          <Link to="/register" replace className={btnPrimary}>
            Register
          </Link>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            className={btnPrimary}
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;