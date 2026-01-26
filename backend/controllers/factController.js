const Fact = require("../models/Fact");
const User = require("../models/User");
const { sendBulkEmail } = require("../utils/emailHelpers");

// 🟢 Admin: Add Fact Manually
exports.addFact = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const exists = await Fact.findOne({ date: today });
    if (exists) {
      return res.status(400).json({ message: "Fact already exists for today" });
    }

    const fact = await Fact.create({
      text: req.body.fact,
      source: "ADMIN",
      date: today,
    });

    const users = await User.find({}, "email");

    // 📧 Send Fact Email
    await sendBulkEmail(
      users,
      "🌿 Fact of the Day",
      "factOfTheDay",
      {
        fact: fact.text   // ✅ MUST match {{fact}}
      }
    );

    res.status(201).json(fact);
  } catch (error) {
  console.error("🔥 FACT ERROR FULL STACK:", error);
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

};

// 👀 Get today’s fact
exports.getTodayFact = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];
  const fact = await Fact.findOne({ date: today });

  if (!fact) return res.json({ message: "No fact available today" });

  res.json(fact);
};
