import { useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      login(data);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        alt="calm yoga meditation"
      />

      {/* Gradient Overlay (premium feel) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-purple-900/40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center text-[#2F2F2F] mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mb-6 text-sm">
            Login to continue your Yoga4U wellness journey
          </p>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-purple-600 cursor-pointer font-medium"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}