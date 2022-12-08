import {Link} from 'react-router-dom'


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
  
  export default BookCard