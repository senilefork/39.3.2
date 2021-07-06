import React from "react";
import './PokeCard.css';

const PokeCard = ({ id, name, type, base_experience }) => {
    return (
        <div className="PokeCard">
        <h2>{name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="logo"/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
    )
}

export default PokeCard