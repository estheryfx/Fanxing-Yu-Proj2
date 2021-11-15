import React from "react";
import "./PlayGround.css";
import EnemyBoard from "./EnemyBoard";
import UsersBoard from "./UserBoard";
import ResetButton from './ResetButton';


export default function FreePlay() {
    return (
        <div id = "free">
        <EnemyBoard></EnemyBoard>
        <div id = "reset">
            <ResetButton text = "RESET" />
        </div>
        </div>
    )
}