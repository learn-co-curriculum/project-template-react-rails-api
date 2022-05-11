function ProfileInfo({user}) {
    const { name, email, address, image, age, verified, early, nightOwl } = user;
    return (
        <div className="profile-info">
            <h1>ProfileInfo</h1>
            <form>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h3>{address}</h3>
			<p>{{early} ? '🐓' : null}    {{nightOwl} ? '🦉' : null} </p>
			<p> Verified: {{verified} ? '✅' : null}</p>

            <label>
                 Name:
                 <input type="text" name="name" />
             </label>
             <label>
                 <h2>{email}:</h2>
                 <input type="email" name="email" />
             </label>
             <label>Address:
             <input type="text" name="address" />
             </label>
			 <label>Select a file:</label>
			 <input type="file" accept="image/*,.pdf" />
			<input type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default ProfileInfo;