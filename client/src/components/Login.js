import React, {useState} from 'react'
import Auth from './Auth'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isShow , setShow] = useState(false);
  const [errors, setErrors] = useState([])

  function toggleShow() {
    setShow(!isShow)
  } 

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
      .then(res => res.json())
      .then(json => {
          console.log(user)
        if(json.errors) setErrors(json.errors)
      })
    }
 
    return (
  <> 
  {isShow?  
  <Auth isShow={isShow} setShow={setShow}/> :
  <form onSubmit={onSubmit}>
     <button className="loginBtn"  onClick={toggleShow}>Don't have an account?</button> 
          <label>
            Username
    
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          Password
      
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        
          <input type="submit" value="Login" />
        </form>
        }
        {errors ? <div>{errors}</div> : null}



</>
    )
}

export default Login;