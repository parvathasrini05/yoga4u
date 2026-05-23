import { useState } from "react";
import { motion } from "framer-motion";
import eventsData from "../data/eventsData";
import EventCard from "../components/EventCard";

export default function Events() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Beginner",
    "Fitness",
    "Therapy",
  ];

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter(
          (e) => e.category === filter
        );

  return (
    <div className="min-h-screen bg-[#FFF7F2] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">

        {/* BACKGROUND BLOBS */}
        <div
          className="
            absolute top-0 left-0
            w-80 h-80
            bg-[#B8B5FF]/20
            blur-3xl rounded-full
          "
        />

        <div
          className="
            absolute top-20 right-0
            w-80 h-80
            bg-[#FFB088]/20
            blur-3xl rounded-full
          "
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              bg-white/80
              backdrop-blur-xl
              border border-white
              shadow-md
              text-[#6C63FF]
              font-medium
              mb-6
            "
          >
            ✨ Wellness Programs
          </div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl md:text-6xl
              font-bold
              text-[#2F2F2F]
              leading-tight
            "
          >
            Explore Our Yoga
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#6C63FF]
                to-[#FFB088]
                bg-clip-text
                text-transparent
              "
            >
              Wellness Programs
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="
              mt-6
              text-lg
              text-[#666]
              max-w-2xl mx-auto
              leading-relaxed
            "
          >
            Discover personalized yoga, therapy,
            meditation, and wellness sessions
            crafted for a healthier and calmer life.
          </motion.p>

          {/* LINE */}
          <div
            className="
              w-28 h-1
              rounded-full
              bg-gradient-to-r
              from-[#6C63FF]
              to-[#FFB088]
              mx-auto mt-8
            "
          />
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="relative z-10 px-6">

        <div className="flex justify-center flex-wrap gap-4 mb-16">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-3
                rounded-full
                text-sm font-medium
                transition-all duration-300
                border
                ${
                  filter === cat
                    ? `
                      bg-gradient-to-r
                      from-[#6C63FF]
                      to-[#FFB088]
                      text-white
                      border-transparent
                      shadow-[0_10px_25px_rgba(108,99,255,0.25)]
                    `
                    : `
                      bg-white/90
                      backdrop-blur-xl
                      border-[#E9E4FF]
                      text-[#666]
                      hover:border-[#B8B5FF]
                      hover:text-[#6C63FF]
                      hover:shadow-md
                    `
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* EVENTS GRID */}
      <motion.section
        layout
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          pb-24
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </motion.section>

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 && (
        <div className="pb-24 text-center">
          <div
            className="
              inline-block
              bg-white
              px-10 py-8
              rounded-[32px]
              shadow-lg
              border border-[#F1F1F1]
            "
          >
            <h3 className="text-2xl font-bold text-[#2F2F2F]">
              No Programs Found
            </h3>

            <p className="text-[#777] mt-3">
              Try selecting another category.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}