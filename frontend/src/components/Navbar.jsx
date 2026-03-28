import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="flex items-center gap-8 text-sm font-medium text-gray-700">

  <NavLink
    to="/events"
    className={({ isActive }) =>
      isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-600 transition"
    }
  >
    Events
  </NavLink>

  <NavLink
    to="/posts"
    className={({ isActive }) =>
      isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-600 transition"
    }
  >
    Posts
  </NavLink>

  <NavLink
    to="/healing-stories"
    className={({ isActive }) =>
      isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-600 transition"
    }
  >
    Stories
  </NavLink>

  {/* ✅ NEW WELLNESS LINK */}
  <NavLink
    to="/wellness"
    className={({ isActive }) =>
      isActive
        ? "text-emerald-600 font-semibold"
        : "hover:text-emerald-600 transition"
    }
  >
    Wellness
  </NavLink>

  {user?.role === "ADMIN" && (
    <NavLink
      to="/admin"
      className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-black"
    >
      Admin
    </NavLink>
  )}

  {user ? (
    <button
      onClick={logout}
      className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
    >
      Logout
    </button>
  ) : (
    <NavLink
      to="/login"
      className="bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition"
    >
      Get Started
    </NavLink>
  )}
</div>
    </motion.nav>
  );
}