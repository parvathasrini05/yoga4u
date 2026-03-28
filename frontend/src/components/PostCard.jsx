import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <img
        src={post.image}
        className="w-full h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-gray-800 font-medium leading-relaxed">
          {post.caption}
        </p>

        {/* META */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>By {post.createdBy?.name}</span>
          <span>{post.date}</span>
        </div>

        {/* LIKES */}
        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <Heart size={16} />
          <span>{post.likes} likes</span>
        </div>
      </div>
    </motion.div>
  );
}