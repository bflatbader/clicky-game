import React from "react";
import "../styles/Polaroids.css";

function Polaroids(props) {
    return (
        <div className="polaroids">
        {props.cards.map(card => (
            <div className="polaroid" key={card.id} data-value={card.clickState}>
                <img src={card.image} alt={card.name} />
            </div>
        ))}
        </div>
    );
}

export default Polaroids;