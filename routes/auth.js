const router = require("express").Router();
const authController = require("../controller/authController");

// Registration
router.post("/register", authController.createUser);

//LoginUser
router.post("/login", authController.loginUser);

module.exports = router;
