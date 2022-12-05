import BookContainer from './BookContainer'

function Home({books}){
    return(
    <div>
        {/* <Image />  */}
        <BookContainer books={books} />
    </div>
    )
}

export default Home