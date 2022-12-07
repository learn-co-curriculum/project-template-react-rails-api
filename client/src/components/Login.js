import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import {Form} from '../styled/Form'

function Login({onLogin}) {

    const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
    // const [formData, setFormData] = useState({
    //     name:'',
    //     email:'',
    //     password:''
    // })
    // const [errors, setErrors] = useState([])
    // const navigate = useNavigate()

    // const {name, password} = formData

    // function onSubmit(e){
    //     e.preventDefault()
    //     const user = {
    //         name,
    //         password
    //     }
    //     // Logs in user
    //     fetch(`/login`,{
    //       method:'POST',
    //       headers:{'Content-Type': 'application/json'},
    //       body:JSON.stringify(user)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 navigate.push(`/users/${user.id}`)
    //             })
    //         }else {
    //             res.json().then(json => setErrors(json.errors))
    //         }
    //     })
       
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    //   }
    // return (
    //     <> 
    //     <label>
    //       Username
    //       </label>
    //     <input type='text' name='name' value={name} onChange={handleChange} />
      
    //     <label>
    //      Password
    //      </label>
    //     <input type='password' name='password' value={password} onChange={handleChange} />
       
       
    //     <input type='submit' value='Log in!' onSubmit={onSubmit}/>
    //   {errors? <div>{errors}</div>:null}
    //     </>
    // )

}

export default Login
