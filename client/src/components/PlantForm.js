import React,{useState} from 'react'

const initialState={
    plant_name: "",
    image:"",
    state:"",
    pet_safe:"",
    indoor:false,
}

const PlantForm = ({user}) => {
    const[formData, setFormData] = useState(initialState)
    const[dropDown,setDropDown] = useState(false)

    // handle the opening of the drop down menu
    const handleDropDown = () => {
        setDropDown(!dropDown);
    };

    // handle user input into form field
    const handleOnChange = (e) => {
        const{ name, value } = e.target;
        // update state here
        setFormData(formData => {
            return{
                ...formData,
                user_id: user.id,
                [name]:value
            };
        })
    }

//POST REQUEST to submit new plant
const handlePlantSubmit = (e) => {
    e.preventDefault();
    
    fetch(`/plant_posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(
        //reset form state
        setFormData(initialState)
    )
    .catch(err => console.error(err))
}

    
  return (
    <div className='plant-form-container'>
    <h2>Add a new Plant!</h2>
    <form className="plant-form" autoComplete='off' onSubmit={handlePlantSubmit}>
        <label>Plant Name:</label>
        <input type='text'id="name" name="plant_name" value={formData.plant_name} onChange={handleOnChange} required/>

        <label>Image URL:</label>
        <input type='text'id="image" name="image" value={formData.image} onChange={handleOnChange} required/>

        <label>State</label>
        <input type='text'id="state" name="state" value={formData.state} onChange={handleOnChange} required/>

        {/* <label>State</label>
        <div className="dropdown">
            <button onClick={handleDropDown}>Dropdown</button>
            {dropDown ? (
                <ul className="state">
                    <li className="state-item">
                        <button> Alabama </button>
                    </li>
                    <li className="state-item">
                        <button> Arkansas </button>
                    </li>
                </ul>
            ) : null}
            {dropDown ? <div>Is Open </div> : <div>Is Closed</div>}
        </div> */}

        <label>Indoor</label>
        <input type="radio" id="indoor" name="indoor" value={formData.indoor} onChange={handleOnChange} />
        {/* <input type='text' id="indoor" name="indoor" value={formData.indoor} onChange={handleOnChange} required/> */}

        <label>Pet Safe</label>
        <input type='text' id="pet_safe" name="pet_safe" value={formData.pet_safe} onChange={handleOnChange} required/>

        <button id="add-btn"className='submit-btn' type="submit">ADD PLANT</button>
    </form>
</div>

  )
}

export default PlantForm