import React,{useEffect} from "react";
import ExerciseElement from "./ExerciseElement"

const ExerciseContainer = ({exerciseList, setExerciseList}) => {

    return (
        <div>
            {exerciseList.map(exercise => {
                return (
                    <ExerciseElement
                        className="exercise-container"
                        key={exercise.id}
                        name={exercise.name} 
                        duration={exercise.duration} 
                        calories={exercise.calories_burnt} 
                        id={exercise.id}
                        setExerciseList={setExerciseList}
                        exerciseList={exerciseList}
                    />
                )
            })}
        </div>
    )
}

export default ExerciseContainer