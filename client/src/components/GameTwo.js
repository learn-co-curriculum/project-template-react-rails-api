import React, {useState, useEffect, useRef} from "react"
import { NavLink } from "react-router-dom"
import useGameLogic from "./useGameLogic"

function GameTwo() {

    const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount] = useGameLogic()    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )

}

export default GameTwo;