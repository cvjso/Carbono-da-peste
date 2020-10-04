import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    constructor(props){
        super(props);
		this.chartRef = React.createRef();
    }

    render() {
        return(
            <div className="NavbarContent">
                <div>
                    <img className="logo-img" src={require('./imagens/logo.png')}></img>
                </div>
                <div className="Navbar-selections">
                    <div>
                        <div><Link to="/">home</Link></div>
                        <div><Link to="/graph">gráficos</Link></div>
                        <div><Link to="/ajuda">como ajudar?</Link></div>
                        <div><Link to="/saiba-mais">saiba mais</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
