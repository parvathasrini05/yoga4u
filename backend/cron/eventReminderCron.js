const cron = require("node-cron");
const Event = require("../models/Event");
const { sendBulkEmail } = require("../utils/emailHelpers");

cron.schedule("0 * * * *", async () => {
  try {
    const now = new Date();
    const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const events = await Event.find({
      date: { $gte: now, $lte: next24Hours },
      remindersEnabled: true,
      reminderSent: false,
    }).populate("registeredUsers", "email");

    for (const event of events) {
      if (!event.registeredUsers.length) continue;

      await sendBulkEmail(
        event.registeredUsers,
        "⏰ Reminder: Yoga Event Tomorrow!",
        "eventReminder",
        {
          title: event.title,
          description: event.description,
          date: event.date.toDateString(),
          time: event.time,
          location: event.location,
          googleFormLink: event.googleFormLink,
        }
      );

      event.reminderSent = true;
      await event.save();
    }

    console.log("⏰ Event reminders processed");
  } catch (error) {
    console.error("❌ Reminder Cron Error:", error.message);
  }
});
