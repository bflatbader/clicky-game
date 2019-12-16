import React from "react";
import "../styles/Navbar.css";
import brand from '../images/rainbow.png';

const Navbar = props => {
    return (
        <nav class="navbar fixed-top navbar-expand-md navbar-light">
        <a href="#" class="navbar-brand">
            <img src={brand} />
        </a>
        <ul class="navbar-nav mx-auto">
            <li class="nav-item"></li>
        </ul>
        <div class="nav-item">
            Score: {props.score} &nbsp;<span class="seperator">|</span>&nbsp; Top Score: {props.highScore}
        </div>
        </nav>
    );
}

export default Navbar;