module.exports = function generatePlan(goal, preference) {
  const baseMeals = {
    breakfast: [],
    lunch: [],
    dinner: []
  };

  const foods = {
    "weight-loss": {
      breakfast: ["Oatmeal", "Green Tea", "Fruit Bowl"],
      lunch: ["Quinoa Salad", "Grilled Chicken", "Veg Soup"],
      dinner: ["Stir Fried Veggies", "Salmon", "Brown Rice"]
    },
    "weight-gain": {
      breakfast: ["Peanut Butter Toast", "Banana Shake", "Eggs"],
      lunch: ["Chicken Pasta", "Paneer Rice Bowl", "Milkshake"],
      dinner: ["Avocado Bowl", "Protein Curry + Rice", "Nuts & Milk"]
    },
    "diabetic-friendly": {
      breakfast: ["Poha with Veggies", "Boiled Egg", "Unsweetened Tea"],
      lunch: ["Roti + Dal + Salad", "Grilled Fish", "Vegetable Curry"],
      dinner: ["Dosa + Sambar", "Stir Fry Veggies + Brown Rice"]
    },
    "heart-healthy": {
      breakfast: ["Oats + Nuts", "Fruit Smoothie (No Sugar)", "Green Tea"],
      lunch: ["Steamed Fish", "Salad with Olive Oil", "Vegetable Stew"],
      dinner: ["Soup + Whole Wheat Bread", "Tofu Bowl + Spinach"]
    }
  };

  const plan = foods[goal] || foods["weight-loss"];

  return [
    { time: "Breakfast", items: plan.breakfast },
    { time: "Lunch", items: plan.lunch },
    { time: "Dinner", items: plan.dinner }
  ];
};
