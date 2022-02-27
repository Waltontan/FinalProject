import pandas as pd 
import joblib 
from tensorflow.keras.models import load_model
import numpy as np


def predict(user_inputs):
    # load model binaries 
    model = load_model("static/py/model_trained.h5")
    encoder = joblib.load("static/py/encoder.sav")
    X_scaler = joblib.load("static/py/x_scaler.sav")
    # y_scaler  = joblib.load("static/py/y_scaler.sav")

    # get the user input data 
    fixed_acidity = user_inputs["fixed_acidity"]
    volatile_acidity = user_inputs["volatile_acidity"]
    citric_acid = user_inputs["citric_acid"]
    residual_sugar = user_inputs["residual_sugar"]
    chlorides = user_inputs["chlorides"]
    free_sulfur_dioxide = user_inputs["free_sulfur_dioxide"]
    total_sulfur_dioxide = user_inputs["total_sulfur_dioxide"]
    density = user_inputs["density"]
    pH = user_inputs["pH"]
    sulphates = user_inputs["sulphates"]
    alcohol = user_inputs["alcohol"]
    
    # store pressure and humidty into df 
    input_df = pd.DataFrame({
        "fixed_acidity": [fixed_acidity],
        "volatile_acidity": [volatile_acidity],
        "citric_acid": [citric_acid],
        "residual_sugar": [residual_sugar],
        "chlorides": [chlorides],
        "free_sulfur_dioxide": [free_sulfur_dioxide],
        "total_sulfur_dioxide": [total_sulfur_dioxide],
        "density": [density],
        "pH": [pH],
        "sulphates": [sulphates],
        "alcohol": [alcohol]
    })

    # scale the X input df 
    X_scaled = X_scaler.transform(input_df)

    # obtain prediction (y) 
    encoded_predictions = np.argmax(model.predict(X_scaled), axis=-1)    
    
    # scale prediction to human readable terms i.e. celcius 
    prediction_labels = encoder.inverse_transform(encoded_predictions)
    return prediction_labels[0]