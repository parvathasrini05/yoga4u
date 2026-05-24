import api from "../api/axios";
import AdminLayout from "../components/AdminLayout";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ImagePlus,
  Link2,
  Users,
} from "lucide-react";

export default function AdminEvents() {
  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      // Added headers for file upload handling
      await api.post("/events", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Event published successfully");
      e.target.reset();
    } catch (error) {
      console.error("Error creating event:", error);
      alert(
        error.response?.data?.message ||
          "❌ Failed to publish event. Please try again."
      );
    }
  };

  return (
    <AdminLayout
      title="Create New Event"
      subtitle="Publish premium wellness programs and yoga sessions for your community"
    >
      <motion.form
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={submit}
        className="
        max-w-4xl mx-auto
        bg-white/80
        backdrop-blur-2xl
        rounded-[36px]
        border border-white
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
        overflow-hidden
      "
      >
        {/* TOP HEADER */}
        <div
          className="
          px-8 py-7
          bg-gradient-to-r
          from-[#6C63FF]
          to-[#FFB088]
          text-white
        "
        >
          <h2 className="text-3xl font-bold">Wellness Event Details</h2>

          <p className="mt-2 text-white/90">
            Fill all the required information carefully before publishing.
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* EVENT INFO */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <CalendarDays className="text-[#6C63FF]" size={22} />

              <h3 className="text-xl font-bold text-[#2F2F2F]">
                Event Information
              </h3>
            </div>

            {/* TITLE */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#444]">
                Event Title
              </label>

              <input
                name="title"
                required
                placeholder="Morning Yoga for Beginners"
                className="
                w-full
                rounded-2xl
                border border-[#EAEAEA]
                bg-[#FFFDFB]
                px-5 py-4
                text-[#2F2F2F]
                placeholder:text-[#999]
                focus:outline-none
                focus:ring-2
                focus:ring-[#6C63FF]
                transition-all
              "
              />
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#444]">
                Event Description
              </label>

              <textarea
                name="description"
                rows={5}
                required
                placeholder="Briefly explain what this wellness session is about..."
                className="
                w-full
                rounded-2xl
                border border-[#EAEAEA]
                bg-[#FFFDFB]
                px-5 py-4
                resize-none
                text-[#2F2F2F]
                placeholder:text-[#999]
                focus:outline-none
                focus:ring-2
                focus:ring-[#6C63FF]
                transition-all
              "
              />
            </div>

            {/* AGE GROUP */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#444]">
                <Users size={16} />
                Age Group
              </label>

              <select
                name="ageGroup"
                required
                className="
                w-full
                rounded-2xl
                border border-[#EAEAEA]
                bg-[#FFFDFB]
                px-5 py-4
                text-[#2F2F2F]
                focus:outline-none
                focus:ring-2
                focus:ring-[#6C63FF]
                transition-all
              "
              >
                <option value="">Select age group</option>
                <option value="Kids">Kids</option>
                <option value="Teens">Teens</option>
                <option value="18-40">18–40</option>
                <option value="40+">40+</option>
                <option value="All">All Ages</option>
              </select>
            </div>
          </section>

          {/* SCHEDULE */}
          <section
            className="
            bg-[#FAF8FF]
            border border-[#ECE9FF]
            rounded-[28px]
            p-6
            space-y-5
          "
          >
            <div className="flex items-center gap-3">
              <Clock3 className="text-[#6C63FF]" size={22} />

              <h3 className="text-xl font-bold text-[#2F2F2F]">
                Schedule & Location
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* DATE */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#444]">
                  Event Date
                </label>

                <input
                  name="date"
                  type="date"
                  required
                  className="
                  w-full
                  rounded-2xl
                  border border-[#EAEAEA]
                  bg-white
                  px-4 py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#6C63FF]
                "
                />
              </div>

              {/* TIME */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#444]">
                  Event Time
                </label>

                <input
                  name="time"
                  required
                  placeholder="6:00 AM – 7:00 AM"
                  className="
                  w-full
                  rounded-2xl
                  border border-[#EAEAEA]
                  bg-white
                  px-4 py-4
                  placeholder:text-[#999]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#6C63FF]
                "
                />
              </div>

              {/* LOCATION */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#444]">
                  <MapPin size={16} />
                  Location
                </label>

                <input
                  name="location"
                  required
                  placeholder="Yoga4U Center, Chennai"
                  className="
                  w-full
                  rounded-2xl
                  border border-[#EAEAEA]
                  bg-white
                  px-4 py-4
                  placeholder:text-[#999]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#6C63FF]
                "
                />
              </div>
            </div>
          </section>

          {/* REGISTRATION */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Link2 className="text-[#FFB088]" size={22} />

              <h3 className="text-xl font-bold text-[#2F2F2F]">Registration</h3>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#444]">
                Google Form Link
              </label>

              <input
                name="googleFormLink"
                required
                placeholder="Paste registration form link here"
                className="
                w-full
                rounded-2xl
                border border-[#EAEAEA]
                bg-[#FFFDFB]
                px-5 py-4
                placeholder:text-[#999]
                focus:outline-none
                focus:ring-2
                focus:ring-[#6C63FF]
              "
              />
            </div>
          </section>

          {/* IMAGE */}
          <section
            className="
            border-2 border-dashed
            border-[#DCD7FF]
            rounded-[28px]
            p-8
            bg-[#FCFBFF]
          "
          >
            <div className="flex items-center gap-3 mb-4">
              <ImagePlus className="text-[#6C63FF]" size={24} />

              <h3 className="text-xl font-bold text-[#2F2F2F]">Event Poster</h3>
            </div>

            <p className="text-[#666] mb-6 leading-relaxed">
              Upload a high-quality poster or wellness image to make your event
              more attractive.
            </p>

            <input
              name="pamphletImage"
              type="file"
              required
              className="
              block w-full text-sm text-[#555]
              file:mr-4
              file:px-6
              file:py-3
              file:rounded-full
              file:border-0
              file:font-medium
              file:bg-gradient-to-r
              file:from-[#6C63FF]
              file:to-[#FFB088]
              file:text-white
              hover:file:opacity-90
              cursor-pointer
            "
            />
          </section>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
            w-full
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            hover:opacity-90
            text-white
            py-4
            rounded-2xl
            text-lg
            font-semibold
            shadow-[0_10px_35px_rgba(108,99,255,0.25)]
            transition-all duration-300
          "
          >
            Publish Event
          </button>
        </div>
      </motion.form>
    </AdminLayout>
  );
}