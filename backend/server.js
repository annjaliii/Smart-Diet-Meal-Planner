console.log("🔥 RUNNING CORRECT server.js 🔥");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ROUTES
const authRoutes = require("./routes/authRoutes");
const dietPlanRoutes = require("./routes/dietPlanRoutes"); // ✅ REQUIRED

const app = express();

app.use(cors());
app.use(express.json());

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Mongo error:", err));

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/dietplan", dietPlanRoutes); // 🔥 THIS FIXES 404

app.get("/api/test", (req, res) => {
  res.send("SERVER IS RUNNING");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("Server running on port", PORT)
);
