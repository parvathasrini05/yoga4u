import { NavLink } from "react-router-dom";

export default function AdminBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-3 md:hidden z-50">
      {[
        { to: "/admin/events", icon: "📅", label: "Events" },
        { to: "/admin/posts", icon: "🏆", label: "Posts" },
        { to: "/admin/facts", icon: "🌿", label: "Facts" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive
                ? "text-green-700 font-semibold"
                : "text-gray-500"
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
