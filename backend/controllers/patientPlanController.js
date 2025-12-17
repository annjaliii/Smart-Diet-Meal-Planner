const PatientPlan = require("../models/PatientPlan");

exports.createPatientPlan = async (req, res) => {
  try {
    const { patientName, goal, preference } = req.body;

    if (!patientName || !goal) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const plan = await PatientPlan.create({
      patientName,
      goal,
      preference,
      createdBy: req.user ? req.user.id : null
    });

    res.json({
      message: "Patient plan saved",
      plan
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
