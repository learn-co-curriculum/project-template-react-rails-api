// import styled from 'styled-components'
import BookCard from './BookCard'


function BookContainer({books}) {
    return (
     <div>
         <span>F</span>latIron
         <span>B</span>ooks
         <div>
             {books.map(book => <BookCard key={book.id} book={book}  />)}
         </div>
     </div>
    );
  }
  
export default BookContainer
