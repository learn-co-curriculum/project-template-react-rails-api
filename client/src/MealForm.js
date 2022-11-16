import { NavLink, Route, Routes } from "react-router-dom";

function MealForm() {
  return (
    <div className="meals-form">
      <form id="meal-form">
        <label htmlFor="mealname">Meal Name</label>
        <input type="text" id="mealname" />
        <label htmlFor="mealcalories">Meal Calories</label>
        <input type="number" id="mealcalories" />
        <label htmlFor="mealingredients">Meal Ingredients</label>
        <input type="textarea" name="ingredientlist" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MealForm;
