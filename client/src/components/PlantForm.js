import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const PlantForm = ({user}) => {
    const [errors, setErrors] = useState([]);
    const [plantName, setPlantName] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [petSafe, setPetSafe] = useState(false)
    const [indoor, setIndoor] = useState(false)

    const history = useHistory();

    //handle/get values from all form inputs
    const handlePlantName = (e) => {
        setPlantName(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handlePetSafeChecked = () => {
        setPetSafe(petSafe => !petSafe)
    }

    const handleIndoorChecked = () => {
        setIndoor(indoor => !indoor)
    }

//POST REQUEST to submit new plant
const handlePlantSubmit = (e) => {
    e.preventDefault();
    const formData = {
        plant_name: plantName,
        image: image,
        state: location,
        pet_safe: petSafe,
        indoor: indoor,
        user_id: user.id,
    }
    console.log(formData)
    
    fetch(`/plant_posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          history.push('/myPlants')
        });
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })

}
//render errors to li to display on page
const formErrorMsg = errors.map((err) => (
    <li key={err}>{err}</li>
    ))
    
  return (
    <div className='plant-form-container'>
        <h2>Add a new Plant!</h2>
        <form className="plant-form" autoComplete='off' onSubmit={handlePlantSubmit}>

            <label>Plant Name:</label>
            <input type='text'id="name" name="plant_name" value={plantName} onChange={handlePlantName} required/>

            <label>Image URL:</label>
            <input type='text'id="image" name="image" value={image} onChange={handleImage} required/>

            <label>State</label>
            <select id="state" name="state" value={location} onChange={handleLocation} required>
                <option value="select">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>

            <label>Indoor</label>
            <input type="radio" id="indoor" name="indoor" checked={indoor ? "checked" : ''} value={indoor} onChange={handleIndoorChecked} />
        
            <label>Pet Safe</label>
            <input type="radio" id="pet_safe" name="pet_safe" checked={petSafe ? "checked" : ''} value={petSafe} onChange={handlePetSafeChecked} />

            <button id="add-btn"className='submit-btn' type="submit">ADD PLANT</button>
        </form>
        <ul>{formErrorMsg}</ul>
</div>

  )
}

export default PlantForm