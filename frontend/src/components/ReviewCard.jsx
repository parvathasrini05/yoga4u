import { motion } from "framer-motion";

export default function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
      bg-[#FFFFFF]
      rounded-[28px]
      p-7
      border border-[#F1F1F1]
      shadow-[0_6px_30px_rgba(0,0,0,0.05)]
      hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]
      transition-all duration-300
    "
    >

      {/* TOP */}
      <div className="flex items-center gap-4 mb-5">

        {/* PROFILE */}
        <div
          className="
          w-14 h-14
          rounded-full
          bg-gradient-to-br
          from-[#6C63FF]
          to-[#FFB088]
          flex items-center justify-center
          text-white
          font-semibold
          text-lg
          shadow-md
        "
        >
          {review.name?.[0]}
        </div>

        {/* NAME + RATING */}
        <div>

          <h3
            className="
            font-semibold
            text-[#2F2F2F]
            text-lg
          "
          >
            {review.name}
          </h3>

          <div
            className="
            flex items-center gap-1
            mt-1
            text-[#FFB088]
            text-sm
          "
          >
            {"⭐".repeat(review.rating)}
          </div>
        </div>
      </div>

      {/* REVIEW TEXT */}
      <p
        className="
        text-[#666]
        leading-8
        text-[15px]
      "
      >
        {review.text}
      </p>

      {/* Bottom Accent */}
      <div
        className="
        mt-6
        w-16 h-1
        rounded-full
        bg-gradient-to-r
        from-[#6C63FF]
        to-[#FFB088]
      "
      />
    </motion.div>
  );
}