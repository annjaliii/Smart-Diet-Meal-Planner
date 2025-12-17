const express = require("express");
const router = express.Router();

// Temporary placeholder routes so backend doesn't crash.
router.get("/", (req, res) => {
  res.send("Diet API Working ✔️");
});

module.exports = router;
