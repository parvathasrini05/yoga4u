const multer = require("multer");
const path = require("path");

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (req.originalUrl.includes("/posts")) {
      cb(null, "uploads/posts");
    } else if (req.originalUrl.includes("/events")) {
      cb(null, "uploads/events");
    } else {
      cb(null, "uploads");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
        file.originalname
      )}`
    );
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only image files allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = {
  uploadPostImage: upload.single("image"),
  uploadEventPamphlet: upload.single("pamphletImage"),
};
