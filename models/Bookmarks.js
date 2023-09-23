const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: {
      type: Map,
      of: String,
      ref: "Job",
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Job",

      // ref: "Job",
    },

    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
