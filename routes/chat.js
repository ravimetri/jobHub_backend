const router = require("express").Router();
const chatController = require("../controller/chatController");
const {
  verifyAndAuthorization,
  verifyToken,
  verifyAndAdmin,
} = require("../midware/verifyToken");

//Create Chat

router.post("/", verifyAndAuthorization, chatController.accessChat);

//Get Chats
router.get("/", verifyAndAuthorization, chatController.getChat);

module.exports = router;
