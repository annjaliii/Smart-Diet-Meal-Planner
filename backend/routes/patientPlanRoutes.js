const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createPatientPlan } = require("../controllers/patientPlanController");

router.post("/create", auth, createPatientPlan);

module.exports = router;
