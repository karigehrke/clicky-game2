import React from 'react';
import "./style.css";

function Card(props) {
    return (
        <div className="card-box"
        onClick={() => props.handleClick(props.id)}>
        <img src={props.image} alt={props.name}></img>
        </div>
    )
}

export default Card;

