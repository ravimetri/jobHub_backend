const router = require("express").Router();
const bookmarkController = require("../controller/bookmarkController");

//Create Bookmarks
router.post("/", bookmarkController.createBookmark);

//Delete Bookmarks
router.delete("/:id", bookmarkController.deleteBookmark);

//Get Bookmarks
router.get("/:userId", bookmarkController.getBookmarks);

module.exports = router;
