
import { useState } from "react";
function Login({setUser, setUserID, user}) {
    const [userName, setUserName] = useState("");
    const [myPassword, setPassword] = useState("");
    const [my_confirm, setConfirm] = useState("");
    const [option, setOption] = useState("login")
    const [display, setOptionDisplay] = useState(false)
    
    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleConfirm(event) {
        setConfirm(event.target.value);
    }

    function handleOption(event) {
        setOption(event.target.value);
        if(event.target.value === "sign up"){
            setOptionDisplay(true)
        }
        else{
            setOptionDisplay(false)
        }
    }

   
      function handleSubmit(e) {
        e.preventDefault();
        if (option === "sign up" && myPassword === my_confirm) {
            const formData = {
            password: myPassword,
            username: userName,
            codeBreakScore: 50
        };
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      })
      .then((r)=>r.json())
      .then((r) => {
                if(r.errors === undefined){
                  setUser(r.username)
                  setUserID(r.id)
              }})}
      else if (option === "sign up" && myPassword !== my_confirm) {
        alert("Passwords Don't Match")
      }
      else{
        const formData = {
            password: myPassword,
            username: userName}
            fetch("/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
              .then((r)=>r.json())
              .then((r) => {
                if(r.errors === undefined){
                  setUser(r.username)
                  setUserID(r.id)
                }
                else{
                  alert("Invalid Login Info")
                }
              });
            }    }

      return(
        <div className="loginPage">
          <h1 className='openingH1'>Hello {user}</h1>
            <button className="outbutton" onClick={handleLogout}>logout</button> 
            <form className="loginForm" onSubmit={handleSubmit}>
            <h1>Log In or Sign Up</h1>
                <select
                    className="loginput" 
                    onChange={handleOption}
                    value = {option}>
                    <option value= "login">Log In</option>
                    <option value = "sign up">Sign Up</option>
                </select>  
                <br/>
                <input type="text"  className="loginput" placeholder = "UserName" onChange={handleUserName} value={userName} />
                <br/>
                <input type="text"  className="loginput" placeholder = "Password" onChange={handlePassword} value={myPassword} />
                <br/>
                {display ? <input type="text"  className="loginput" placeholder = "Confirm Password" onChange={handleConfirm} value={my_confirm} /> : null}
                {display ? <br /> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default Login;