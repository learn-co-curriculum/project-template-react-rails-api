function ProfileUpdateAge({age, handleAge, handleAgeSubmit}){
    return(
        <form className="ageUpdateForm" onSubmit={handleAgeSubmit}>
        <input
           type="text"
           name="age"
           placeholder="Enter age ..."
           className="text"
           value={age}
           onChange={handleAge}
         />
          <input
           type="submit"
           name="submit"
           value="Update Age"
           className="submit"
         />
     </form>
    )
}

export default ProfileUpdateAge