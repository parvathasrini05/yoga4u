const Event = require("../models/Event");
const User = require("../models/User");
const { sendBulkEmail } = require("../utils/emailHelpers");

// ✅ Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      pamphletImage: req.file
        ? `/uploads/events/${req.file.filename}`
        : null,
      createdBy: req.user._id,
    });

    const users = await User.find({}, "email");

    await sendBulkEmail(
      users,
      "🎉 New Yoga Event Added!",
      "eventCreated",
      {
        title: event.title,
        description: event.description,
        date: event.date,      // ✅ FIX
        time: event.time,
        location: event.location,
        googleFormLink: event.googleFormLink,
      }
    );

    res.status(201).json(event);
  } catch (error) {
    console.error("Create Event Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Event
exports.updateEvent = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.pamphletImage = `/uploads/events/${req.file.filename}`;
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!event)
      return res.status(404).json({ message: "Event not found" });

    const users = await User.find({}, "email");

    await sendBulkEmail(
      users,
      "⏰ Yoga Event Updated",
      "eventUpdated",
      {
        title: event.title,
        date: event.date,    // ✅ FIX
        time: event.time,
        location: event.location,
        googleFormLink: event.googleFormLink,
      }
    );

    res.json(event);
  } catch (error) {
    console.error("Update Event Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event)
      return res.status(404).json({ message: "Event not found" });

    await event.deleteOne();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
