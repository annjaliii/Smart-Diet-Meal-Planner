import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePlan = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    condition: "",
    symptoms: "",
    goal: "",
    preference: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/dietplan/create",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log("✅ AI Meal Plan Generated:", res.data);
      navigate("/meal-plan");
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err);
      alert(
        err.response?.data?.error ||
          "Error creating meal plan. Please try again."
      );
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">
        Create Your AI-Powered Personalized Meal Plan
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Health Condition */}
        <div className="mb-3">
          <label className="form-label">Existing Health Condition</label>
          <select
            className="form-select"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select Condition</option>
            <option value="none">None</option>
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">High Blood Pressure</option>
            <option value="thyroid">Thyroid</option>
            <option value="heart">Heart Condition</option>
          </select>
        </div>

        {/* Symptoms */}
        <div className="mb-3">
          <label className="form-label">Symptoms (if any)</label>
          <input
            type="text"
            className="form-control"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="e.g. fatigue, frequent thirst, dizziness"
          />
        </div>

        {/* Activity Level */}
        <div className="mb-3">
          <label className="form-label">Daily Activity Level</label>
          <select
            className="form-select"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="sedentary">Sedentary (little movement)</option>
            <option value="moderate">Moderate (walking / light exercise)</option>
            <option value="active">Active (regular workouts)</option>
          </select>
        </div>

        {/* Goal */}
        <div className="mb-3">
          <label className="form-label">Primary Health Goal</label>
          <select
            className="form-select"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          >
            <option value="">Select Goal</option>
            <option value="maintain-sugar">Maintain Blood Sugar</option>
            <option value="heart-health">Improve Heart Health</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
            <option value="increase-energy">Increase Energy</option>
            <option value="general-wellness">General Wellness</option>
          </select>
        </div>

        {/* Dietary Preference */}
        <div className="mb-4">
          <label className="form-label">Dietary Preference</label>
          <input
            type="text"
            className="form-control"
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            placeholder="e.g. Vegetarian, Vegan, Gluten-Free"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Generate AI Meal Plan
        </button>
      </form>
    </div>
  );
};

export default CreatePlan;
