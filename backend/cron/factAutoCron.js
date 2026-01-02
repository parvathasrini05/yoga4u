const cron = require("node-cron");
const Fact = require("../models/Fact");
const facts = require("../data/facts");
const { notifyAllUsers } = require("../utils/emailHelpers");

// 🕙 Runs at 10:00 AM daily
cron.schedule("0 10 * * *", async () => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const exists = await Fact.findOne({ date: today });
    if (exists) return;

    const randomFact =
      facts[Math.floor(Math.random() * facts.length)];

    const fact = await Fact.create({
      text: randomFact,
      source: "SYSTEM",
      date: today,
    });

    // 📧 Email notification
    await notifyAllUsers(
      "🌿 Yoga4U – Fact of the Day",
      "factOfTheDay",
      { fact: fact.text }
    );

    console.log("🌿 Auto Fact of the Day created & emailed");
  } catch (error) {
    console.error("❌ Fact Cron Error:", error.message);
  }
});
