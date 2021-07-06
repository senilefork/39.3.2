import React from "react";
import PokeCard from "./PokeCard"
import "./Pokedex.css"

const Pokedex = ({ pokemon }) => {
    return(
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <PokeCard key={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
                ))}
            </div>
        </div>
    )
}

export default Pokedex;