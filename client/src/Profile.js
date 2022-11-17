import { NavLink } from "react-router-dom";

function Profile({ user, listOfWorkOuts, setItemToReview, listOfMeals }) {
    function clickOnReviewButton(workout){
        setItemToReview(workout)
    }



    //DISPLAYS USER INFO 
    //MIGHT NEED ADDITIONAL CODE FOR MEALS AND WORKOUTS IF NEED BE
    console.log(listOfWorkOuts)
    let workOutShowList = []
    if (listOfWorkOuts?.length > 0){
        workOutShowList = listOfWorkOuts.map((workout) => {
            return (
                <div className="show-Work-Out-on-Profile">
                    <p>{workout.name}</p>
                    <p>{workout.difficulty}</p>
                    <p>{workout.muscle}</p>
                    <button>Delete Work-Out</button>
                    <NavLink to="/workoutreview">
                        <button onClick={() => clickOnReviewButton(workout)}>Write A Review</button>
                    </NavLink>
                </div>
            )
        })
    }

    let mealShowList = []
    if (listOfMeals?.length > 0) {
        mealShowList = listOfMeals.map((meal) => {
            console.log(meal)
            return (
                <div className="show-meal-on-profile">
                    <p>{meal.food.label}</p>
                    <p>{meal.food.nutrients["ENERC_KCAL"]}</p>
                <button>Delete Meals</button>
                <NavLink to="/mealreview">
                    <button onClick={() => clickOnReviewButton(meal)}>Write A Review</button>
                </NavLink>
                </div>
            )
        })
    }


    return (
        <div>
            <NavLink to="/profilesettings">
                <button>Edit User Settings</button>
            </NavLink>
            <h3>hi! {user.name}</h3>
            <h3>this is my avatar: <img alt="avatar" src={user.image} width={100} height={100} /></h3>
            <h3>Meals List</h3>
            {mealShowList}
            <h3>Workout List</h3>
            {workOutShowList}
        </div>
    )
}

export default Profile;