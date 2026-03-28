import { useState } from "react";
import { motion } from "framer-motion";
import eventsData from "../data/eventsData";
import EventCard from "../components/EventCard";

export default function Events() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Beginner", "Fitness", "Therapy"];

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === filter);

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Explore Our Yoga Programs
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Choose from a variety of yoga sessions designed for your lifestyle.
        </p>
      </section>

      {/* FILTERS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              filter === cat
                ? "bg-emerald-500 text-white"
                : "bg-white border border-gray-200 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* EVENTS GRID */}
      <motion.div
        layout
        className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </div>
  );
}