import React from "react";
import "../styles/Polaroids.css";

const Polaroid = props => {
    <div class="polaroid">
        <img src="{props.image}" alt="{props.name}" />
    </div>
}

export default Polaroid;