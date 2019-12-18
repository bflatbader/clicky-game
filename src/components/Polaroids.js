import React from "react";
import "../styles/Polaroids.css";

function Polaroids(props) {
    return (
        <div className="polaroids">
        {props.cards.map(card => (
            <div className="polaroid">
                <img src={card.image} alt={card.name} />
            </div>
        ))}
        </div>
    );
}

export default Polaroids;