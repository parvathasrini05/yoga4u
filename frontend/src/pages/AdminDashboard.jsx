import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="hidden md:block p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Admin Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Choose what you want to manage
      </p>

      <div className="grid grid-cols-3 gap-6">
        {[
          {
            to: "/admin/events",
            title: "📅 Events",
            desc: "Create and manage yoga events",
          },
          {
            to: "/admin/posts",
            title: "🏆 Posts",
            desc: "Share achievements & moments",
          },
          {
            to: "/admin/facts",
            title: "🌿 Daily Facts",
            desc: "Send wellness tips to users",
          },
        ].map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
