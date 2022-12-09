import  { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'

function BookDetail() {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  // const navigate = useNavigate()

  useEffect(()=>{
    fetch(`/books/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setBook(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[params.id])
 
  if(loading) return <div className="loading"><div></div><div></div><div></div><div></div></div>
  if(errors) return <h1>{errors}</h1>

  const {title, author, year, genre, description} = book

  return (
      <div className="content">
          <div className='wrapper'>
            <div id="book-page" >
            <h1>{title}</h1>
              <h3>Author : </h3>
              <p>{author}</p>
              <h3>Year : </h3>
              <p>{year}</p>
              <h3>Genre : </h3>
              <p>{genre}</p>
              <h3>Description : </h3>
              <p>{description}</p>
            </div>
          </div>
      </div>
    )
  }

  
  export default BookDetail