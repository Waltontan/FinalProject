# from flask import Flask, render_template 
# import pandas as pd
from flask import Flask, session, request, redirect, render_template, Blueprint, jsonify
import pandas as pd
from flask_restx import Api, Resource, fields
# from sqlalchemy import create_engine
# from sqlalchemy.engine import URL
# import os 
from prediction import predict

# create app 
app = Flask(__name__)

# create api blueprint 
blueprint = Blueprint("api", __name__, url_prefix="/api")
api = Api(blueprint, doc="/doc/")
app.register_blueprint(blueprint)


# -------------HTML pages routes------------- #
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predictor")
def predictor():
    return render_template("index2.html")
# -------------HTML pages routes END------------- #


# -------------API routes------------- #

@api.route("/predict/<fixed_acidity>/<volatile_acidity>/<citric_acid>/<residual_sugar>/<chlorides>/<free_sulfur_dioxide>/<total_sulfur_dioxide>/<density>/<pH>/<sulphates>/<alcohol>")
class Predict(Resource):
    def get(self,fixed_acidity, volatile_acidity, citric_acid, residual_sugar, chlorides,free_sulfur_dioxide, total_sulfur_dioxide, density, pH, sulphates, alcohol):

        user_input = {
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
        }
        user_inputs = pd.DataFrame(user_input)
        
        prediction = predict(user_inputs)

        predict_df = pd.DataFrame({"prediction": [prediction]})

        return predict_df.to_dict()
# -------------API routes END------------- #

if __name__ == "__main__":
    app.run(debug=True)
