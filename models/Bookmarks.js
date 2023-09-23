const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.DocumentArray,
      ref: "Job",

      // ref: "Job",
    },

    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
