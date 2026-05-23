import WellnessSpin from "../components/WellnessSpin";

export default function Wellness() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF7F2] to-[#F8FAFC] overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Header Section */}
      <div className="relative text-center pt-20 px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Wellness Journey Spinner
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Discover daily wellness activities like meditation, hydration,
          yoga, and mindfulness practices to improve your lifestyle step by step.
        </p>

        {/* badge */}
        <div className="mt-6 inline-block bg-white shadow px-5 py-2 rounded-full text-sm text-purple-600 font-medium">
          🌿 One Spin = One Healthy Habit
        </div>
      </div>

      {/* Spin Section */}
      <div className="relative flex justify-center items-center mt-16 pb-24">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10">
          <WellnessSpin />
        </div>
      </div>

    </div>
  );
}