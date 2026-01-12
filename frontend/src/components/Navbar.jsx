import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* LOGO + BRAND */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="YOGA4U Logo"
          className="h-10 w-auto"
        />
        <div className="leading-tight">
          <h1 className="text-xl font-semibold">
            YOGA4U WELLNESS CENTER
          </h1>
          <p className="text-xs text-green-200">
            Rejuvenating Mind, Body & Soul
          </p>
        </div>
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6 text-sm font-medium">
        
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "text-green-300" : "hover:text-green-300"
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "text-green-300" : "hover:text-green-300"
          }
        >
          Posts
        </NavLink>

        {/* ✅ Healing Stories added here */}
        <NavLink
          to="/healing-stories"
          className={({ isActive }) =>
            isActive ? "text-green-300" : "hover:text-green-300"
          }
        >
          Healing Stories
        </NavLink>

        {user?.role === "ADMIN" && (
          <NavLink
            to="/admin"
            className="px-3 py-1 rounded bg-green-700 hover:bg-green-600"
          >
            Admin
          </NavLink>
        )}

        {user ? (
          <button
            onClick={logout}
            className="border border-green-300 px-3 py-1 rounded hover:bg-green-700"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="hover:text-green-300">
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="bg-green-600 px-4 py-1 rounded hover:bg-green-500"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
