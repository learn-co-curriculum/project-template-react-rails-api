import BookContainer from './BookContainer'

function Home({books, deleteBook}){
    return(
    <div className="content">
        <h1 id="project-title">Flatiron Library</h1>
        <BookContainer books={books} deleteBook={deleteBook}/>
    </div>
    )
}

export default Home