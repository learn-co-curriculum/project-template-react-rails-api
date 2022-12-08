import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import {Form} from '../styled/Form'

function Login({currentUser, setCurrentUser}) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

    
//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username }),
//     })
//       .then((r) => r.json())
//       .then((user) => onLogin(user));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input 
//         type="text"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );


    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {username, password} = formData

    function onSubmit(e){
        // e.preventDefault()
        const user = {
            username,
            password
        }

        let url = `/login`
        if(signup) url = '/users'
        // Logs in user
        fetch(url,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    sessionStorage.setItem('user_id', user.id)      
                    navigate(`/users/${user.id}`)
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return (
        <> 
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' onClick={onSubmit} />
        <input type='submit' onClick={() => setSignup(true)} value='Sign up!'/>
      {errors? <div>{errors}</div>:null}
        </>
    )

}

export default Login
