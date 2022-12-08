import BookContainer from './BookContainer'

function Home({books, deleteBook}){
    return(
    <div>
        {/* <Image />  */}
        <BookContainer books={books} deleteBook={deleteBook}/>
    </div>
    )
}

export default Home