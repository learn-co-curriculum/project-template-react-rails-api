import BookContainer from './BookContainer'

function Home({books}){
    return(
    <div className="content">
        <h1 id="project-title">Flatiron Library</h1>
        {/* <Image />  */}
        <BookContainer books={books} />
    </div>
    )
}

export default Home