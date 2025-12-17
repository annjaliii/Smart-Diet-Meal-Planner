const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createPlan,
  getUserPlans,
} = require("../controllers/dietPlanController");

router.post("/create", auth, createPlan);
router.get("/my-plans", auth, getUserPlans);

module.exports = router;
