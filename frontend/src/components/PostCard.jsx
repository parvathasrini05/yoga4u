import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
      bg-white
      rounded-[28px]
      overflow-hidden
      border border-[#F1F1F1]
      shadow-[0_6px_30px_rgba(0,0,0,0.05)]
      hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]
      transition-all duration-300
    "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={post.image}
          alt="Post"
          className="
          w-full h-60
          object-cover
          transition-transform duration-500
          hover:scale-105
        "
        />

        {/* Soft Gradient Overlay */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/20
          to-transparent
        "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* Caption */}
        <p
          className="
          text-[#2F2F2F]
          text-[16px]
          leading-7
          font-medium
        "
        >
          {post.caption}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#F1F1F1] my-5" />

        {/* Footer */}
        <div className="flex items-center justify-between">

          {/* User */}
          <div>

            <p className="text-sm text-[#888]">
              Posted by
            </p>

            <h4 className="text-[#2F2F2F] font-semibold mt-1">
              {post.createdBy?.name || "Yoga4U Member"}
            </h4>
          </div>

          {/* Date */}
          <div className="text-right">

            <p className="text-sm text-[#999]">
              {post.date}
            </p>
          </div>
        </div>

        {/* Likes */}
        <div
          className="
          mt-5
          flex items-center gap-2
          text-[#6C63FF]
          bg-[#F7F4FF]
          w-fit
          px-4 py-2
          rounded-full
        "
        >

          <Heart
            size={16}
            className="fill-[#FFB088] text-[#FFB088]"
          />

          <span className="text-sm font-medium">
            {post.likes} Likes
          </span>
        </div>
      </div>
    </motion.div>
  );
}