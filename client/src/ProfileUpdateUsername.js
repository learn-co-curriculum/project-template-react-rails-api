function ProfileUpdateUsername({username, handleUsername, handleUsernameSubmit}){
    return(
        <form className="ageUpdateForm" onSubmit={handleUsernameSubmit}>
        <input
           type="text"
           name="age"
           placeholder="Enter Username ..."
           className="text"
           value={username}
           onChange={handleUsername}
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

export default ProfileUpdateUsername