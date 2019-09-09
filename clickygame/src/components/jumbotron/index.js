import React from "react";
import "./jumbotron.css";

function Jumbotron() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Avian Memory Game</h1>
            <p className="lead">Click on an exotic bird to earn points, but you can only click on a bird once!</p>
          </div>
        </div>
      </div>
      )
}

export default Jumbotron;