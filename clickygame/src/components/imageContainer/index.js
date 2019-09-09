import React from "react";
// import image from "../images.json";
import "./imageContainer.css";

function ImageContainer(props) {
// shuffle images everytime image is clicked
    return (
        <div onClick= {() => props.handleClick(props.id)}>
            <img src={props.image} alt={props.name} />
         </div>
    )
    };

export default ImageContainer;