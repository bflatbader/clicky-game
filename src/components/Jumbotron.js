import React from "react";
import "../styles/Jumbotron.css";
import logo from '../images/logo.png';

function Jumbotron() {
    return (
    <div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
        <img src={logo} className="img-fluid img-logo" alt="Retro Console Clicky Game" />
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    </div>
    );
}

export default Jumbotron;