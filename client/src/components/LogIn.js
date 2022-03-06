import React, {useState} from 'react'

function Login({setIsAuthenticated, setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setError] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {  
          if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true)
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
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
      {errors?errors.map(e => <div>{e}</div>):null}
        </>
    )
}

export default Login;
