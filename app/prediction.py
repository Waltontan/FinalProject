import pandas as pd 
import joblib 

def predict(user_inputs):
    # load model binaries 
    model = joblib.load("static/py/model_trained.h5")
    encoder = joblib.load("static/py/encoder.sav")
    X_scaler = joblib.load("static/py/x_scaler.sav")
    y_scaler  = joblib.load("static/py/y_scaler.sav")

    # get the user input data 
    fixed_acidity = user_inputs["fixed acidity"]
    volatile_acidity = user_inputs["volatile acidity"]
    citric_acid = user_inputs["citric acid"]
    residual_sugar = user_inputs["residual sugar"]
    chlorides = user_inputs["chlorides"]
    free_sulfur_dioxide = user_inputs["free sulfur dioxide"]
    total_sulfur_dioxide = user_inputs["total sulfur dioxide"]
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
    encoded_predictions = model.predict_classes(X_scaled[:5])
    
    
    # scale prediction to human readable terms i.e. celcius 
    prediction_labels = encoder.inverse_transform(encoded_predictions)
    return prediction_labels[0]