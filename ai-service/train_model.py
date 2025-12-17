import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib
import os

DATA_PATH = "datasets/symptom_disease.csv"

def train_model():
    df = pd.read_csv(DATA_PATH)
    df['Symptoms'] = df['Symptoms'].astype(str)

    # Vectorize text
    vectorizer = TfidfVectorizer()
    X = vectorizer.fit_transform(df['Symptoms'])
    y = df['Disease']

    # Train model
    model = MultinomialNB()
    model.fit(X, y)

    # Save models
    os.makedirs("models", exist_ok=True)
    joblib.dump(model, "models/disease_model.pkl")
    joblib.dump(vectorizer, "models/vectorizer.pkl")

    print("🎉 Model trained and saved successfully!")

if __name__ == "__main__":
    print("🚀 Training started...")
    train_model()
