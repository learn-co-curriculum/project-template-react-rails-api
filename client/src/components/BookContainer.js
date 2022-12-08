import BookCard from './BookCard'

function BookContainer({books, deleteBook}) {
    return (
     <div>
         <span>FlatIron Books</span>
         <div>
            {books.map(book => <BookCard key={book.id} book={book} deleteBook={deleteBook} />)}
         </div>
     </div>
    );
  }
  
export default BookContainer
