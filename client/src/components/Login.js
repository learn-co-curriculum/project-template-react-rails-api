import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }
       
        fetch(`http://localhost:3000/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(user)
          if(json.errors) setErrors(json.errors)
        })
    }
    return (
        <> 
          <form onSubmit={onSubmit}>
          <label>
            Username
    
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          Password
      
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        
          <input type="submit" value="Login!" />
        </form>
        {errors ? <div>{errors}</div> : null}


        <form>
            <p id="newBtn">Create a new account</p>
            <div>
            <label >Create UserName: </label>
            <input className="loginData" type="text" name="userId" ></input>
            </div>
            <div>
                <label>Create Password: </label>
                <input className="loginData" type="password" name="pwd" ></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className="loginData" type="password" name="pwd"></input>
            </div>
            <div>
                <label>Add Email: </label>
                <input className="loginData" type="email" placeholder="Example@something.com" ></input>
            </div>
            <div>
                <input className="loginBtn" type="submit" value="Create Account" alt="Create Account"></input>
            </div>
            </form>
      </>
    )
}

export default Login;