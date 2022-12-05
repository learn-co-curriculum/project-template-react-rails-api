import React,{useState} from "react"
import "./CreateAccount.css"

const CreateAccountForm = () => {

    //Controlled form for username and password
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        fitnessGoal:"",
        caloriesGoal:"",
        caloriesGoal2:"",
        username:"", 
        password:""
    })

    const onDataChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const createAccount = (event) => {
        event.preventDefault()
        //send data to database to confirm
        //on confirm, render main page
        //on deny re-enter data and tell user they're stupid
    }

    return (
        <form className="create-user" onSubmit={createAccount}>
            <input type="text" name="name" placeholder="Name" onChange={onDataChange} id={"new-name"}/>
            <br/>
            <input type="text" name="age" placeholder="Age" onChange={onDataChange}/>
            <br/>
            <input type="text" name="fitnessGoal" placeholder="Fitness Goal" onChange={onDataChange}/>
            <br/>
            <input type="text" name="caloriesGoal" placeholder="Calories Goal (net)" onChange={onDataChange}/>
            <br/>
            <input type="text" name="caloriesGoal2" placeholder="Calories Goal (numeric)" onChange={onDataChange}/>
            <br/>
            <input type="text" name="username" placeholder="Username" onChange={onDataChange}/>
            <br/>
            <input type="password" name="password" placeholder="Password" onChange={onDataChange}/>
            <br/>
            <input type="submit" name="create_user" value="Create User" id={"submit-account"} />
        </form>
    )
}

export default CreateAccountForm