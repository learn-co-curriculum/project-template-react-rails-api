import { NavLink } from "react-router-dom";
import { useState } from "react";
import WorkOutReviews from "./WorkOutReviews";
import MealsReviews from "./MealsReviews";

function Profile({ user, listOfWorkOuts, setItemToReview, listOfMeals, deleteReview, review }) {
  const [showReviewTextBox, setShowReviewTextBox] = useState(false);
  function clickOnReviewButton(workout) {
    setItemToReview(workout);
  }

  const handleClickReviewShow = () => {
    setShowReviewTextBox((showReviewTextBox) => !showReviewTextBox);
  };

  //NEED TO ADD THIS TO THE BACKEND TO MAKE IT WORK
  function handleDeleteClick() {
    fetch(`/deletereviews`, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => {
        deleteReview(review)
    })
  }

  //DISPLAYS USER INFO
  //MIGHT NEED ADDITIONAL CODE FOR MEALS AND WORKOUTS IF NEED BE
  console.log(listOfWorkOuts);
  let workOutShowList = [];
  if (listOfWorkOuts?.length > 0) {
    workOutShowList = listOfWorkOuts.map((workout) => {
      return (
        <div>
          <h2>{workout.name}</h2>
          <p>{workout.difficulty}</p>
          <p>{workout.muscle}</p>
          <button onClick={handleDeleteClick} className="border-4 border-red-400 bg-red-400 rounded-md">
            Delete Work-Out
          </button>
          <button
            className="border-4 border-red-400 bg-red-400 rounded-md"
            onClick={handleClickReviewShow}
          >
            Write Review
          </button>
          {showReviewTextBox ? <WorkOutReviews /> : null}
        </div>
      );
    });
  }

  let mealShowList = [];
  if (listOfMeals?.length > 0) {
    mealShowList = listOfMeals.map((meal) => {
      console.log(meal);
      return (
        <div>
          <img className="w-100 h-100" src={meal.food.image} />
          <p>{meal.food.label}</p>
          <p>{meal.food.nutrients["ENERC_KCAL"]}</p>
          <div className="p-4">
            <button onClick={handleDeleteClick} className="border-4 border-red-400 bg-red-400 rounded-md">
              Delete Meals
            </button>
            <button
              className="border-4 border-red-400 bg-red-400 rounded-md"
              onClick={handleClickReviewShow}
            >
              Write Review
            </button>
          </div>
          {showReviewTextBox ? <MealsReviews /> : null}
        </div>
      );
    });
  }

  return (
    <div className="justify-center items-center p-10 flex flex-col max-h-max font-mono">
      <h3 className="font-extrabold text-2xl">Hi, {user.name}!</h3>
      <img alt="avatar" src={user.image} width={100} height={100} />
      <div className="p-4">
        <NavLink to="/profilesettings">
          <button className="border-4 border-red-400 bg-red-400 rounded-md text-sm">
            Edit User Settings
          </button>
        </NavLink>
      </div>
      <div className="border-2 border-gray-200 rounded-md text-xl font-bold">
        <h3>Saved Meals List:</h3>
      </div>
      {mealShowList}
      <br></br>
      <br></br>
      <div className="border-2 border-gray-200 rounded-md text-xl font-bold">
        <h3>Saved Workouts List:</h3>
      </div>
      {workOutShowList}
    </div>
  );
}

export default Profile;
