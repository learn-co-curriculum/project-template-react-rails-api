import { useState } from "react";
import MealCard from "./MealCard";

function MealForm({ getMeals }) {
  const [mealList, setMealList] = useState([]);

  function callMealApi(event) {
    event.preventDefault();
    const ingredientsParam = event.target.ingredientname.value;
    const caloriesParam = event.target.calories.value;
    const fullURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e&ingr=${ingredientsParam}&calories=0-${caloriesParam}`;
    if (ingredientsParam) {
      fetch(fullURL, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => setMealList(data.hints));
    } else {
      alert("Please enter a valid food");
    }
  }

  function getMealsFromCard(meal) {
    getMeals(meal)
  }

  const apiMeals = mealList.map((meal) => {
    return (
        <MealCard
          name={meal.food.label}
          image={meal.food.image}
          calories={meal.food.nutrients.ENERC_KCAL}
          getMeals={getMealsFromCard}
          currentMeal={meal}
        />
    );
  });

  return (
    <div className="meals-form">
      <form id="meals-form" onSubmit={callMealApi}>
        <label htmlFor="ingredientname">Meal Ingredients</label>
        <input name="ingredientname" type="text" id="mealname" />
        <label htmlFor="mealcalories">Meal Calories</label>
        <input type="number" id="mealcalories" name="calories" />
        {/* <label htmlFor="dayselection">Day of the Week</label>
        <input type="textarea" name="dayselection" /> */}
        <button type="submit">Submit</button>
      </form>
      <div className="meals-div">
        {apiMeals}
      </div>
    </div>
  );
}

export default MealForm;
