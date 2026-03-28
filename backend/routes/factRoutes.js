const express = require("express");
const { addFact, getTodayFact } = require("../controllers/factController");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

// User + Admin
router.get("/today", getTodayFact);

// Admin only
router.post("/", protect, isAdmin, addFact);

module.exports = router;
