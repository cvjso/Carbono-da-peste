from flask import Flask
from flask_cors import CORS
from flask import request
from aplication.api.world import grafico_princial
from aplication.api.world import grafico_linha

app = Flask(__name__)
CORS(app)

@app.route('/geral', methods=['POST'])
def Geral():
    req_data = request.get_json()
    return grafico_princial(req_data["tipo"],req_data["ano"])

@app.route('/pessoal', methods=['POST'])
def Pessoal():
    req_data = request.get_json()
    return f'Hello, {req_data}!'