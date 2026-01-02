const express = require("express");
const {
  addFact,
  getTodayFact,
} = require("../controllers/factController");

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

// Public
router.get("/", getTodayFact);

// Admin
router.post("/", protect, isAdmin, addFact);

module.exports = router;
