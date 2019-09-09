import React from "react";
import "./navBar.css";

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <div className="currentScore">Your score: {props.score}</div>
            <div className="topScore">Top score: {props.topScore}</div>
        </nav>
    )
}
export default NavBar;