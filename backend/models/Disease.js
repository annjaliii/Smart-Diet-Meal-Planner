const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symptoms: [String],
  recommendedFoods: [String],
  description: String
});

module.exports = mongoose.model("Disease", DiseaseSchema);
