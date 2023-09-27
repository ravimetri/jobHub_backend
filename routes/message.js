const router = require("express").Router();
const messageController = require("../controller/messageController");
const {
  verifyAndAuthorization,
  verifyToken,
  verifyAndAdmin,
} = require("../midware/verifyToken");

//Send Meassege

router.post("/", verifyAndAuthorization, messageController.sendMessage);

//Get All messages
router.get("/:id", verifyAndAuthorization, messageController.getAllMeassage);

module.exports = router;
