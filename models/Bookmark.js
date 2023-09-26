const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
w
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
