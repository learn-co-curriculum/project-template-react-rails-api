function Profile({ user }) {
    
    if (user.role_type === "Doctor") { return (
    <>
    <h1 style={{color: "#0D87E3"}}>This is your profile page, {user.role.first_name}!</h1>
    <h2>Username: {user.username}</h2>
    <h3>Name: {user.role.first_name} {user.role.last_name}</h3>
    <h3>Phone Number: {user.role.phone_number}</h3>
    <h3>Role: {user.role_type}</h3>
    <h3>Years of Experience: {user.role.years_of_experience}</h3>
    <h3>Specialty: {user.role.specialty}</h3>
    <h3>City: {user.role.city}</h3>
    <h3>Bio: {user.role.bio}</h3>
    </>
    )} else if (user.role_type === "Patient") { return (
    <>
    <h1 style={{color: "#0D87E3"}}>This is your profile page, {user.role.first_name}!</h1>
    <h2>Username: {user.username}</h2>
    <h3>Name: {user.role.first_name} {user.role.last_name}</h3>
    <h3>Phone Number: {user.role.phone_number}</h3>
    <h3>Role: {user.role_type}</h3>
    <h3>Date of Birth: {user.role.date_of_birth}</h3>
    </>

    )}

}

export default Profile;
