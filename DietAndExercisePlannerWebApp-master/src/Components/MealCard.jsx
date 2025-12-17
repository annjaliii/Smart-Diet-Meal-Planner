import React from "react";

const MealCard = ({ mealType, mealName, calories, protein, carbs, bgColor }) => {
  return (
    <div className="card shadow-sm h-100" style={{ backgroundColor: bgColor || "#e0f7fa" }}>
      <div className="card-body">
        <h5 className="card-title">{mealType}</h5>
        <p className="card-text">{mealName}</p>
        <ul className="list-unstyled">
          <li><strong>Calories:</strong> {calories} kcal</li>
          <li><strong>Protein:</strong> {protein} g</li>
          <li><strong>Carbs:</strong> {carbs} g</li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
