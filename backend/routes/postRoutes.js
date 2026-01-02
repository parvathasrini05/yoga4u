const express = require("express");
const {
  createPost,
  getPosts,
  toggleLike,
  addComment,
  deletePost,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const { uploadPostImage } = require("../middleware/uploadMiddleware");

const router = express.Router();

// PUBLIC
router.get("/", getPosts);

// ADMIN ONLY (image + caption)
router.post(
  "/",
  protect,
  isAdmin,
  uploadPostImage,   // ✅ FIXED
  createPost
);

// USER ACTIONS
router.post("/:id/like", protect, toggleLike);
router.post("/:id/comment", protect, addComment);

// ADMIN ONLY
router.delete("/:id", protect, isAdmin, deletePost);

module.exports = router;
