import { useState } from "react";
import api from "../api/axios"; 
import { Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes?.length || 0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  const imageUrl = post.image ? `http://localhost:5000${post.image}` : "/placeholder-post.jpg";

  const handleLike = async () => {
    try {
      const response = await api.post(`/posts/${post._id}/like`);
      setLikes(response.data.likes); 
    } catch (err) {
      alert("Please login to like this post");
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/posts/${post._id}/comment`, { text: commentText });
      setCommentText("");
      setShowCommentInput(false);
      alert("Comment added!"); 
    } catch (err) {
      alert("Failed to comment");
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-[28px] overflow-hidden border border-[#F1F1F1] shadow-lg p-6"
    >
      {/* IMAGE */}
      <img
        src={imageUrl}
        alt="Post"
        className="w-full h-60 object-cover rounded-2xl mb-4"
      />

      {/* CAPTION */}
      <p className="text-[#2F2F2F] text-[16px] leading-7 font-medium mb-4">
        {post.caption}
      </p>

      {/* INTERACTION BUTTONS */}
      <div className="flex items-center gap-4 mt-5">
        <button 
          onClick={handleLike}
          className="flex items-center gap-2 text-[#6C63FF] bg-[#F7F4FF] px-4 py-2 rounded-full hover:bg-[#EAE0FF] transition"
        >
          <Heart size={18} className={likes > 0 ? "fill-[#FFB088]" : ""} />
          <span className="text-sm font-medium">{likes} Likes</span>
        </button>

        <button 
          onClick={() => setShowCommentInput(!showCommentInput)}
          className="flex items-center gap-2 text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-full transition"
        >
          <MessageCircle size={18} />
          Comment
        </button>
      </div>

      {/* COMMENT INPUT */}
      {showCommentInput && (
        <form onSubmit={handleComment} className="mt-4 flex gap-2">
          <input 
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <button type="submit" className="bg-[#6C63FF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#5b52e0]">
            Post
          </button>
        </form>
      )}
    </motion.div>
  );
}