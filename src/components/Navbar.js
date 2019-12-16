import React from "react";
import "../styles/Navbar.css";
import brand from '../images/rainbow.png';

function Navbar() {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-light">
        <a href="#" class="navbar-brand">
            <img src={brand} />
        </a>
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">You guessed correctly!</li>
        </ul>
        <div class="nav-item">
            Score: 0 &nbsp;<span class="seperator">|</span>&nbsp; Top Score: 0
        </div>
        </nav>
    );
}

export default Navbar;