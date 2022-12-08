import {Link} from 'react-router-dom'


function BookCard({book}) {
    const {title, author, year, description, image, id} = book
    // console.log(book)
    return (
      <>
      <div>
      <Link to={`/books/${id}`}> <h2>{title}</h2></Link>
        <p>{author}</p>
        <p>{year}</p>
        <p>{description}</p>
      </div>
      <button>Edit</button>
      <button>Add a review</button>
      <button>Delete</button>

     </>
    );
  }
  
  export default BookCard