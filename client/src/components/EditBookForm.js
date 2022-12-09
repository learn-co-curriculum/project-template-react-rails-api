import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditBookForm({updateBook}) {
  const navigate = useNavigate()
  const {id} = useParams()
  const [formData, setFormData] = useState({
    title:'',
    author:'',
    year:'',
    description:''
  })

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
        res.json().then(updateBook)
        navigate(`/`)
    })
  }

    return (
        <>
        <div className='App'>
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
          </div>
        </div>
        </>
    )
  }
  
  export default EditBookForm
