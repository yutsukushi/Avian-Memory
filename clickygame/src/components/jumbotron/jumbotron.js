import React from "react";
import NavBar from "../navBar"
import ImageContainer from "../imageContainer"
import "./jumbotron.css";

function Jumbotron() {
    return (
        <container>
          <row>
            <NavBar />
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Clicky Game</h1>
                <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
              </div>
            </div>
            <ImageContainer />
          </row>
      </container>
      )
}

export default Jumbotron;