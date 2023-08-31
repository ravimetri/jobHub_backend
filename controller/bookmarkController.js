const Bookmark = require("../models/Bookmarks");

module.exports = {
  createBookmark: async (req, res) => {
    const newBook = await Bookmark(req.body);

    try {
      const savedBookmark = await newBook.save();

      res.status(201).json("Bookmark successfully Created");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteBookmark: async (req, res) => {
    try {
      await Bookmark.findByIdAndDelete(req.params.id);

      res.status(200).json("Bookmark successfully Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookmarks: async (req, res) => {
    try {
      const bookmarks = await Bookmark.find({ userId: req.params.userId });

      res.status(200).json(bookmarks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
