import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Wrapper from "./Wrapper";
import consoles from "../consoles.json";
import Polaroids from "./Polaroids";

class Game extends Component {

    state = {
        score : 0,
        highScore: 0,
        message: "",
        consoles: consoles
    }

    componentDidMount() {
        this.setState({ consoles: this.shuffleConsoles() });
    }

    shuffleConsoles() {
        let shuffled = consoles.sort(function(a, b){return 0.5 - Math.random()});
        return shuffled;
    }

    clickEvent = this.handleClick.bind(this);
    handleClick(element) {
        console.log(element);
        this.setState({ consoles: this.shuffleConsoles() });
    }

    render () {
        const state = this.state;
        console.log(state.consoles);
        return (
            <div>
                <Navbar 
                    score={state.score}
                    highScore={state.highScore}
                    message={state.message}
                />
                <Jumbotron />
                <Wrapper>
                    <Polaroids 
                        cards={state.consoles} 
                        clickEvent={this.clickEvent}
                    />
                </Wrapper>
            </div>
        );
    }
}

export default Game;