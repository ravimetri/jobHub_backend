const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },

    title: { type: String, ref: "Job" },
    // location: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // company: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // salary: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // period: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // contract: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // imageUrl: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    // agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },

    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
