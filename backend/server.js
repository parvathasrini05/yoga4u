require("dotenv").config();
require("./cron/eventReminderCron");
const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/facts", require("./routes/factRoutes"));
require("./cron/factAutoCron");

const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);

app.use("/api/posts", require("./routes/postRoutes"));

app.use("/api/events", require("./routes/eventRoutes"));

app.use("/api/test", require("./routes/testRoutes"));


app.get("/", (req, res) => {
  res.send("Yoga4U Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
