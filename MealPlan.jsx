import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "./MealPlan.css";

export default function MealPlan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dietplan/my-plans", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const downloadPDF = (plan) => {
    const pdf = new jsPDF();
    let y = 10;

    pdf.text(`Meal Plan for ${plan.patientName}`, 10, y);
    y += 8;

    pdf.text(`Condition: ${plan.condition || "N/A"}`, 10, y);
    y += 6;
    pdf.text(`Goal: ${plan.goal}`, 10, y);
    y += 6;
    pdf.text(`Calories: ${plan.calories || "N/A"} kcal`, 10, y);
    y += 10;

    // NEW STRUCTURE
    if (plan.meals && !Array.isArray(plan.meals)) {
      Object.entries(plan.meals).forEach(([meal, items]) => {
        if (!Array.isArray(items)) return;

        pdf.text(meal.toUpperCase(), 10, y);
        y += 6;

        items.forEach((f) => {
          pdf.text(`- ${f.item} (${f.quantity})`, 14, y);
          y += 6;
        });
        y += 4;
      });
    }

    pdf.save(`${plan.patientName}_Meal_Plan.pdf`);
  };

  if (plans.length === 0) {
    return <h4 className="text-center mt-5">No Meal Plans Yet</h4>;
  }

  return (
    <div className="meal-container my-4">
      <h2 className="text-center mb-4">Your AI Meal Plans</h2>

      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <div className="plan-header">
            <h4>{plan.patientName}</h4>
            <button
              className="download-btn"
              onClick={() => downloadPDF(plan)}
            >
              Download PDF
            </button>
          </div>

          <p>
            <strong>Condition:</strong> {plan.condition || "N/A"} |{" "}
            <strong>Goal:</strong> {plan.goal}
          </p>

          {/* HANDLE BOTH OLD + NEW MEALS */}
          {Array.isArray(plan.meals) ? (
            // 🟡 OLD FORMAT
            plan.meals.map((m, i) => (
              <div key={i} className="meal-section">
                <h5>{m.time}</h5>
                <ul>
                  {Array.isArray(m.items) &&
                    m.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            ))
          ) : (
            // 🟢 NEW FORMAT
            Object.entries(plan.meals || {}).map(([meal, items]) => (
              <div key={meal} className="meal-section">
                <h5>{meal}</h5>
                {Array.isArray(items) ? (
                  <ul>
                    {items.map((f, idx) => (
                      <li key={idx}>
                        {f.item} — <strong>{f.quantity}</strong>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))
          )}

          {Array.isArray(plan.avoid) && plan.avoid.length > 0 && (
            <div className="mt-3">
              <strong>Foods to Avoid:</strong>
              <ul>
                {plan.avoid.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
