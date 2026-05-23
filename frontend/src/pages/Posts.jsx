import { useState } from "react";
import postsData from "../data/postsData";
import PostCard from "../components/PostCard";

export default function Posts() {
  const [posts] = useState(postsData);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF7F2] to-[#F8FAFC] overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* HEADER */}
      <section className="relative py-20 text-center z-10">
        <h1 className="text-5xl font-bold text-gray-900">
          Community Stories
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Real transformations, daily inspiration, and wellness journeys from the Yoga4U community.
        </p>

        {/* highlight badge */}
        <div className="mt-6 inline-block bg-white shadow px-5 py-2 rounded-full text-sm text-purple-600 font-medium">
          🧘‍♀️ Healing • Growth • Mindfulness
        </div>
      </section>

      {/* POSTS GRID */}
      <div className="relative max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">

        {posts.map((post) => (
          <div
            key={post.id}
            className="transform hover:scale-[1.03] transition duration-300"
          >
            <PostCard post={post} />
          </div>
        ))}

      </div>
    </div>
  );
}