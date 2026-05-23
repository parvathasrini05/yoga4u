import { NavLink } from "react-router-dom";
import { CalendarDays, Trophy, Leaf } from "lucide-react";

export default function AdminBottomNav() {

  const navItems = [
    {
      to: "/admin/events",
      icon: <CalendarDays size={20} />,
      label: "Events",
    },
    {
      to: "/admin/posts",
      icon: <Trophy size={20} />,
      label: "Posts",
    },
    {
      to: "/admin/facts",
      icon: <Leaf size={20} />,
      label: "Facts",
    },
  ];

  return (
    <nav
      className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      w-[92%] max-w-md
      bg-white/90
      backdrop-blur-2xl
      border border-white/60
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      rounded-[28px]
      px-3 py-3
      flex justify-around items-center
      md:hidden
      z-50
    "
    >

      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `
            relative
            flex flex-col items-center justify-center
            gap-1
            px-5 py-2.5
            rounded-2xl
            transition-all duration-300
            ${
              isActive
                ? `
                  bg-gradient-to-r
                  from-[#6C63FF]
                  to-[#FFB088]
                  text-white
                  shadow-lg
                `
                : `
                  text-[#777]
                  hover:text-[#6C63FF]
                  hover:bg-[#F4F0FF]
                `
            }
          `
          }
        >
          {item.icon}

          <span className="text-[11px] font-semibold tracking-wide">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}