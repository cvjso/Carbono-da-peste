import React, { Component } from 'react';
import Chart from 'chart.js'
import Navbar from "../Navbar";
import './styles.css';

const axios = require('axios');

export class Home extends Component {   
    constructor(props){
        super(props);
        this.myChart = null;
        this.RequestPais = "Brazil";
        this.RequestAno = "";
        this.RequestTipo = "All";
        this.chartRef = React.createRef();
        this.anos = [...(function*() {
            for(let i = 1990; i<= 2016; i++){
                yield i;
            }
        })()];
        this.pais = [
            "Brazil",
            "China",
            "Germany",
            "India",
            "Indonesia",
            "Japan",
            "Russia",
            "Iran",
            "Canada",
            "United States"
            ]
        this.area = [ "Waste", "Bunkerfuel", "Agriculture", "Land-Use Change And Forestry", "Energy", "Industrial process", "All"];
        this.handleChangePais = this.handleChangePais.bind(this);
        this.handleChangeAno = this.handleChangeAno.bind(this);
        this.handleChangeTipo = this.handleChangeTipo.bind(this);
    }

    handleChangePais(event){
        this.RequestPais = event.target.value
        this.att_graph()
    }

    handleChangeAno(event){
        this.RequestAno = event.target.value
        
    }

    handleChangeTipo(event){
        this.RequestTipo = event.target.value
        this.att_graph()
    }

    send_request = (tipo,pais,ano) => {
		try {
			return axios.post('http://127.0.0.1:5000/geral', {
				"tipo":tipo,
                "pais":pais,
                "ano": ano
			});
		} catch (error) {
			console.error(error);
		}
	};

    componentDidMount() {
        this.att_graph();
    }

    att_graph(){
        var Tabelas = []
        var Dados = []
        var Label = ""
        var Unit = ""
        this.send_request(this.RequestTipo, this.RequestPais, this.RequestAno)
            .then((response) => {
                response = response['data']
                console.log(response);
                Label = response["Country/Region"];
                Unit = response["unit"];
                delete response["unit"];
                delete response["Country/Region"]
                Object.keys(response).forEach(element => {
                    Tabelas.push(element);
                    Dados.push(response[element])
                });
                if (this.myChart) {
                    this.myChart.destroy();
                  }
                this.myChart = new Chart(this.chartRef.current, {
                    type: 'line',
                    
                    data: {
                      labels: Tabelas,
                      datasets: [{
                          label: Label,
                          backgroundColor: '#DCE6DE',
                          borderColor: '#306B5C',
                          data: Dados
                      }]
                    },
                    options:{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    // Include a dollar sign in the ticks
                                    callback: function(value, index, values) {
                                        return value+ " " + Unit;
                                    }
                                }
                            }]
                        }
                    }
                  });          
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render(){
        return(
            <div>
                <Navbar/>
                <div className="Header-Graph">
                    <text>Emissão de CO2</text>
                </div>
                <div>
                    <form className="Form-Graph">
                        <select name="select1" onChange={this.handleChangePais}>
                            <option value="" disabled selected>País</option>
                            {this.pais.map((item) => {
                                return(
                                    <option value={item}>{item}</option>
                                )
                            })}
                        </select>

                        <select name="select2" onChange={this.handleChangeAno}>
                            <option value="" disabled selected>Ano</option>
                            {this.anos.map((item) => {
                                return(
                                    <option value={item}>{item}</option>
                                )
                            })}
                        </select>

                        <select name="select3" onChange={this.handleChangeTipo}>
                            <option value="" disabled selected>Área</option>
                            {this.area.map((item) => {
                                return(
                                    <option value={item}>{item}</option>
                                )
                            })}
                        </select>
                    </form>
                </div>
                <div className="graph-container">
                    <canvas className="graph" ref={this.chartRef} />
                </div>
            </div>
        )
    }
}
export default Home