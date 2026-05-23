import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartHandshake } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Programs" },
    { to: "/posts", label: "Community" },
    { to: "/healing-stories", label: "Stories" },
    { to: "/wellness", label: "Wellness" },
    { to: "/about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#F2F2F2] shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="h-12 w-auto flex items-center justify-center">
              {logo ? (
                <img
                  src={logo}
                  alt="YOGA4U Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <HeartHandshake className="text-[#6C63FF] w-8 h-8" />
              )}
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-wide text-[#2F2F2F] leading-tight">
                YOGA4U <span className="text-[#6C63FF]">WELLNESS CENTRE </span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#777] font-semibold">
                Therapy Centre
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition-all duration-300 ${
                    isActive ? "text-[#6C63FF]" : "text-[#555] hover:text-[#6C63FF]"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#6C63FF] to-[#FFB088] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            ))}

            {/* ADMIN BUTTON */}
            {user?.role === "ADMIN" && (
              <NavLink
                to="/admin"
                className="px-5 py-2.5 rounded-full bg-[#2F2F2F] hover:bg-black text-white text-sm font-medium transition-all duration-300"
              >
                Admin
              </NavLink>
            )}

            {/* AUTH BUTTON */}
            {user ? (
              <button
                onClick={logout}
                className="px-5 py-2.5 rounded-full border border-[#E5E5E5] text-[#444] hover:bg-[#F8F8F8] transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/register"
                className="bg-gradient-to-r from-[#6C63FF] to-[#FFB088] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
              >
                Join Now
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-xl bg-[#F7F4FF] flex items-center justify-center"
          >
            {open ? <X className="text-[#2F2F2F]" size={22} /> : <Menu className="text-[#2F2F2F]" size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#F2F2F2] shadow-xl"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium transition-all duration-300 ${
                      isActive ? "text-[#6C63FF]" : "text-[#555] hover:text-[#6C63FF]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {user?.role === "ADMIN" && (
                <NavLink
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-[#2F2F2F] text-white py-3 rounded-full font-medium"
                >
                  Admin Panel
                </NavLink>
              )}

              {user ? (
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="w-full border border-[#E5E5E5] py-3 rounded-full text-[#444] hover:bg-[#F8F8F8] transition-all duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-gradient-to-r from-[#6C63FF] to-[#FFB088] text-white py-3 rounded-full font-medium shadow-md"
                >
                  Join Now
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}