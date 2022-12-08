import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'

function BookForm({addBook}) {
  const [formData, setFormData] = useState({
    title:'',
    author:'',
    year:'',
    // image:'',
    description:''
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

//   const homePage = () => {
    
//   }

  function onSubmit(e){
    e.preventDefault()
    navigate("/")
    
    fetch('/books',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(addBook)
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }
    return (
      <div className='App'>
      {errors?errors.map(e => <div>{e}</div>):null}
      <div onSubmit={onSubmit}>
        <label>Title : </label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
        
        <label> Author : </label>
        <input type='text' name='author' value={formData.author} onChange={handleChange} />
      
        <label>Year : </label>
        <input type='number' name='year' value={formData.year} onChange={handleChange} />
      
        {/* <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} /> */}
            
        <label>Description</label>
        <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
      
        <input type='submit' value='Add Book' onClick={onSubmit}/>
      </div>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
      </div>
    )
  }
  
  export default BookForm

