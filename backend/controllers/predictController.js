const Disease = require("../models/Disease");

// simple matching function
function scoreMatch(query, symptoms) {
  const q = new Set(query.map(s => s.toLowerCase()));
  return symptoms.reduce((a, s) => a + (q.has(s.toLowerCase()) ? 1 : 0), 0);
}

exports.predict = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ error: "Symptoms array required" });
    }

    const all = await Disease.find();

    const scored = all.map(d => ({
      disease: d.name,
      description: d.description,
      recommendedFoods: d.recommendedFoods,
      score: scoreMatch(symptoms, d.symptoms)
    }));

    scored.sort((a, b) => b.score - a.score);

    res.json({ prediction: scored[0] });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
