from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from utils.generate_meal import generate_meal_plan

app = FastAPI()

# ✅ Load ML model correctly
model = joblib.load("models/disease_model.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")

class DietRequest(BaseModel):
    patientName: str
    age: int
    gender: str
    condition: str
    symptoms: str
    goal: str
    preference: str
    activityLevel: str

@app.post("/predict")
def predict(data: DietRequest):
    # Disease prediction
    X = vectorizer.transform([data.symptoms])
    predicted_disease = model.predict(X)[0]

    meal_data = generate_meal_plan(
        condition=data.condition,
        goal=data.goal,
        activity_level=data.activityLevel,
        preference=data.preference
    )

    return {
        "patient": data.patientName,
        "predictedDisease": predicted_disease,
        "condition": data.condition,
        "goal": data.goal,
        "dailyCalories": meal_data["dailyCalories"],
        "mealPlan": meal_data["mealPlan"],
        "avoid": meal_data["avoid"],
        "notes": meal_data["notes"]
    }
