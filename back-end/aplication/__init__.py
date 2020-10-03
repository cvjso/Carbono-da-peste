from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

@app.route('/geral', methods=['POST'])
def Geral():
    return 'Hello, World!'

@app.route('/pessoal', methods=['POST'])
def Pessoal():
    req_data = request.get_json()
    return f'Hello, {req_data}!'