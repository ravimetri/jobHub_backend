const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../midware/verifyTken");
const bookmarkController = require("../controller/bookmarkController");

//Create Bookmarks
router.post(
  "/",
  verifyTokenAndAuthorization,
  bookmarkController.createBookmark
);

//Delete Bookmarks
router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);

//Get Bookmarks
router.get("/:userId", bookmarkController.getBookmarks);

module.exports = router;
