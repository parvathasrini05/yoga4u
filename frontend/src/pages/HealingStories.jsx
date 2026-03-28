import { motion } from "framer-motion";
import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

export default function HealingStories() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* HERO */}
      <section className="relative py-24 text-center overflow-hidden">
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a]" />

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[120px] rounded-full top-[-100px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl font-bold">
            Healing Stories
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Real journeys of transformation, recovery, and wellness
            from our yoga community.
          </p>
        </motion.div>
      </section>

      {/* REVIEWS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

      </section>
    </div>
  );
}