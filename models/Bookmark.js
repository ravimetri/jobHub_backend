import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";
// const mongoose = require("mongoose");

const BookMarkSChema = new mongoose.Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },

    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookMarkSChema);
