import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function MealForm() {

    // function onButtonClick() {
    //     useEffect(() => {
    //         fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e&ingr=chicken&nutrition-type=cooking")
    //         .then(response => response.json())
    //         .then(data => alert(data))
    //     }, [])
    // }





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
        {/* <button type="" */}
      </form>
    </div>
  );
}

export default MealForm;
