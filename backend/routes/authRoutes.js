const express = require("express");
const router = express.Router();

// ✅ IMPORT CONTROLLER CORRECTLY
const authController = require("../controllers/authController");

// ✅ USE FUNCTIONS FROM CONTROLLER
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
