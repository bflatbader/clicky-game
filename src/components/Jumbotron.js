import React from "react";
import "../styles/Jumbotron.css";
import logo from '../images/logo.png';

function Jumbotron() {
    return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <img src={logo} class="img-fluid img-logo" />
        <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    </div>
    );
}

export default Jumbotron;