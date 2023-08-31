const router = require("express").Router();
const jobController = require("../controller/jobController");
const {
  verifyAndAuthorization,
  verifyToken,
  verifyAndAdmin,
} = require("../midware/verifyToken");

// Post job

router.post("/", verifyAndAdmin, jobController.createJob);

// Update Job

router.put("/:id", verifyAndAdmin, jobController.updateJob);

//delete Job//
router.delete("/:id", verifyAndAdmin, jobController.deleteJob);

//get Job by ID
router.get("/:id", jobController.getJob);

//get All Job
router.get("/", jobController.getAllJob);

//Search Job by key
router.get("/search/:key", jobController.searchJob);

module.exports = router;
