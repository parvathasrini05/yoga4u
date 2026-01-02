const mongoose = require("mongoose");

const factSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      enum: ["ADMIN", "SYSTEM"],
      default: "ADMIN",
    },

    date: {
      type: String, // YYYY-MM-DD
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fact", factSchema);
