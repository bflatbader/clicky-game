import React from "react";
import "../styles/Navbar.css";
import brand from '../images/rainbow.png';

const Navbar = props => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <span className="navbar-brand">
            <img src={brand} alt="" />
        </span>
        <ul className="navbar-nav mx-auto">
            <li className="nav-item"></li>
        </ul>
        <div className="nav-item">
            Score: {props.score} &nbsp;<span className="seperator">|</span>&nbsp; Top Score: {props.highScore}
        </div>
        </nav>
    );
}

export default Navbar;