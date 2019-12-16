import React from "react";
import "../styles/Consoles.css";
import consoles from '../consoles.json'

function Consoles() {
    return (
        <div class="polaroids">    
            <div class="polaroid">
                <img src="https://github.com/bflatbader/clicky-game/blob/master/public/images/apfmp1000.jpg?raw=true" />
            </div>
            <div class="polaroid">
                <img src="https://github.com/bflatbader/clicky-game/blob/master/public/images/ballyArcade.jpg?raw=true" />
            </div>
            <div class="polaroid">
                <img src="https://github.com/bflatbader/clicky-game/blob/master/public/images/atari2600.jpg?raw=true" />
            </div>
            <div class="polaroid">
                <img src="https://github.com/bflatbader/clicky-game/blob/master/public/images/apfmp1000.jpg?raw=true" />
            </div>
        </div>
    );
}

export default Consoles;