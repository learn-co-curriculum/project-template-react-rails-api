import React,{useState} from "react"
import { useNavigate } from  "react-router-dom"

import "./CreateAccount.css"

const CreateAccountForm = () => {

    //Controlled form for username and password
    const [formData, setFormData] = useState({
        // name:"",
        age:"",
        calories_goal:"",
        username:"", 
        password:"",
        sex:"",
    })

    const onDataChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const createAccount = (event) => {
        event.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then();
    }

    return (
        <div className="form-container">
            <form className="create-user" onSubmit={createAccount}>
            <h1>Welcome to Fitness Friend!</h1>
            <h2>Sign up for an account today and improve your health by becoming more mindful of your food and exercise!</h2>
                {/* <input type="text" name="name" placeholder="Name" onChange={onDataChange} id={"new-name"}/>
                <br/> */}
                <input type="text" name="age" placeholder="Enter your age..." onChange={onDataChange}/>
                <br/>
                <input type="text" name="calories_goal" placeholder=" Enter your calories goal..." onChange={onDataChange}/>
                <br/>
                <input type="text" name="username" placeholder="Enter your username..." onChange={onDataChange}/>
                <br/>
                <input type="password" name="password" placeholder="Enter your password..." onChange={onDataChange}/>
                <br/>
                <input type="text" name="sex" placeholder="Enter your sex..." onChange={onDataChange}/>
                <br/>
                <input type="submit" name="create_user" value="Create Account" id={"submit-account"} />
            </form>
        </div>
    )
}

export default CreateAccountForm