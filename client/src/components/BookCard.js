import {Link} from 'react-router-dom'
// import styled from 'styled-components'


function BookCard({book}) {
    const {title, author, year, description, image, id} = book
    console.log(book)
    return (
      // <Card>
      <>
      <div>
      <Link to={`/books/${id}`}> <h2>{title}</h2></Link>
        <p>{author}</p>
        <p>{year}</p>
        <p>{description}</p>
      </div>
      <img src={image}/>
      {/* </Card> */}
     </>
    );
  }
  
  export default BookCard