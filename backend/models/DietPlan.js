const mongoose = require("mongoose");

const DietPlanSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },

    condition: { type: String },          // diabetes, bp, heart
    goal: { type: String, required: true },
    preference: { type: String },

    predictedDisease: { type: String },

    calories: { type: Number },

    // 👇 STRUCTURED MEALS
    meals: {
      breakfast: [
        {
          item: String,
          quantity: String,
        },
      ],
      lunch: [
        {
          item: String,
          quantity: String,
        },
      ],
      snacks: [
        {
          item: String,
          quantity: String,
        },
      ],
      dinner: [
        {
          item: String,
          quantity: String,
        },
      ],
    },

    avoid: [String],
    notes: [String],

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DietPlan", DietPlanSchema);
