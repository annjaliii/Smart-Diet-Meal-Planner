const mongoose = require("mongoose");
const Disease = require("./models/Disease");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Disease.deleteMany({});

  await Disease.insertMany([
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "fever"],
      recommendedFoods: ["ginger tea", "soup"],
      description: "Upper respiratory infection"
    },
    {
      name: "Diabetes",
      symptoms: ["fatigue", "frequent urination", "thirst"],
      recommendedFoods: ["leafy greens", "nuts"],
      description: "Blood sugar condition"
    }
  ]);

  console.log("seeded");
  process.exit();
});
