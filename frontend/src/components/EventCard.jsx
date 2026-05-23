import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
      bg-[#FFFFFF]
      rounded-[30px]
      overflow-hidden
      border border-[#F2F2F2]
      shadow-[0_6px_30px_rgba(0,0,0,0.05)]
      hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]
      transition-all duration-300
    "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="
          w-full h-60
          object-cover
          transition-transform duration-500
          hover:scale-105
        "
        />

        {/* Overlay */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/20
          to-transparent
        "
        />

        {/* CATEGORY */}
        <div
          className="
          absolute top-5 left-5
          bg-white/90 backdrop-blur-md
          text-[#6C63FF]
          text-xs font-medium
          px-4 py-2
          rounded-full
          shadow-sm
        "
        >
          {event.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">

        {/* TITLE */}
        <h3
          className="
          text-2xl
          font-bold
          text-[#2F2F2F]
          leading-snug
        "
        >
          {event.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
          text-[#666]
          text-[15px]
          leading-7
          mt-4
        "
        >
          {event.description}
        </p>

        {/* INFO */}
        <div className="mt-6 space-y-4">

          {/* DATE */}
          <div className="flex items-center gap-3">

            <div
              className="
              w-10 h-10
              rounded-xl
              bg-[#F4F0FF]
              text-[#6C63FF]
              flex items-center justify-center
            "
            >
              <CalendarDays size={18} />
            </div>

            <div>
              <p className="text-xs text-[#999]">
                Date
              </p>

              <p className="text-sm font-medium text-[#2F2F2F]">
                {event.date}
              </p>
            </div>
          </div>

          {/* TIME */}
          <div className="flex items-center gap-3">

            <div
              className="
              w-10 h-10
              rounded-xl
              bg-[#FFF1EA]
              text-[#FFB088]
              flex items-center justify-center
            "
            >
              <Clock3 size={18} />
            </div>

            <div>
              <p className="text-xs text-[#999]">
                Time
              </p>

              <p className="text-sm font-medium text-[#2F2F2F]">
                {event.time}
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3">

            <div
              className="
              w-10 h-10
              rounded-xl
              bg-[#F4F0FF]
              text-[#6C63FF]
              flex items-center justify-center
            "
            >
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-xs text-[#999]">
                Location
              </p>

              <p className="text-sm font-medium text-[#2F2F2F]">
                {event.location}
              </p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="
          mt-7
          w-full
          bg-gradient-to-r
          from-[#6C63FF]
          to-[#FFB088]
          hover:opacity-90
          text-white
          py-3.5
          rounded-2xl
          font-medium
          shadow-lg
          transition-all duration-300
        "
        >
          Join Program
        </button>
      </div>
    </motion.div>
  );
}