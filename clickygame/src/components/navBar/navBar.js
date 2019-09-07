import React from "react";
import "./navBar.css";

const NavBar = props => {
    return (
    <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Clicky Game</span>
    <div className="currentScore">{props.currentScore}</div>
    <div className="topScore">{props.topScore}</div>
    </nav>
    )
}
export default NavBar;