import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-primary mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        <li><Link to="/admin/events">Manage Events</Link></li>
        <li><Link to="/admin/posts">Manage Posts</Link></li>
        <li><Link to="/admin/facts">Manage Facts</Link></li>
      </ul>
    </div>
  );
}
