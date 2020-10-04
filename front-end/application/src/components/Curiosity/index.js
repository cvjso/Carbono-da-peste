import React, { Component } from 'react';
import Chart from 'chart.js'
import Navbar from "../Navbar";
import './styles.css';

export class Curiosity extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <div className="Header-Principal"><text>Saiba Mais</text></div>
                    <div className="Header-Aux">
                        <text>
                            Quer entender um pouco mais sobre os GEEs , seus impactos, quem são os 
                            contribuidores para o aumento das emissões e desastres ambientais? Aqui selecionamos 
                            alguns artigos para auxiliar seu conhecimento!
                        </text>
                    </div>
                    <div className="Links-Content">
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask1.png')}></img>
                            <a href="http://meioambiente.recife.pe.gov.br/noticias/plano-de-baixo-carbono-do-recife">Plano  de baixo carbono do Recife</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask2.png')}></img>
                            <a href="https://infograficos.gazetadopovo.com.br/saude/doencas-causadas-pela-poluicao-ar/">Doenças causadas pela poluição do ar</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask3.png')}></img>
                            <a href="https://earthdata.nasa.gov/learn/toolkits/wildfires">Visualize queimadas e Anomalias térmicas pelo satelite da NASA</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask4.png')}></img>
                            <a href="https://blog.waycarbon.com/2017/02/5-fontes-de-gases-de-efeito-estufa/">5 fontes de emissão de GEE</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask5.png')}></img>
                            <a href="https://veja.abril.com.br/brasil/petrobras-esta-na-lista-das-vinte-empresas-mais-poluidoras-do-mundo/">Petrobras está na lista das vinte empresas mais poluidoras do mundo</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask6.png')}></img>
                            <a href="https://wribrasil.org.br/pt/blog/2020/02/quatro-graficos-explicam-emissoes-de-gases-de-efeito-estufa-por-pais-e-por-setor">4 gráficos para entender as emissões de gases de efeito estufa por país e por setor</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask7.png')}></img>
                            <a href="https://wribrasil.org.br/pt/blog/2019/11/brasil-7-maior-emissor-de-co2-do-mundo-emissoes-brasileiras-estao-caindo-ou-aumentando">Brasil é o sétimo maior emissor de CO2 do mundo. As emissões caíram ou aumentaram?</a>
                        </div>
                        <div>
                            <img className="linkImage" src={require('./imagens/Mask8.png')}></img>
                            <a href="https://exame.com/mundo/producao-de-1-kg-carne-tem-tanto-co2-como-1-6-mil-km-de-carro/">Produção de 1 kg carne tem tanto CO2 como 1,6 mil km de carro</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Curiosity