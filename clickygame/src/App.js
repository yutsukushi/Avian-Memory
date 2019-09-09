import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import images from "./components/images.json";
import NavBar from "./components/navBar";
import ImageContainer from "./components/imageContainer";

class App extends Component {

    state = {
        images,
        score: 0,
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

    // if image has already been clicked/"clicked": true
    // reset score to 0.
    // reset clicked states to false

    reset = () => {
        if (this.clicked === true) {
            this.state.images.forEach(image => {
                image.clicked = false;
            })
            alert("You guessed wrong!");
        }
    }

    // click counter for images
    //  if correct image is clicked,
    // increase score by 1 point.
    // if image is clicked twice,

    clickCounter = (id) => {
        console.log("clickCounter");
        if (this.clicked === false) {
            this.setState({
                score: this.state.score +1,
                clicked: true
            })
        } else {
            this.reset()
        }
    }

    render() {
      return (
          <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbotron />
            <div>
                {this.state.images.map(item => (
                    <ImageContainer> 
                        <img src={item.image} 
                        handleClick={this.clickCounter}
                        key={item.id}
                        alt="exotic bird"></img>
                    </ImageContainer>
                ))}
            </div>
          </div>
      )
    };
}

export default App;