const UserHomePage = ({ user }) => {

    const image = user.user_photo

    console.log(image)

    return (
        <div>
            <h1>Home</h1>
            <h3>Welcome Back {user.name}</h3>
            <img src={user.user_photo} alt='user photo'></img>
        </div>
    )
}

export default UserHomePage
