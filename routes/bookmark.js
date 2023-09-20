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
router.delete(
  "/:id",
  verifyAndAuthorization,
  bookmarkController.deleteBookmark
);

//Get Bookmarks
router.get("/", verifyAndAuthorization, bookmarkController.getBookmarks);

module.exports = router;
