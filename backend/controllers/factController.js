const Fact = require("../models/Fact");
const { notifyAllUsers } = require("../utils/emailHelpers");

// 🟢 Admin: Add Fact Manually + Email
exports.addFact = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const exists = await Fact.findOne({ date: today });
    if (exists) {
      return res.status(400).json({ message: "Fact already exists for today" });
    }

    const fact = await Fact.create({
      text: req.body.text,
      source: "ADMIN",
      date: today,
    });

    // 📧 Email notification
    await notifyAllUsers(
      "🌿 Yoga4U – Fact of the Day",
      "factOfTheDay",
      { fact: fact.text }
    );

    res.status(201).json(fact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👀 User/Admin: Get Today Fact
exports.getTodayFact = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const fact = await Fact.findOne({ date: today });

    if (!fact) {
      return res.json({ message: "No fact available today" });
    }

    res.json(fact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
