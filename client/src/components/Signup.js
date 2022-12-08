import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import {Form} from '../styled/Form'

function SignUp() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
       
        const user = {
            username,
            password
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleClick = () => {
        setIsLiked(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <div id ="signup-page" className="content"> 
        <label>
          Username
          </label>  
          <input placeholder="Your Username..." type='text' name='name' value={name} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input placeholder="Your Email..." type='text' name='email' value={email} onChange={handleChange} />
          <input type='text' name='username' value={username} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
     
        <input id="signup-form" className="button" type='submit' onSubmit={onSubmit} onClick={handleClick}>
        {isLiked ? "Sign up!" : "Signed up!"}
        </input>

      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )
}

export default SignUp
