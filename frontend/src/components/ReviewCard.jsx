export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-4 mb-3">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
            {review.name?.[0] || "U"}
          </div>
        )}

        <div>
          <p className="font-semibold text-gray-800">{review.name}</p>
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {"⭐".repeat(Number(review.rating) || 0)}
            <span className="ml-1 text-xs text-gray-500">Google</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        {review.text}
      </p>
    </div>
  );
}
