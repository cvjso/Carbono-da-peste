# Flask
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request

# Own
from functions.world import grafico_princial
from functions.world import grafico_linha

app = Flask(__name__)

# CORS
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', defaults={'path': ''})
@cross_origin()
def Geral():
    req_data = request.get_json()
    if "pais" in req_data.keys() and req_data['ano'] == "":
        """
        "pais" : "Brazil",
        "tipo" : "ghg-emissions"
        """
        return grafico_linha(req_data["tipo"],req_data["pais"])
    else:
        """
        "ano" : "1990",
        "tipo" : "ghg-emissions"
        """
        return grafico_princial(req_data["tipo"],req_data["ano"])


@app.route('/pessoal/id129321838178', methods=["GET",'POST'])
def Pessoal():
    req_data = request.get_json()
    return f'Hello, {req_data}!'