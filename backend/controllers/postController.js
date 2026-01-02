const Post = require("../models/Post");
const User = require("../models/User");
const { sendBulkEmail } = require("../utils/emailHelpers");

// ✅ Admin: Create Post (Caption + Optional Image)
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      caption: req.body.caption,
      image: req.file ? `/uploads/posts/${req.file.filename}` : null,
      createdBy: req.user._id,
    });

    // 📧 Email notification
    const users = await User.find({}, "email");
    await sendBulkEmail(
      users,
      "🏆 New Achievement Posted!",
      "postCreated",
      {
        caption: post.caption,
      }
    );

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👀 User/Admin: Get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("createdBy", "name")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❤️ User: Like / Unlike Post
exports.toggleLike = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  const liked = post.likes.includes(req.user._id);

  if (liked) {
    post.likes.pull(req.user._id);
  } else {
    post.likes.push(req.user._id);
  }

  await post.save();
  res.json({ likes: post.likes.length });
};

// 💬 User: Comment on Post
exports.addComment = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  post.comments.push({
    user: req.user._id,
    text: req.body.text,
  });

  await post.save();
  res.json(post.comments);
};

// ❌ Admin: Delete Post
exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  await post.deleteOne();
  res.json({ message: "Post deleted" });
};
