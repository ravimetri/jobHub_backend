const router = require("express").Router();
const userController = require("../controller/userController");
const {
  verifyAndAuthorization,
  verifyToken,
  verifyAndAdmin,
} = require("../midware/verifyToken");

// Update User

router.put("/", verifyAndAuthorization, userController.updateUser);

//delete user
router.delete("/:id", verifyAndAuthorization, userController.deleteUser);

//get user by ID
router.get("/:id", verifyAndAuthorization, userController.getUser);

//get All user
router.get("/", verifyAndAdmin, userController.getAllUser);

module.exports = router;
