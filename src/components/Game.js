// DEPENDENCIES
import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Wrapper from "./Wrapper";
import consoles from "../consoles.json";
import Polaroids from "./Polaroids";

class Game extends Component {
  
    // Set state
    state = {
        score : 0,
        highScore: 0,
        message: "",
        consoles: consoles
    }

    // Once component mounts, shuffle consoles
    componentDidMount() {
        this.setState({ consoles: this.shuffleConsoles() });
    }

    shuffleConsoles() {
        let shuffled = consoles.sort(function(a, b){return 0.5 - Math.random()});
        return shuffled;
    }

    // Reset game
    async reset() {
        let highScore = this.state.highScore;
        let currentScore = this.state.score;
        console.log("Highscore: " + highScore);
        console.log("Current Score: " + currentScore);
        let resetConsoles = consoles.map(data => ({ ...data, clickState: false }));

        console.log(resetConsoles);

        if (highScore < currentScore) {
            this.setState({ highScore: currentScore });
        }

        this.setState({
            score : 0,
            message: "You guessed wrong! Game has been reset.",
            consoles: resetConsoles
        });
    }

    // On click handler
    clickEvent = this.handleClick.bind(this);
    async handleClick(element) {
        let currentScore = this.state.score;

        await this.state.consoles.map(data => {
            if (data.id == element && data.clickState === false) {
                data.clickState = true;
                currentScore++;
            }
        });

        if (currentScore > this.state.score) {
            // A correct guess was given
            this.setState({ 
                score: currentScore,
                message: "You guessed right!",
                consoles: this.shuffleConsoles()
            });
        } else {
            // Incorrect guess was given
            this.reset();
        }
    }

    // Render components
    render () {
        const state = this.state;
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