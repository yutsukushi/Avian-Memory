import React from "react";
// import image from "../images.json";
import "./imageContainer.css";

function ImageContainer(props) {
// shuffle images everytime image is clicked
    return (
        <div className="img-container">
            <div onClick= {() => props.handleClick(props.id)} role="img">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
    };

export default ImageContainer;