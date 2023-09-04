const mogoose = require("mongoose");

const chatSchema = mogoose.Schema(
  {
    chatNaMe: { type: String, trim: true },
    idGroupChat: { type: Boolean, default: false },
    user: [
      {
        type: mogoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latesMessage: {
      type: mogoose.Schema.ObjectId,
      ref: "User",
    },
    groupAdmin: {
      type: mogoose.Schema.Types.ObjectId,
      ref: "User",
    },
   },
  { timestamps: true }
);

module.exports = mogoose.model("Chat", chatSchema);
