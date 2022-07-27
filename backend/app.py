from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/")
def index():
    return "Please Use /inference endpoint for the inference API"



@app.route("/inference", methods=["POST"])
def inference():
    print("Request Received")
    print(request.get_json())
    return "Inference API"

app.run(port=5000, debug=True)