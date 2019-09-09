import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navBar";
import ImageContainer from "./components/imageContainer";
import images from "./components/images.json";
import "./index.css"

class App extends Component {

    state = {
        images,
        score: 0,
        topScore: 0
    };

    // if current score is greater than top score
    // make top score = to current score
    topScoreUpdate = () => {
        if (this.state.score >= this.state.topScore) {
            this.setState({
                topScore: this.state.score,
                function() {
                    console.log(this.state.topScore);
                }
            })
        } else if (this.state.score === 15) {
            alert("Yes!! You won!");
            this.reset();
        }
    }

    // if image has already been clicked/"clicked": true
    // reset score to 0.
    // reset clicked states to false

    reset = () => {
        this.state.images.forEach(image => {
            image.clicked = false;
        })
        this.setState({
            score: 0
        })
        alert("Whoops! Game over!");
    }

    // click counter for images
    //  if correct image is clicked,
    // increase score by 1 point.
    // if image is clicked twice,

    clickCounter = (id) => {

        // filters through and finds image id equal to the image clicked
        const clicked = images.filter(image => image.id === id);

        if (clicked[0].clicked === false) {
            clicked[0].clicked = true;
            this.setState({
                score: this.state.score + 1
            }) 
            } else {
                this.reset();
            }

        // shuffles images
        this.state.images.sort(() => Math.floor(Math.random() - 0.5));
        // score update
        this.topScoreUpdate();
    }

    render() {
      return (
          
        <div>
            <NavBar score={this.state.score} topScore={this.state.topScore} />
            <Jumbotron />
            <div className="container app">
                <div row="col-md-12">
                    <div>
                        {this.state.images.map(item => (
                            <ImageContainer 
                                image= {item.image} 
                                handleClick={this.clickCounter}
                                key={item.id}
                                id={item.id}
                                alt={item.name} 
                            />
                        ))}
                    </div>
                </div>
            </div>
          </div>
      )
    };
}

export default App;