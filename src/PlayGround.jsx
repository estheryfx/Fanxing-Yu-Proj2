import React from "react";
import "./PlayGround.css";
import EnemyBoard from "./EnemyBoard";
import UsersBoard from "./UserBoard";
import ResetButton from './ResetButton';


export default function PlayGround() {
    return (
        <div id = "play">
        <div id = "title">
        <h1>AI</h1>
        <h2>User</h2>
        </div>
        <div id = "two">
        <EnemyBoard></EnemyBoard>
        <UsersBoard></UsersBoard>
        </div>
        <div id = "reset">
            <ResetButton text = "RESET" />
        </div>
        </div>
    )
}