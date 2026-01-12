export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      {post.image && (
        <img
          src={`http://localhost:5000${post.image}`}
          className="rounded mb-2"
        />
      )}
      <p>{post.caption}</p>
      <p className="text-sm text-gray-500 mt-1">
        By {post.createdBy?.name}
      </p>
    </div>
  );
}
