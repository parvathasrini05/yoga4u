import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Trophy,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {

  const cards = [
    {
      to: "/admin/events",
      title: "Programs & Events",
      desc: "Create, edit, and manage wellness programs and yoga sessions.",
      icon: <CalendarDays size={30} />,
      gradient: "from-[#6C63FF] to-[#8B84FF]",
    },
    {
      to: "/admin/posts",
      title: "Community Posts",
      desc: "Share achievements, transformations, and wellness moments.",
      icon: <Trophy size={30} />,
      gradient: "from-[#FFB088] to-[#FFC9A9]",
    },
    {
      to: "/admin/facts",
      title: "Daily Wellness Facts",
      desc: "Publish mindfulness tips and healthy lifestyle guidance.",
      icon: <Leaf size={30} />,
      gradient: "from-[#B8B5FF] to-[#D7D5FF]",
    },
  ];

  return (
    <div
      className="
      hidden md:block
      min-h-screen
      bg-[#FFF7F2]
      px-8 py-10
      relative overflow-hidden
    "
    >

      {/* BACKGROUND BLOBS */}
      <div
        className="
        absolute top-0 left-0
        w-96 h-96
        bg-[#B8B5FF]/20
        blur-3xl rounded-full
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-96 h-96
        bg-[#FFB088]/20
        blur-3xl rounded-full
      "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >

          <p
            className="
            text-[#6C63FF]
            font-semibold
            tracking-[0.2em]
            uppercase
            mb-4
          "
          >
            Admin Panel
          </p>

          <h1
            className="
            text-5xl
            font-bold
            text-[#2F2F2F]
            leading-tight
          "
          >
            Welcome Back Admin
          </h1>

          <p
            className="
            text-[#666]
            text-lg
            mt-5
            max-w-2xl
            leading-relaxed
          "
          >
            Manage yoga programs, community content,
            and wellness updates through your
            premium dashboard experience.
          </p>

          {/* LINE */}
          <div
            className="
            w-28 h-1
            rounded-full
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            mt-7
          "
          />
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >

              <Link
                to={card.to}
                className="
                group
                block
                bg-white/80
                backdrop-blur-xl
                border border-white
                rounded-[34px]
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_60px_rgba(108,99,255,0.12)]
                transition-all duration-500
                hover:-translate-y-2
                h-full
              "
              >

                {/* ICON */}
                <div
                  className={`
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${card.gradient}
                  flex items-center justify-center
                  text-white
                  shadow-lg
                `}
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3
                  className="
                  mt-7
                  text-2xl
                  font-bold
                  text-[#2F2F2F]
                "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  mt-4
                  text-[#666]
                  leading-7
                "
                >
                  {card.desc}
                </p>

                {/* BUTTON */}
                <div
                  className="
                  mt-8
                  flex items-center gap-2
                  text-[#6C63FF]
                  font-semibold
                  group-hover:gap-4
                  transition-all duration-300
                "
                >
                  Manage Now

                  <ArrowRight size={18} />
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}