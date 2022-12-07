import BookCard from './BookCard'


function BookContainer({books}) {
    return (
     <div>
         <span>FlatIron Books</span>
         <div>
             {books.map(book => <BookCard key={book.id} book={book}  />)}
         </div>
     </div>
    );
  }
  
export default BookContainer
