import React from "react";

const ExerciseCard = ({name, duration, calories_burnt}) => {
    return ( 
        <div className="item-elements">
            <p>{name}</p>
            <p>{`${duration} grams`}</p>
            <p>{`${calories_burnt} calories`}</p>
        </div>
    )
}

export default ExerciseCard