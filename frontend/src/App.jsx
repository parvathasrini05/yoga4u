import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

/* Public Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Posts from "./pages/Posts";
import About from "./pages/About";

/* Admin Pages */
import AdminDashboard from "./pages/AdminDashboard";
import AdminEvents from "./pages/AdminEvents";
import AdminPosts from "./pages/AdminPosts";
import AdminFacts from "./pages/AdminFacts";

export default function App() {
  return (
    <>
      {/* Top Navbar (Public + User only) */}
      <Navbar />

      <Routes>
        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ---------- USER ROUTES ---------- */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>

        {/* ---------- ADMIN ROUTES ---------- */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/facts" element={<AdminFacts />} />
        </Route>
      </Routes>
    </>
  );
}
