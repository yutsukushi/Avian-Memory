import React from "react";
// import image from "../images.json";
import "./imageContainer.css";

function ImageContainer(props) {
// shuffle images everytime image is clicked
    return (
        <div
            role="img"
            style={{backgroundImage:`url("${props.image}")`}}
            onClick= {() => props.handleClick(props.id)} >
         </div>
    )
    };

export default ImageContainer;