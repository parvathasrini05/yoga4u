const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ageGroup: { type: String, required: true },

    // ⛔ CHANGED FROM String → Date (IMPORTANT FOR CRON)
    date: { type: Date, required: true },

    time: { type: String, required: true },
    location: { type: String, required: true },
    googleFormLink: { type: String, required: true },
    pamphletImage: String,

    // ✅ Only registered users get reminders
    registeredUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // ✅ Admin control
    remindersEnabled: {
      type: Boolean,
      default: true,
    },

    // ✅ Prevent duplicate reminder emails
    reminderSent: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
