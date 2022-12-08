import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const {username, password} = formData
    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

        let url = `/login`
        if(signup) url = '/users'
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
        <label>Username : </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
      
        <label>Password : </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
        <input type='submit' value='Log In' onClick={onSubmit} />
        <input type='submit' onClick={() => setSignup(true)} value='Sign Up'/>
      {errors? <div>{errors}</div>:null}
        </>
    )

}

export default Login
