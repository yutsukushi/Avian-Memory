import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";

class App extends Component {

    state = {
        // images,
        currentScore: 0,
        topScore: 0
    };

    // if current score is greater than top score
    // make top score = to current score
    scoreUpdate = () => {
        if (this.state.currentScore > this.state.topScore) {
            this.setState({
                topScore: this.state.currentScore
            })
        }
    }

    // reset score to 0.
    // reset = () => {
    //     if ()
    // }
    // click counter for images
    //  if correct image is clicked,
    // increase score by 1 point.
    // if image is clicked twice,
    // clickCounter = () => {
    //     // game logic here
    //     var count = 0;
    //     if (this.count === 0) {
    //         this.count++;
    //         this.state.currentScore++;
    //     } else if (count >= 1) {
    //         count = 0;
    //         // reset();
    //     }
    // }

    render() {
      return <Jumbotron />
    };
}

export default App;