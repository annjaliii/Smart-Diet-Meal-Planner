def generate_meal_plan(condition, goal, activity_level, preference):
    calories = 1800

    if activity_level == "sedentary":
        calories = 1600
    elif activity_level == "active":
        calories = 2000

    if goal == "weight-loss":
        calories -= 200
    elif goal == "weight-gain":
        calories += 300

    avoid = []
    notes = []

    meal_plan = {
        "breakfast": [],
        "lunch": [],
        "snacks": [],
        "dinner": []
    }

    # ======================
    # DISEASE-SPECIFIC LOGIC
    # ======================

    # 🟡 DIABETES
    if condition == "diabetes":
        meal_plan["breakfast"] = [
            {"item": "Oats / Ragi porridge", "quantity": "40 gm"},
            {"item": "Low fat milk", "quantity": "200 ml"}
        ]
        meal_plan["lunch"] = [
            {"item": "Brown rice / Millet", "quantity": "50 gm"},
            {"item": "Vegetable curry", "quantity": "150 gm"},
            {"item": "Salad", "quantity": "1 bowl"}
        ]
        meal_plan["snacks"] = [
            {"item": "Roasted chana / Sprouts", "quantity": "30 gm"}
        ]
        meal_plan["dinner"] = [
            {"item": "Multigrain roti", "quantity": "2"},
            {"item": "Paneer / Dal", "quantity": "100 gm"}
        ]
        avoid = ["Sugar", "White rice", "Bakery items"]
        notes.append("Low glycemic index foods recommended.")

    # 🟡 HYPERTENSION
    elif condition == "hypertension":
        meal_plan["breakfast"] = [
            {"item": "Vegetable poha / Upma", "quantity": "120 gm"},
            {"item": "Green tea", "quantity": "1 cup"}
        ]
        meal_plan["lunch"] = [
            {"item": "Chapati", "quantity": "2"},
            {"item": "Lauki / Tinda sabzi", "quantity": "150 gm"},
            {"item": "Curd (low fat)", "quantity": "100 ml"}
        ]
        meal_plan["snacks"] = [
            {"item": "Fruit bowl", "quantity": "150 gm"}
        ]
        meal_plan["dinner"] = [
            {"item": "Vegetable soup", "quantity": "250 ml"},
            {"item": "Grilled paneer / Tofu", "quantity": "80 gm"}
        ]
        avoid = ["Extra salt", "Pickles", "Papad"]
        notes.append("Low sodium and potassium-rich foods advised.")

    # 🟡 PCOS
    elif condition == "pcos":
        meal_plan["breakfast"] = [
            {"item": "Egg whites / Besan chilla", "quantity": "2"},
            {"item": "Green tea", "quantity": "1 cup"}
        ]
        meal_plan["lunch"] = [
            {"item": "Quinoa / Brown rice", "quantity": "50 gm"},
            {"item": "Vegetable sabzi", "quantity": "150 gm"}
        ]
        meal_plan["snacks"] = [
            {"item": "Nuts & seeds", "quantity": "20 gm"}
        ]
        meal_plan["dinner"] = [
            {"item": "Grilled vegetables", "quantity": "200 gm"},
            {"item": "Paneer / Tofu", "quantity": "100 gm"}
        ]
        avoid = ["Sugar", "Refined carbs"]
        notes.append("High fiber & low carb diet helps hormone balance.")

    # 🟡 THYROID
    elif condition == "thyroid":
        meal_plan["breakfast"] = [
            {"item": "Vegetable omelette / Sprouts", "quantity": "2 eggs / 1 bowl"}
        ]
        meal_plan["lunch"] = [
            {"item": "Chapati", "quantity": "2"},
            {"item": "Vegetable curry", "quantity": "150 gm"}
        ]
        meal_plan["snacks"] = [
            {"item": "Fruit", "quantity": "1 medium"}
        ]
        meal_plan["dinner"] = [
            {"item": "Soup", "quantity": "250 ml"},
            {"item": "Dal", "quantity": "100 gm"}
        ]
        avoid = ["Soy excess", "Fried food"]
        notes.append("Balanced iodine & selenium intake recommended.")

    # 🟡 ANEMIA
    elif condition == "anemia":
        meal_plan["breakfast"] = [
            {"item": "Dates & nuts", "quantity": "3 dates + 10 nuts"}
        ]
        meal_plan["lunch"] = [
            {"item": "Spinach sabzi", "quantity": "150 gm"},
            {"item": "Chapati", "quantity": "2"}
        ]
        meal_plan["snacks"] = [
            {"item": "Pomegranate / Apple", "quantity": "1 medium"}
        ]
        meal_plan["dinner"] = [
            {"item": "Dal", "quantity": "120 gm"},
            {"item": "Vegetable salad", "quantity": "1 bowl"}
        ]
        avoid = ["Tea with meals"]
        notes.append("Iron-rich foods with vitamin C advised.")

    # 🟡 GENERAL
    else:
        meal_plan["breakfast"] = [
            {"item": "Idli / Toast", "quantity": "2"},
            {"item": "Sambar", "quantity": "150 ml"}
        ]
        meal_plan["lunch"] = [
            {"item": "Rice", "quantity": "60 gm"},
            {"item": "Vegetable curry", "quantity": "150 gm"}
        ]
        meal_plan["snacks"] = [
            {"item": "Fruit", "quantity": "1 medium"}
        ]
        meal_plan["dinner"] = [
            {"item": "Chapati", "quantity": "2"},
            {"item": "Dal", "quantity": "100 gm"}
        ]

    # ======================
    # DIET PREFERENCE
    # ======================
    if preference.lower() == "vegan":
        notes.append("Plant-based protein sources used.")
    elif preference.lower() == "non-veg":
        notes.append("Lean protein like fish/chicken can be included.")

    return {
        "dailyCalories": calories,
        "mealPlan": meal_plan,
        "avoid": avoid,
        "notes": notes
    }
