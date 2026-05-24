import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../api/axios"; // ✅ Pointed to your custom Axios instance
import EventCard from "../components/EventCard";

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [events, setEvents] = useState([]); // ✅ Replaces static eventsData
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Beginner", "Fitness", "Therapy"];

  // ✅ Fetch events from the backend when the page loads
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events");
        setEvents(response.data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Filter based on the fetched data
  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((e) => e.category === filter);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center text-[#6C63FF] font-bold">Loading Programs...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFF7F2] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#B8B5FF]/20 blur-3xl rounded-full" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#FFB088]/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-md text-[#6C63FF] font-medium mb-6">
            ✨ Wellness Programs
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-[#2F2F2F] leading-tight"
          >
            Explore Our Yoga
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FFB088] bg-clip-text text-transparent">
              Wellness Programs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-[#666] max-w-2xl mx-auto leading-relaxed"
          >
            Discover personalized yoga, therapy, meditation, and wellness sessions
            crafted for a healthier and calmer life.
          </motion.p>

          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#FFB088] mx-auto mt-8" />
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
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#6C63FF] to-[#FFB088] text-white border-transparent shadow-[0_10px_25px_rgba(108,99,255,0.25)]"
                    : "bg-white/90 backdrop-blur-xl border-[#E9E4FF] text-[#666] hover:border-[#B8B5FF] hover:text-[#6C63FF] hover:shadow-md"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <motion.section
        layout
        className="relative z-10 max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredEvents.map((event) => (
          // ✅ Changed event.id to event._id to match MongoDB
          <EventCard key={event._id} event={event} /> 
        ))}
      </motion.section>

      {/* WHO CAN JOIN SECTION (FIXED POSITION) */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F]">
            Who Can Join <span className="text-[#6C63FF]">Yoga4U Wellness?</span>
          </h2>
          <p className="mt-5 text-[#666] max-w-3xl mx-auto leading-relaxed">
            Our programs are thoughtfully designed for every age group, lifestyle,
            and wellness goal. Whether you are a beginner or seeking deep healing,
            there is something for you.
          </p>

          {/* CARDS */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Beginners */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Absolute Beginners</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• No prior yoga experience needed</li>
                <li>• Step-by-step guided learning</li>
                <li>• Gentle introduction to yoga basics</li>
                <li>• Safe & comfortable practice sessions</li>
              </ul>
            </div>
            {/* Seniors */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Seniors & Elderly Care</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• Low-impact gentle yoga</li>
                <li>• Joint mobility & balance improvement</li>
                <li>• Pain relief & stiffness reduction</li>
                <li>• Breath-based relaxation techniques</li>
              </ul>
            </div>
            {/* Women */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Women’s Wellness</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• Prenatal & postnatal yoga care</li>
                <li>• Hormonal balance support</li>
                <li>• Stress & fatigue relief</li>
                <li>• Emotional wellness practices</li>
              </ul>
            </div>
            {/* Therapy */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Pain & Therapy Care</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• Back & neck pain management</li>
                <li>• Posture correction therapy</li>
                <li>• Stress & anxiety relief</li>
                <li>• Breathing rehabilitation techniques</li>
              </ul>
            </div>
            {/* Kids */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Kids (5–12 Years)</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• Fun yoga & movement activities</li>
                <li>• Focus & concentration building</li>
                <li>• Confidence & discipline growth</li>
                <li>• Healthy routine development</li>
              </ul>
            </div>
            {/* Fitness */}
            <div className="bg-white rounded-[28px] p-7 shadow-lg border border-[#F1F1F1]">
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-4">Fitness & Lifestyle</h3>
              <ul className="space-y-2 text-[#666] text-[15px]">
                <li>• Strength & endurance building</li>
                <li>• Weight management programs</li>
                <li>• Vinyasa & power yoga flows</li>
                <li>• Energy & stamina improvement</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14">
            <button className="px-10 py-4 bg-gradient-to-r from-[#6C63FF] to-[#FFB088] text-white rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300">
              Start Even If You Are a Beginner
            </button>
          </div>
        </div>
      </section>

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 && (
        <div className="pb-24 text-center">
          <div className="inline-block bg-white px-10 py-8 rounded-[32px] shadow-lg border border-[#F1F1F1]">
            <h3 className="text-2xl font-bold text-[#2F2F2F]">No Programs Found</h3>
            <p className="text-[#777] mt-3">Try selecting another category.</p>
          </div>
        </div>
      )}
    </div>
  );
}