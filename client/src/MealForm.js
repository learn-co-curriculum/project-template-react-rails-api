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
    <div className="justify-center items-center p-10 flex flex-col max-h-max font-mono">
      <form id="meals-form" className="flex flex-col items-center max-h-max" onSubmit={callMealApi}>
      <div className="p-4">
        <label htmlFor="ingredientname">Meal Ingredients:</label>
        <input className="border-2 border-red-500 rounded-md" name="ingredientname" type="text" id="mealname" />
        </div>
        <div className="p-4">
        <label htmlFor="mealcalories">Meal Calories:</label>
        <input className="border-2 border-red-500 rounded-md" type="number" id="mealcalories" name="calories" />
        </div>
        {/* <label htmlFor="dayselection">Day of the Week</label>
        <input type="textarea" name="dayselection" /> */}
        <button className="bg-red-400 border-4 border-red-400 rounded-md" type="submit">Submit</button>
      </form>
      <div className="grid grid-cols-3 gap-2 p-6">
        {apiMeals}
      </div>
    </div>
  );
}

export default MealForm;
