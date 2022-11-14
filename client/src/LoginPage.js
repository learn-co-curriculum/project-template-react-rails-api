import { useState } from 'react'

function LoginPage() {
    const [errorMessage, setErrorMessage] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const ourErrorMessage = (username) => 
    username === errorMessage.username && (
        <div className="error-message">{errorMessage.message}</div>
    );

    const database = [
        {
           username: "user1",
           password: "pass1"
        },
        {
           username: "user2",
           password: "pass2"
        }
        ];
        const errors = {
           user: "invalid username",
           pass: "invalid password"
        };
        
        const handleLoginSubmit = (event) => {
           event.preventDefault();
           let { user, pass } = document.forms[0]
           const userData = database.find((user) => user.username === user.value);

           // Compare user info
           if (userData) {
             if (userData.password !== pass.value) {
               // Invalid password
               setErrorMessage({ name: "pass", message: errors.pass });
             } else {
               setIsSubmitted(true);
             }
           } else {
             // Username not found
             setErrorMessage({ name: "user", message: errors.user });
           }
         };

    const checkForm = (
        <div className="form">
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="user" required />
            {ourErrorMessage("user")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {ourErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="title">Sign In</div>
                { isSubmitted ? <div>User is successfully logged in!</div> : checkForm }
            </div>
        </div>
    )


}

export default LoginPage