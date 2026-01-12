import reviews from "../data/reviews";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

export default function HomeReviews() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-800 mb-3 text-center">
          🌿 Healing Stories
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Real experiences from people who trusted their wellness journey with us
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/healing-stories"
            className="inline-block text-green-700 font-semibold hover:underline"
          >
            Read more healing stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
