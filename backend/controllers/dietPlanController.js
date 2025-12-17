const DietPlan = require("../models/DietPlan");
const axios = require("axios");

// 🥗 CREATE DIET PLAN
exports.createPlan = async (req, res) => {
  try {
    const {
      patientName,
      age,
      gender,
      condition,
      symptoms,
      goal,
      preference,
      activityLevel,
    } = req.body;

    // 🔎 Validation
    if (!patientName || !goal || !activityLevel) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 🤖 Call Python AI
    let aiRes;
    try {
      aiRes = await axios.post("http://127.0.0.1:8000/predict", {
        patientName,
        age,
        gender,
        condition,
        symptoms,
        goal,
        preference,
        activityLevel,
      });
    } catch (err) {
      console.log("🔥 Python AI Error:", err.message);
      return res.status(500).json({
        error: "Python AI service error. Is it running on port 8000?",
      });
    }

    const ai = aiRes.data;

    // 💾 Save structured plan
    const plan = await DietPlan.create({
      patientName,
      condition,
      goal,
      preference,
      predictedDisease: ai.predictedDisease,
      calories: ai.dailyCalories,
      meals: ai.mealPlan,       // 👈 STRUCTURED OBJECT
      avoid: ai.avoid,
      notes: ai.notes,
      createdBy: req.user.id,
    });

    res.json(plan);
  } catch (err) {
    console.log("🔥 Node Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// 📌 GET USER PLANS
exports.getUserPlans = async (req, res) => {
  try {
    const plans = await DietPlan.find({ createdBy: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(plans);
  } catch (err) {
    console.log("🔥 Fetch Plans Error:", err);
    res.status(500).json({ error: err.message });
  }
};
