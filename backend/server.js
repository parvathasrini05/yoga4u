require("dotenv").config();
require("./cron/eventReminderCron");

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect MongoDB
connectDB();

// CORS configuration
const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/api/facts", require("./routes/factRoutes"));
require("./cron/factAutoCron");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/test", require("./routes/testRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("Yoga4U Backend Running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
