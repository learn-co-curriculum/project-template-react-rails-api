import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import {Form} from '../styled/Form'

function SignUp() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {name, email, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            email,
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
                    navigate.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
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
          <input type='text' name='name' value={name} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        
       
        <input type='submit' value='Sign up!' onSubmit={onSubmit}/>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp
