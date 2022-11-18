import { useState } from "react";
import WorkOutCard from "./WorkOutCard";

function WorkOutForm({ getWorkOuts }) {
  //SEO's API KEY CHANGE WITH YOURS!
  //DON'T USE MINE
  const apiKey = "ErjjhwAdbIlQLzPZu5SUyg==VofMpxvT9NyOnEXZ";
  const [currentWorkOutType, setCurrentWorkOutType] = useState("cardio");
  const [currentMuscleGroup, setCurrentMuscleGroup] = useState("abdominal");
  const [currentDifficulty, setCurrentDifficulty] = useState("beginner");
  const [listOfWorkOuts, setListOfWorkOuts] = useState([]);
  const [showState, setShowState] = useState(false);

  const apiURL = `https://api.api-ninjas.com/v1/exercises?`;

  //Values change based on dropdown selection
  const changeWorkOutType = (newWorkOut) => {
    setCurrentWorkOutType(newWorkOut);
  };

  const changeMuscleGroup = (newMuscleGroup) => {
    setCurrentMuscleGroup(newMuscleGroup);
  };

  const changeDifficulty = (newDifficulty) => {
    setCurrentDifficulty(newDifficulty);
  };

  //searches workouts based on keyword through the search bar in workouts menu
  function handleSearchAPI(event) {
    setShowState(false);
    event.preventDefault();
    const nameParam = event.target.name.value;
    const searchApiURL = apiURL + `name=${nameParam}`;
    fetch(searchApiURL, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        setListOfWorkOuts(data);
        if (data.length > 0) {
          setShowState(false);
        } else {
          setShowState(true);
        }
      });
  }

  //searches workouts based on three different types of category
  function callWorkOutApi(event) {
    setShowState(false);
    event.preventDefault();
    const workoutParam = `&type=${currentWorkOutType}`;
    const muscleParam = `&muscle=${currentMuscleGroup}`;
    const difficultyParam = `&difficulty=${currentDifficulty}`;
    const fullApiURL = apiURL + workoutParam + muscleParam + difficultyParam;
    fetch(fullApiURL, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        setListOfWorkOuts(data);
        if (data.length > 0) {
          setShowState(false);
        } else {
          setShowState(true);
        }
      });
  }

  // Calls upon the list of workouts and displays information about it to the user
  //   const workOutListFromAPI = listOfWorkOuts
  //     .map((workouts) => {
  //       return (
  //         <div className="workOutsFromAPI">
  //           <div className="workOutsINFO" key={workouts.id} id={workouts.id}>
  //             <h4>{workouts.name}</h4>
  //             <h5>{workouts.equipment}</h5>
  //             <p>Level: {workouts.difficulty}</p>
  //             <p>Target Muscle Group: {workouts.muscle}</p>
  //             <button onClick={() => addWorkOutToList(workouts)}>
  //               Add Workout to Calendar
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setListOfWorkOuts(data);
  //       if (data.length > 0) {
  //         setShowState(false);
  //       } else {
  //         setShowState(true);
  //       }
  //     });

  function getWorkOutFromCard(workout) {
    console.log("this is from workout form");
    console.log(workout);
    getWorkOuts(workout);
  }

  // Calls upon the list of workouts and displays information about it to the user
  const workOutListFromAPI = listOfWorkOuts.map((workouts) => {
    return (
      <WorkOutCard
        name={workouts.name}
        equipment={workouts.equipment}
        difficulty={workouts.difficulty}
        muscle={workouts.muscle}
        getWorkOuts={getWorkOutFromCard}
        currentWorkOut={workouts}
      />
    );
  });

  // const workOutListFromAPI = () => {
  //     console.log(listOfWorkOuts.length)
  //     if (listOfWorkOuts.length > 0){
  //         debugger;
  //         listOfWorkOuts.map((workouts) => {
  //             return (
  //                 <div className="workOutsFromAPI">
  //                     <div className="workOutsINFO" key={workouts.id} id={workouts.id}>
  //                         <h4>{workouts.name}</h4>
  //                         <h5>{workouts.equipment}</h5>
  //                         <p>Level: {workouts.difficulty}</p>
  //                         <p>Target Muscle Group: {workouts.muscle}</p>
  //                         <button>Add Workout to Calendar</button>
  //                     </div>
  //                 </div>
  //             )
  //         })
  //     } else {
  //         <h4>message</h4>
  //     }
  // }
  const showMessage = showState ? (
    <h1>
      If nothing shows up, there were no matching exercises. PLEASE TRY AGAIN!
    </h1>
  ) : null;

  return (
    <div className="justify-center items-center p-10 flex flex-col max-h-max font-mono">
      {/*Two different forms: 1st - search by KEYWORD 2nd - search by three different categories*/}

      <div className="flex flex-col items-center max-h-max">
        <h4>Search for an Exercise</h4>

        <form
          id="workouts-search-by-term"
          className="flex flex-col items-center max-h-max"
          onSubmit={handleSearchAPI}
        >
          {/* <label htmlFor="workoutSearch">Search </label> */}
          <input
            className="border-2 border-red-500 rounded-md"
            type="text"
            id="workoutSearch"
            name="name"
          />
          <button className="border-red-400 bg-red-400 rounded-md border-4">
            Search
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <form
        id="workouts-by-type-form"
        className="flex flex-col items-center max-h-max p-6"
        onSubmit={callWorkOutApi}
      >
        <h4>
          Don't know what exercise to choose? Select the type, muscle group to
          target, and the difficulty.
        </h4>

        <div className="flex flex-col items-center max-h-max">
          <div className="flex flex-col items-center max-h-max p-3">
            <label htmlFor="work-out-type">Type: </label>
            <div className="p-4 object-center">
              <select
                className="border-8 rounded-sm"
                id="work-out-type-select"
                onChange={(event) => changeWorkOutType(event.target.value)}
                value={currentWorkOutType}
              >
                <option value="cardio">Cardio</option>
                <option value="olympic_weightlifting">
                  Olympic Weight Lifting
                </option>
                <option value="plyometrics">Plyometrics</option>
                <option value="powerlifting">Powerlifting</option>
                <option value="strength">Strength</option>
                <option value="stretching">Stretching</option>
                <option value="strongman">Strongman</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="muscle-type">
                What muscle-group would you like to target?
              </label>

              <select
                className="border-8 rounded-sm"
                id="muscle-group"
                onChange={(event) => changeMuscleGroup(event.target.value)}
                value={currentMuscleGroup}
              >
                <option value="abdominal">Abdominal</option>
                <option value="abductor">Abductor</option>
                <option value="adductor">Adductor</option>
                <option value="biceps">Biceps</option>
                <option value="calves">Calves</option>
                <option value="chest">Chest</option>
                <option value="forearms">Forearms</option>
                <option value="glutes">Glutes</option>
                <option value="hamstrings">Hamstrings</option>
                <option value="lats">Lats</option>
                <option value="lower Back">Lower Back</option>
                <option value="middle Back">Middle Back</option>
                <option value="neck">Neck</option>
                <option value="quadriceps">Quadriceps</option>
                <option value="traps">Traps</option>
                <option value="triceps">Triceps</option>
              </select>
            </div>
            <div className="p-4">
              <label htmlFor="difficulty-option">Choose Difficulty: </label>
              <select
                className="border-8 rounded-sm"
                id="difficulty"
                onChange={(event) => changeDifficulty(event.target.value)}
                value={currentDifficulty}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <button
              className="border-4 bg-red-400 border-red-400 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {showMessage}
      <div className="grid grid-cols-3 gap-2 p-6">{workOutListFromAPI}</div>
    </div>
  );
}

export default WorkOutForm;
