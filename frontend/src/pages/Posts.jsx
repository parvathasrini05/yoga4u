import { useState } from "react";
import postsData from "../data/postsData";
import PostCard from "../components/PostCard";

export default function Posts() {
  const [posts] = useState(postsData);

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* HEADER */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Community Stories
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Real journeys, achievements, and moments from our yoga community.
        </p>
      </section>

      {/* POSTS GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}