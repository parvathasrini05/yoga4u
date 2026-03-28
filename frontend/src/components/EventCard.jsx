import { motion } from "framer-motion";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition"
    >
      <img
        src={event.image}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          {event.category}
        </span>

        <h3 className="text-xl font-semibold mt-3 text-gray-900">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          {event.description}
        </p>

        <div className="text-sm text-gray-500 mt-4 space-y-1">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
        </div>

        <button className="mt-5 w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600">
          Join Program
        </button>
      </div>
    </motion.div>
  );
}