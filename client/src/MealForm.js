
function MealForm() {
    return (
        <form id="meal-form">
            <label htmlFor="mealname">Meal Name</label>
            <input 
                type="text"
                id="mealname"
            />
            <label htmlFor="mealcalories">Meal Calories</label>
            <input 
                type="number"
                id="mealcalories"
            />
            <label htmlFor="mealingredients">Meal Ingredients</label>
            <input 
                type="textarea"
                name="ingredientlist"
            />
            <button type="submit">Submit</button>

        </form>
    )
}

export default MealForm