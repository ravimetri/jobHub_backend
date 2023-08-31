const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: { type: String, required: true },
    userID: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
