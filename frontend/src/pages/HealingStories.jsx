import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

export default function HealingStories() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🌿 Healing Stories
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          These stories reflect the real journeys of healing, recovery, and
          transformation shared by our community.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
