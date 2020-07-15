import React, { Component } from "react";
import {choice} from "../helpers";
import TruthOdare from './TruthOdare';
import "../css/GameContainer.css"

class GameContainer extends Component {
    static defaultProps = {
        posibleResults: [
            {side: "truth", result: "Verdad"},
            {side: "dare", result: "Reto"}
        ]
    };
    constructor(props){

        super(props);
        this.state = {
            currentResult: null,
            nFlips: 0,
            nTruth: 0,
            nDare: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipResult(){
        const newResult = choice(this.props.posibleResults);
        this.setState(oldState => {
            return {
                currentResult: newResult,
                nFlips: oldState.nFlips + 1,
                nTruth: oldState.nTruth + (newResult.side === "truth" ? 1 : 0),
                nDare: oldState.nDare + (newResult.side === "dare" ? 1 : 0)
            };
        });
    }
    handleClick(e){
        this.flipResult();
    }
    render() {
        return (
            <div className="GameContainer">
                <h2>Juguemos Verdad o Reto</h2>
                <img src={"../img/tOd.png" }></img>
                <button className="btn" onClick={this.handleClick}>Click!</button>
                <p className="Result">{this.state.currentResult && <TruthOdare info={this.state.currentResult}/>}</p>
                <p>
                    De {this.state.nFlips} veces jugadas, Has dicho {this.state.nTruth} verdades 
                    y {this.state.nDare} retos.
                </p>
            </div>
        )
    }
}

export default GameContainer;