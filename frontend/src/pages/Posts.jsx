import { useEffect, useState } from "react";
import api from "../api/axios";
import PostCard from "../components/PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-4">
      {posts.map(p => <PostCard key={p._id} post={p} />)}
    </div>
  );
}
