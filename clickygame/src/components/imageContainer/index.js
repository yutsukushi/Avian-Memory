import React from "react";
import "./imageContainer.css";

function ImageContainer(props) {
// shuffle images everytime image is clicked
    return (
        <div className="img-container">
            <div onClick= {() => props.handleClick(props.id)}>
                <img src={props.image} alt={props.name} id={props.id}/>
            </div>
        </div>
    )
    };

export default ImageContainer;