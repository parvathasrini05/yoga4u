import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import founder from "../assets/founder.jpg";
import HomeReviews from "../components/HomeReviews";

export default function Home() {
  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a]" />

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full top-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-6xl font-bold leading-tight">
            Transform Your Life <br /> Through Yoga
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Experience holistic wellness with guided yoga sessions,
            therapy programs, and mindful living practices.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
              Explore Programs <ArrowRight size={18} />
            </button>

            <button className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Weight Loss Yoga",
            "Therapy & Healing",
            "Meditation & Mindfulness",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-600 text-sm">
                Personalized sessions designed for your body and mind.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT FOUNDER */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src={founder}
            alt="Founder"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>

            <p className="text-gray-600 mb-4">
              With over 30+ years of experience, Dr. Kalaimathi has helped
              thousands achieve balance, healing, and wellness.
            </p>

            <p className="text-gray-600">
              Her mission is to transform lives through yoga, therapy,
              and mindful living practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <HomeReviews />

      {/* CONTACT */}
      <section className="bg-[#f1f5f9] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>

            <p className="text-gray-600">YOGA4U Wellness Center</p>
            <p className="text-gray-600">Puduvayal, Tamil Nadu</p>
            <p className="text-gray-600">+91 XXXXX XXXXX</p>

            <p className="text-gray-400 text-sm mt-4">
              Therapy • Wellness • Mindfulness
            </p>
          </div>

          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Location"
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}