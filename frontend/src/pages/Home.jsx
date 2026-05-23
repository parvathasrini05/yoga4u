import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  HeartHandshake,
  Flower2,
} from "lucide-react";

import founder from "../assets/founder.jpg";
import HomeReviews from "../components/HomeReviews";

export default function Home() {
const navigate = useNavigate();
  const programs = [
    {
      title: "Therapeutic Yoga",
      image:
"https://images.unsplash.com/photo-1532798442725-41036acc7489?w=600&auto=format&fit=crop&q=60",
      description:
        "Personalized therapeutic yoga sessions focused on posture correction, flexibility, back pain relief, breathing improvement, and emotional wellness.",
      timings: "Morning & Evening Batches",
      fees: "Approx ₹3,000 – ₹5,000 / month",
    },

    {
      title: "Women’s Wellness Care",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
      description:
        "Prenatal yoga, hormonal wellness, postnatal recovery, restorative healing, stress relief, and guided breathing practices for holistic women’s health.",
      timings: "Customized Guided Sessions",
      fees: "Approx ₹3,500 – ₹6,000 / month",
    },

    {
      title: "Kids Yoga & Meditation",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Yoga and mindfulness programs that improve focus, flexibility, confidence, discipline, mental calmness, and healthy daily routines for children.",
      timings: "Morning, Evening & Online",
      fees: "Approx ₹1,000 – ₹3,000 / month",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#FFF7F2] to-[#F4F0FF] text-[#2F2F2F] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
          alt="Yoga"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Main */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-sm text-white mb-6">
              <Sparkles size={15} />
              Trusted Wellness Centre • 4.9★ Rated
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Transforming Lives Through <br />

              <span className="text-[#FFB088]">
                Therapeutic Yoga & Holistic Wellness
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl">
              Yoga4U Wellness Centre offers
              therapeutic yoga, rehabilitation,
              meditation, women’s wellness, and
              holistic healing programs tailored
              for all age groups.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                bg-gradient-to-r from-[#6C63FF] to-[#FFB088]
                hover:scale-105 active:scale-95
                text-white px-8 py-4 rounded-full
                font-medium flex items-center gap-2
                transition-all duration-300 shadow-2xl
              "
              >
                Explore Programs
                <ArrowRight size={18} />
              </button>

              
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-5 max-w-xl">

              {[
                { value: "4.9★", label: "Client Rating" },
                { value: "47+", label: "Years Experience" },
                { value: "100+", label: "Happy Members" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  rounded-3xl p-5
                "
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >

            <div
              className="
              bg-white/90 backdrop-blur-xl
              rounded-[32px]
              overflow-hidden
              shadow-2xl
              max-w-md ml-auto
            "
            >

              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
                alt="Yoga Session"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <div className="flex items-center gap-2 text-[#6C63FF] mb-4">
                  <Flower2 size={18} />
                  Holistic Wellness Programs
                </div>

                <h3 className="text-2xl font-bold leading-snug">
                  Personalized Therapeutic Yoga
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Guided wellness and healing programs
                  designed for physical health,
                  mindfulness, rehabilitation,
                  and emotional balance.
                </p>

                <button
                  className="
                  mt-6 w-full bg-[#2F2F2F]
                  hover:bg-black text-white
                  py-3 rounded-2xl
                  transition-all duration-300 font-medium
                "
                >
                  Join a Session
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-[#6C63FF] font-semibold mb-3">
              OUR PROGRAMS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Wellness Programs For Every Lifestyle
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Structured yoga and wellness programs
              designed for healing, mindfulness
              and healthy living.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid lg:grid-cols-3 gap-8">

            {programs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                bg-white/80 backdrop-blur-xl
                rounded-[30px]
                overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                border border-white/50
                flex flex-col
              "
              >

                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  <div
                    className="
                    w-12 h-12 rounded-2xl
                    bg-[#F4F0FF]
                    text-[#6C63FF]
                    flex items-center justify-center
                    mb-5
                  "
                  >
                    <HeartHandshake size={22} />
                  </div>

                  <h3 className="text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2">

                    <p className="text-[#6C63FF] font-semibold text-sm">
                      {item.timings}
                    </p>

                    <p className="text-gray-700 font-medium text-sm">
                      {item.fees}
                    </p>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      *Final fees are decided based on
                      instructor assessment and
                      customized wellness plans.
                    </p>
                  </div>

                  <button
                    className="
                    mt-6
                    bg-[#2F2F2F]
                    hover:bg-black
                    text-white
                    py-3 rounded-full
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    text-sm font-medium
                  "
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={founder}
              alt="Founder"
              className="
              rounded-[32px]
              shadow-2xl
              object-cover
              w-full
              max-h-[520px]
            "
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[#6C63FF] font-semibold mb-4">
              MEET OUR FOUNDER
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Dr. S. R. Kalaimathi
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Award-winning yoga therapist and wellness educator
              with over four decades of experience in
              therapeutic yoga, rehabilitation,
              and holistic healing practices.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              Her mission is to make wellness simple,
              accessible, and transformative for
              individuals across all age groups.
            </p>

            <button
            onClick={() => navigate("/about")}
              className="
              mt-8
              bg-[#2F2F2F]
              hover:bg-black
              text-white
              px-8 py-4
              rounded-full
              transition-all duration-300
            "
            >
              Read Full Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <HomeReviews />

      {/* FOOTER */}
      <footer className="bg-[#1E1B2E] text-white pt-20 pb-10 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold">
              Yoga4U
            </h2>

            <p className="text-[#CFCFCF] mt-4 leading-relaxed">
              Therapeutic yoga and holistic wellness
              programs guided by
              Dr. S. R. Kalaimathi.
            </p>

            <div className="mt-6 space-y-2 text-[#CFCFCF] text-sm">
              <p>Madhavaram Milk Colony, Chennai</p>
              <p>+91 XXXXX XXXXX</p>
              <p>Mon – Thu • 6 AM – 7 PM</p>
            </div>
          </div>

          {/* Site Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Site Links
            </h3>

            <div className="space-y-3 text-[#CFCFCF]">

              <p className="hover:text-white transition cursor-pointer">
                Home
              </p>

              <p className="hover:text-white transition cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Programs
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Reviews
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Contact
              </p>
            </div>
          </div>

          {/* Programs */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Programs
            </h3>

            <div className="space-y-3 text-[#CFCFCF] text-sm">

              <p>Therapeutic Yoga</p>
              <p>Women’s Wellness</p>
              <p>Kids Yoga</p>
              <p>Meditation</p>
              <p>Online Sessions</p>
            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-[#CFCFCF] text-sm">

              <p>Email : yoga4u@gmail.com</p>
              <p>Phone : +91 XXXXX XXXXX</p>
              <p>Chennai, Tamil Nadu</p>
              <p>Mon – Thu Active Sessions</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
          border-t border-white/10
          mt-14 pt-6
          text-center text-[#A5A5A5] text-sm
        "
        >
          © 2026 Yoga4U Wellness Centre •
          Designed for holistic wellness and mindful living.
        </div>
      </footer>
    </div>
  );
}