import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditBookForm({updateBook}) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title:'',
    author:'',
    year:'',
    description:''
  })
  // const [errors, setErrors] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetch(`/books/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  function onSubmit(e){
    e.preventDefault()
    fetch(`/books/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      // if(res.ok){
        res.json().then(updateBook)
        navigate(`/`)
      // } else {
        //Display errors
        // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      // }
    })
  }
    return (
        <>
        <div className='App'>
            {/* {errors?errors.map(e => <div>{e}</div>):null} */}
            <div >
                <label>Title : </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />
                
                <label> Author : </label>
                <input type='text' name='author' value={formData.author} onChange={handleChange} />
            
                <label>Year : </label>
                <input type='number' name='year' value={formData.year} onChange={handleChange} />
            
                <label>Description : </label>
                <input type='text' name='description' value={formData.description} onChange={handleChange} />
                    
                <input  className= "button" type='submit' value='Update Book' onClick={onSubmit}/>
            {/* {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null} */}
            </div>
        </div>
        </>
  )}
  
  export default EditBookForm
