import BookCard from './BookCard'

function BookContainer({books, deleteBook}) {
    return (
     <div className="content">
         <div className="grid-container">
             {books.map(book => <BookCard key={book.id} book={book}  />)}
         </div>
     </div>
    );
  }
  
export default BookContainer
