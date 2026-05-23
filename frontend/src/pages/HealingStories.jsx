import { motion } from "framer-motion";
import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
import { useNavigate } from "react-router-dom";
export default function HealingStories() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFF7F2] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#6C63FF]
            via-[#8E88FF]
            to-[#FFB088]
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* GLOW BLOBS */}
        <div
          className="
            absolute top-[-120px] left-[-80px]
            w-[420px] h-[420px]
            bg-white/10
            blur-[120px]
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-[-120px] right-[-80px]
            w-[400px] h-[400px]
            bg-[#FFD8C7]/20
            blur-[120px]
            rounded-full
          "
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-10
            max-w-4xl mx-auto
            text-center
            text-white
          "
        >

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              px-5 py-2
              rounded-full
              bg-white/15
              backdrop-blur-xl
              border border-white/20
              shadow-lg
              text-sm font-medium
              mb-7
            "
          >
            ✨ Real Wellness Journeys
          </div>

          {/* TITLE */}
          <h1
            className="
              text-5xl md:text-6xl
              font-bold
              leading-tight
              tracking-tight
            "
          >
            Healing Stories
            <br />

            <span className="text-[#FFF2EB]">
              From Our Community
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              text-lg md:text-xl
              text-white/85
              leading-relaxed
              max-w-2xl mx-auto
            "
          >
            Discover inspiring wellness journeys,
            recovery experiences, and transformation
            stories shared by our yoga community.
          </p>

          {/* LINE */}
          <div
            className="
              w-28 h-1
              rounded-full
              bg-white
              mx-auto mt-8
              opacity-80
            "
          />
        </motion.div>
      </section>

      {/* STORIES SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">

          <p className="text-[#6C63FF] font-semibold tracking-wide mb-3">
            COMMUNITY EXPERIENCES
          </p>

          <h2
            className="
              text-4xl md:text-5xl
              font-bold
              text-[#2F2F2F]
            "
          >
            Stories That Inspire
          </h2>

          <p
            className="
              mt-5
              text-[#666]
              max-w-2xl mx-auto
              leading-relaxed
            "
          >
            Every story reflects a journey of healing,
            mindfulness, emotional balance, and
            healthier living through yoga.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.5 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-24">

        <div
          className="
            max-w-5xl mx-auto
            rounded-[40px]
            overflow-hidden
            relative
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#FFB088]
            px-10 py-16
            text-center
            shadow-[0_20px_60px_rgba(108,99,255,0.18)]
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute top-0 right-0
              w-80 h-80
              bg-white/10
              blur-[100px]
              rounded-full
            "
          />

          <div className="relative z-10">

            <h2
              className="
                text-4xl md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Begin Your Wellness Journey
            </h2>

            <p
              className="
                mt-5
                text-white/85
                text-lg
                max-w-2xl mx-auto
                leading-relaxed
              "
            >
              Join our yoga and mindfulness community
              to experience better health, inner peace,
              and emotional wellbeing.
            </p>

            <button
  onClick={() => navigate("/events")}
  className="
    mt-8
    bg-white
    text-[#6C63FF]
    px-8 py-4
    rounded-full
    font-semibold
    shadow-xl
    hover:scale-105
    transition-all duration-300
  "
>
  Start Your Journey
</button>
          </div>
        </div>
      </section>
    </div>
  );
}