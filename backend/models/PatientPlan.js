const mongoose = require('mongoose');

const PatientPlanSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  goal: { type: String, required: true },
  preference: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PatientPlan", PatientPlanSchema);
