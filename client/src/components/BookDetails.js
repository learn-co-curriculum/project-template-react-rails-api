import  { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
// import ReviewContainer from './ReviewContainer'
// import styled from 'styled-components'

function BookDetail() {
  const [book, setBook] = useState({})
  // const [review, setReview] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  // const navigate = useNavigate()

  useEffect(()=>{
    //GET to '/books/:id'
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


  // //Fetch Reviews
  // useEffect(() => {
  //   fetchReviews()
  // },[])

  // const fetchReviews = () => {
  //   fetch(`/books/${params.id}/reviews`)
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(data => {
  //         setReview(data)
  //         setLoading(false)
  //       })
  //     }else {
  //       res.json().then(data => setErrors(data.error))
  //     }
  //   })
  // }

//   const deleteReview = (id) => setReview(current => current.filter(p => p.id !== id)) 

//   function handleDelete(){
//     //DELETE to `/books/${params.id}`
//     fetch(`/reviews/${params.id}`,{
//       method:'DELETE',
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(res => {
//       if(res.ok){
//         deleteReview(id)
//         navigate.push('/')
//       } else {
//         res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//       }
//     })
//   }

//   const handleBuy = () => {
//     fetch(`/tickets`,{
//       method:'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify({production_id:id, user_id:1, price:30.50})
//     })
//     .then(res => {
//       if(res.ok){
//         navigate.push('/users/1')
//       } else {
//         res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//       }
//     })
//   }

  
  
 
  if(loading) return <div className="loading"><div></div><div></div><div></div><div></div></div>
  if(errors) return <h1>{errors}</h1>

  const {title, author, year, description} = book
  console.log(book)
  // const {rating, message} = review

  return (
      <div className="content">
          <div className='wrapper'>
            <div id="book-page" >
            <h1>{title}</h1>
              <h3>Author:</h3>
              <p>{author}</p>
              <h3>Year:</h3>
              <p>{year}</p>
              <h3>Description:</h3>
              <p>{description}</p>
            </div>
          </div>
      </div>
    )
  }

  
  export default BookDetail