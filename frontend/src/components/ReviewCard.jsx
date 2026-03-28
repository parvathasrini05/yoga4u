import { motion } from "framer-motion";

export default function ReviewCard({ review }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
          {review.name?.[0]}
        </div>

        <div>
          <p className="font-semibold text-gray-900">
            {review.name}
          </p>
          <p className="text-yellow-400 text-sm">
            {"⭐".repeat(review.rating)}
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        {review.text}
      </p>
    </motion.div>
  );
}