import React, { Component } from 'react';
import './styles.css';
import Navbar from "../Navbar";

export class Game extends Component {
    constructor(props){
        super(props)
        this.score = 0;
        this.BadChoice = -1;
        this.GoodChoice = +1;
        this.choices = ['Bicicleta','Carro','Feira','Supermercado','organica','agrotoxico','Aluminio','Plastico'];
        this.indexChoice = 0;
        this.currentIndex = 0;
        this.nextImage = this.nextImage.bind(this);
        this.allImages = [
            require("./imagens/Frame 1.png"),
            require("./imagens/Frame 2.png"),
            require("./imagens/Frame 3.png"),
            require("./imagens/Frame 4.png"),
            require("./imagens/Frame 5.png"),
            require("./imagens/Frame 6.png")
        ];
        this.LeftChoices = 3;
        this.AllowButton = true;
        this.state ={}
    }

    nextImage(choice){
        let IntChoice = this.choices.indexOf(choice)
        if (IntChoice%2 == 0){
            this.score += this.GoodChoice;
        }
        else{
            this.score += this.BadChoice;
        }
        if(this.currentIndex == 1 ){
            if (choice == "Feira"){
                this.currentIndex += 1;
            }
            if(choice == "Supermercado"){
                this.indexChoice +=2;
            }
        }
        this.currentIndex += 1;
        this.indexChoice += 2;
        this.LeftChoices -= 1;
        if(this.LeftChoices == 0){
            if(this.score >= 2){
                this.currentIndex = 4;
            }
            else{
                this.currentIndex = 5;
            }
            this.AllowButton = !this.AllowButton
        }

        this.setState({ state: this.state });
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="Header-Game">
                    <h1>O poder da escolha</h1>
                </div>
                <div className="Sub-Header">
                    <text>Como suas escolhas de hoje salvariam o pleneta de amanhã?</text>
                </div>
                <div>
                    <div className="game-layout">
                        <img src={this.allImages[this.currentIndex]}></img>
                    </div>
                    <div className="game-buttons">
                        <button hidden={!this.AllowButton} value={this.choices[this.indexChoice]} onClick={e => this.nextImage(this.choices[this.indexChoice])}>
                            {this.choices[this.indexChoice]}
                        </button>
                        <button hidden={!this.AllowButton} value={this.choices[this.indexChoice +1]} onClick={e => this.nextImage(this.choices[this.indexChoice +1])}>
                            {this.choices[this.indexChoice +1]}
                        </button>
                    </div>
                    <div className="footer-final" hidden={this.AllowButton}></div>
                </div>
            </div>
        )
    }
}
export default Game