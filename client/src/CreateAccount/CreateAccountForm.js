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
        <form className="create-user" onSubmit={createAccount}>
            {/* <input type="text" name="name" placeholder="Name" onChange={onDataChange} id={"new-name"}/>
            <br/> */}
            <input type="text" name="age" placeholder="Age" onChange={onDataChange}/>
            <br/>
            <input type="text" name="calories_goal" placeholder="Calories Goal" onChange={onDataChange}/>
            <br/>
            <input type="text" name="username" placeholder="Username" onChange={onDataChange}/>
            <br/>
            <input type="password" name="password" placeholder="Password" onChange={onDataChange}/>
            <br/>
            <input type="text" name="sex" placeholder="Sex" onChange={onDataChange}/>
            <br/>
            <input type="submit" name="create_user" value="Create User" id={"submit-account"} />
            
        </form>
    )
}

export default CreateAccountForm