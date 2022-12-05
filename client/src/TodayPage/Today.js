import React from "react";
import NavBar from "../NavBar/NavBar.js"


const TodayPage = () => {

    //fetch this data in future
    const calGoal = 2000
    const calBurnt = 400
    const calConsumed = 1800
    const calLeft = calGoal + calBurnt - calConsumed

    return (
        <>
            <NavBar/>
            <div className="calories-display">
                <p>Total Calories Goal: {calGoal}</p>
                <p>Calories Consumed: {calConsumed}</p>
                <p>Burnt calories: {calBurnt}</p>
                <p>Calories Left: {calLeft}</p>
            </div>
            

            <div id="dataHolder">
                <div id="track-food">
                    <p1>Track food</p1>
                </div>

                <div id="track-exercise">

                </div>
            </div>
        </>
    )
}

export default TodayPage