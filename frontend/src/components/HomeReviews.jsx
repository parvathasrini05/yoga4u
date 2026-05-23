import reviews from "../data/reviews";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeReviews() {
  return (
    <section className="py-24 bg-[#FFF7F2]">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          {/* Top Label */}
          <p
            className="
            text-[#6C63FF]
            font-semibold
            tracking-wide
            mb-3
          "
          >
            HEALING STORIES
          </p>

          {/* Main Heading */}
          <h2
            className="
            text-4xl md:text-5xl
            font-bold
            text-[#2F2F2F]
            leading-tight
          "
          >
            Real Wellness Experiences
          </h2>

          {/* Description */}
          <p
            className="
            text-[#666]
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
            mt-5
          "
          >
            Discover inspiring stories from people
            who transformed their lives through yoga,
            therapy, mindfulness, and holistic healing.
          </p>

          {/* Gradient Line */}
          <div
            className="
            w-24 h-1
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            mx-auto
            rounded-full
            mt-6
          "
          />
        </motion.div>

        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.slice(0, 3).map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-14">

          <Link
            to="/healing-stories"
            className="
            inline-flex items-center gap-2
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            hover:opacity-90
            text-white
            px-7 py-3.5
            rounded-full
            font-medium
            shadow-lg
            transition-all duration-300
          "
          >
            View All Stories
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}