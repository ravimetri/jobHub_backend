const Message = require("../models/message");
const User = require("../models/User");

module.exports = {
  getAllMeassage: async (req, res) => {
    try {
      const pageSize = 12; // Number of messages per page
      const page = req.query.page || 1; // Current  page number

      // Calculate the of message to skip
      const skipMessage = (page - 1) * pageSize;

      //Find message with  pagination
      var messages = await Message.find({ chat: req.params.id })
        .populate("sender", "username profile email")
        .populate("chat")
        .sort({ createdAt: -1 }) // Sort message by decending order
        .skip(skipMessage) //Skip message based on pagination
        .limit(pageSize); // Limit the number of messages per page

      messages = await User.populate(messages, {
        path: "chat.users",
        select: "username profile email",
      });

      res.json(messages);
    } catch (error) {
      res.status(400).json({ error: "Could not retrieve messages" });
    }
  },
  sendMessage: async (req, res) => {
    const { content, chatId, receiver } = req.body;

    if (!content || !chatId) {
      consol.log("invalid Data");

      res.status(400).json("Invalid Data");
    }

    var newMessage = {
      sender: req.user.id,
      content: content,
      receiver: receiver,
      chat: chatId,
    };

    try {
      var message = await Message.create(newMessage);

      message = await message.populate("sender", "username profile email");
      message = await message.populate("chat");
      message = await User.populate(message, {
        path: "chat.users",
        select: "username profile email",
      });

      await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

      res.json(message);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};
