const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // userID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
