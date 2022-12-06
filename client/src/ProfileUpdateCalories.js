function ProfileUpdateCalories({calories_goal, handleCalories, handleCaloriesSubmit}){
    return(
        <form className="ageUpdateForm" onSubmit={handleCaloriesSubmit}>
        <input
           type="text"
           name="age"
           placeholder="Enter calories ..."
           className="text"
           value={calories_goal}
           onChange={handleCalories}
         />
          <input
           type="submit"
           name="submit"
           value="Update Sex"
           className="submit"
         />
     </form>
    )
}

export default ProfileUpdateCalories