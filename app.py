from fastapi import FastAPI

# Create the FastAPI app
app = FastAPI()

# Home route
@app.get("/")
def home():
    return {"message": "Welcome to BeaHealth - your health education assistant"}

# Symptom checker route
@app.post("/symptoms")
def check_symptoms(symptoms: list[str]):
    # Simple placeholder logic
    if "fever" in symptoms and "cough" in symptoms:
        return {
            "possible_conditions": ["Flu", "COVID-19", "Common Cold"],
            "note": "This is general information. Please consult a healthcare professional."
        }
    elif "headache" in symptoms and "fatigue" in symptoms:
        return {
            "possible_conditions": ["Dehydration", "Stress", "Migraine"],
            "note": "This is general information. Please consult a healthcare professional."
        }
    else:
        return {
            "possible_conditions": ["Unknown"],
            "note": "Seek medical advice if symptoms persist."
        }
