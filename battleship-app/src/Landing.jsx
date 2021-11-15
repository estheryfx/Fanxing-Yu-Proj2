import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
    return (
        <div className = "landing">
        <h1>Welcome to the Battleship Game</h1>
        <div id = "options">
            <Link to="/free">
            <button>Free Play</button>
            </Link>
            <Link to="normal">
            <button>Normal Game</button>
            </Link>
        </div>
        </div>
    )
}