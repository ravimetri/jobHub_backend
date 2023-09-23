const Bookmark = require("../models/Bookmarks");
const Job = require("../models/Job");

module.exports = {
  createBookmark: async (req, res) => {
    const jobID = req.body.job;

    try {
      const job = await Job.findById(jobID);

      if (!job) {
        return res.status(404).json({ error: "Job Not Found" });
      }
      const newBook = new Bookmark({ job: job, userId: req.user.id });

      const savedBookmark = await newBook.save();
      const { __v, updatedAt, ...newBookmarkInfo } = savedBookmark._doc;
      // console.log(savedBookmark);
      res.status(201).json(newBookmarkInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteBookmark: async (req, res) => {
    try {
      const userId = req.user.id;
      const jobId = req.params.id;

      await Bookmark.findOneAndDelete({ userId, jobId });

      res.status(200).json("Bookmark successfully Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookmarks: async (req, res) => {
    try {
      const bookmarks = await Bookmark.find({ userId: req.user.id });

      res.status(200).json(bookmarks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
