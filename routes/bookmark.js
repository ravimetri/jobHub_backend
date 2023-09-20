const router = require("express").Router();
const {
  verifyAndAuthorization,
  verifyToken,
  verifyAndAdmin,
} = require("../midware/verifyToken");
const bookmarkController = require("../controller/bookmarkController");

//Create Bookmarks
router.post("/", verifyAndAuthorization, bookmarkController.createBookmark);

//Delete Bookmarks
router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);
xs;
//Get Bookmarks
router.get("/", verifyAndAuthorization, bookmarkController.getBookmarks);

module.exports = router;
