import {useState} from 'react';   

function Auth({setShow, isShow}){
    function toggleShow() {
      setShow(!isShow)
    } 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name: username,
            email,
            password
        }
       
        fetch(`http://localhost:3000/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(Object.entries(json.errors))
        })
    }
    return (
        <>

        <h1>Create an account</h1>
        <form onSubmit={onSubmit}>
        <label>
          Username
  
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
        email
    
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
        Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      
        <input type="submit" value="Sign up" />
        <button className="loginBtn"  onClick={toggleShow}>back</button> 
      </form>
      {errors?errors.map(e => <div key={errors.length++}>{e[0]+': ' + e[1]}</div>):null}
      </>
    )
}


export default Auth