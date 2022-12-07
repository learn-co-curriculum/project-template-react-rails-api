function ProfileUpdateSex({sex, handleSex, handleSexSubmit}){
    return(
        <form className="ageUpdateForm" onSubmit={handleSexSubmit}>
        <input
           type="text"
           name="age"
           placeholder="Enter sex ..."
           className="text"
           value={sex}
           onChange={handleSex}
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

export default ProfileUpdateSex