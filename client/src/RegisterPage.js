import { useState } from "react";

function RegisterPage({ onLogin, onCancelClick }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleRegister(event) {
        event.preventDefault();
        const user = {
            username,
            password,
        }
        if (password === passwordConfirmation) {
            fetch("/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(onLogin)
                } else {
                    res.json().then(event => alert(event.error))
                }
            })
        } else {
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
            alert("Yo your PASSWORD don't match DAWG")
        }
    }


    function cancelClick() {
        onCancelClick(false)
    }

    return (
        <form onSubmit={handleRegister} id="register-form">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Register</button>
            <button type="button" onClick={cancelClick}>Cancel</button>
        </form>
    );
}

export default RegisterPage
