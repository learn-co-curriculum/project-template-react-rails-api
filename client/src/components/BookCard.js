import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

function BookCard({book, deleteBook}) {
  const {title, author, id, year, description} = book
  // console.log(book)
  const navigate = useNavigate()
  const params = useParams()
  // const [errors, setErrors] = useState(false)

   function handleDelete() {
     fetch(`/books/${id}`,{
       method:'DELETE',
       // headers: {'Content-Type': 'application/json'}
      })
      navigate('/')
    // await deleteBook(id)
    // await fetch(`/books`)
    // .then(res => res.json())
    // .then(data => deleteBook(data))
    // .then(res => {
    //   if(res.ok){
    //     deleteBook(id)
    //   } else {
    //     res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    // }})
  

    
    // if(errors) return <h1>{errors}</h1>
  }
    return (
      <>
    <div className="book">
      <Link className="item-link" to={`/books/${id}`}> <h2>{title}</h2></Link>
        <p className="book-detail">Author : {author}</p>
        <p className="book-detail">Written in <i>{year}</i></p>
        <p className="book-detail"><b>Genre: </b>{description}</p>
        <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button>
        <button className="button" onClick={handleDelete}>Delete</button>
    </div>
    </>
  );
}


export default BookCard