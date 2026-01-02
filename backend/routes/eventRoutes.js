const express = require("express");
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const { uploadEventPamphlet } = require("../middleware/uploadMiddleware");

const router = express.Router();

// User & Admin
router.get("/", getAllEvents);

// Admin only
router.post(
  "/",
  protect,
  isAdmin,
  uploadEventPamphlet,
  createEvent
);

router.put(
  "/:id",
  protect,
  isAdmin,
  uploadEventPamphlet,
  updateEvent
);

router.delete("/:id", protect, isAdmin, deleteEvent);

module.exports = router;
