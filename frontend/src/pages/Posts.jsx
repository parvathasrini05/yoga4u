import { useState, useEffect } from "react";
import api from "../api/axios"; // Adjust path to your axios.js
import PostCard from "../components/PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading Posts...</div>;
  }

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center text-[#2F2F2F] mb-12">
        Community <span className="text-[#FFB088]">Achievements</span>
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts to display.</p>
        )}
      </div>
    </div>
  );
}