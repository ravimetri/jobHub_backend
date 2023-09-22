const mogoose = require("mongoose");

const chatSchema = mogoose.Schema(
  {
    chatName: { type: String, trim: true },
    idGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mogoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mogoose.Schema.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mogoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mogoose.model("Chat", chatSchema);
