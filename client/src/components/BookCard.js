import {Link, useParams, useNavigate} from 'react-router-dom'
// import {useState} from 'react'

function BookCard({book, deleteBook}) {
  const {title, author, id} = book
  // console.log(book)
  const navigate = useNavigate()
  const params = useParams()
  // const [errors, setErrors] = useState(false)

  function handleDelete() {
    fetch(`/books/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      // if(res.ok){
        deleteBook(id)
        navigate('/')
      // } else {
        // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    })
function BookCard({book}) {
    const {title, author, year, description, image, id} = book
    // console.log(book)
    return (
      <>
      <div className="book">
      <Link className="item-link" to={`/books/${id}`}> <h2>{title}</h2></Link>
        <p className="book-detail"><b>Author: </b>{author}</p>
        <p className="book-detail"><b>Genre: </b>{description}</p>
        <p className="book-detail">Written in <i>{year}</i></p>
      </div>
      <button>Edit</button>
      <button>Add a review</button>
      <button>Delete</button>
     </>
    );
  }

  // if(errors) return <h1>{errors}</h1>

  return (
    <>
    <div>
      <Link to={`/books/${id}`}> <h2>{title}</h2></Link>
        <p>Author : {author}</p>
        {/* <p>{year}</p>
        <p>{description}</p> */}
    </div>
    <button><Link to={`/books/${id}/edit`}>Edit</Link></button>
    <button onClick={handleDelete}>Delete</button>
    </>
  );
}
}

export default BookCard