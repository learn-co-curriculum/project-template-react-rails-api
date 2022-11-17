import { useState, useEffect } from 'react'

function MealForm() {
  const api_id = "28d8ec75"
  const app_key = "79512bd96de025b96b0e26333b95a36e"
  // const [currentMeal, setCurrentMeal] = useState("")
  const [mealCalories, setMealCalories] = useState("")
  const [mealIngredients, setMealIngredients] = useState("")
  const [mealList, setMealList] = useState([])

<<<<<<< HEAD
    const apiURL = "https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e"
    // function onButtonClick() {
    //     useEffect(() => {
    //         fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e&ingr=chicken&nutrition-type=cooking")
    //         .then(response => response.json())
    //         .then(data => alert(data))
    //     }, [])
=======
  function onButtonClick(event) {
    event.preventDefault();
    fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e&ingr=chicken&nutrition-type=cooking")
    .then(response => response.json())
    .then(data => console.log(data))
        }
    

    // const changeMeal = (newMeal) => {
    //   setCurrentMeal(newMeal)
    //   console.log(newMeal)
>>>>>>> c4ac53cfd6a4b4da2d1e6d8af6b203da04401900
    // }

    const changeMealCalories = (newCalories) => {
      setMealCalories(newCalories)
      console.log(newCalories)
    }

    const changeMealIngredients = (newIngredients) => {
      setMealIngredients(newIngredients)
      console.log(newIngredients)
    }

<<<<<<< HEAD
    
=======
    function callMealApi(event) {
      event.preventDefault();
      const ingredientsParam = event.target.ingredientname.value;
      const caloriesParam = event.target.calories.value
      // const ingredientParam = `&ingr=${mealIngredients}`
      // const dayParam = `&day=${mealDay}`
      const fullURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=28d8ec75&app_key=79512bd96de025b96b0e26333b95a36e&ingr=${ingredientsParam}&calories=0-${caloriesParam}`
      if (ingredientsParam) {
        fetch(fullURL, {
          method: "GET",
          mode: 'cors'
        })
        .then(response => response.json())
        .then(data => setMealList(data.hints))
      } else {
        alert("Please enter a valid food")
      }
    }
    console.log(mealList)

    const apiMeals = mealList.map((meal) => {
      return (
        <div className="api-meals">
          <div className="meal-info" key={meal.id} id={meal.id}>
            <h4>{meal.food.label}</h4>
            <img src={meal.food.image} />
            <h5>{meal.food.nutrients.ENERC_KCAL} calories</h5>
            <button>Add Meal to Calendar</button>
          </div>
        </div>
      )
    })
>>>>>>> c4ac53cfd6a4b4da2d1e6d8af6b203da04401900


  return (
    <div className="meals-form">
      <form id="meals-form" onSubmit={callMealApi}>
        <label htmlFor="ingredientname" >Meal Ingredients</label>
        <input name="ingredientname" type="text" id="mealname" />
        <label htmlFor="mealcalories">Meal Calories</label>
<<<<<<< HEAD
        <input type="number" id="mealcalories" />
        <label htmlFor="mealingredients">Meal Ingredients</label>
        <input type="textarea" name="ingredientlist" />
        <label htmlFor="dayselection">Day of the Week</label>
        <input type="textarea" name="dayselection" />
        <input type="text" id="ingredients" name="ingredients"/ >
=======
        <input type="number" id="mealcalories" name="calories"/>
        {/* <label htmlFor="dayselection">Day of the Week</label>
        <input type="textarea" name="dayselection" /> */}
>>>>>>> c4ac53cfd6a4b4da2d1e6d8af6b203da04401900
        <button type="submit">Submit</button>
      </form>
      {apiMeals}
    </div>
  );
}

export default MealForm;
