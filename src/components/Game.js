import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Wrapper from "./Wrapper";
import consoles from "../consoles.json";

class Game extends Component {

    state = {
        score : 0,
        highScore: 0
    }

render () {
    const state = this.state;
    return (
        <div>
            <Navbar 
                score={state.score}
                highScore={state.highScore}
            />
            <Jumbotron />
            <Wrapper>

            </Wrapper>
        </div>
    );
}

}

export default Game;