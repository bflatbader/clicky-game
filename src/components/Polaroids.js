import React from "react";
import "../styles/Polaroids.css";

const Polaroids = props => {
    return (
        <div className="polaroid">
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default Polaroids;