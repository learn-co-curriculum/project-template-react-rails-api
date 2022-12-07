import BookContainer from './BookContainer'
import ReviewContainer from './ReviewContainer'

function Home({books, reviews}){
    return(
    <div>
        {/* <Image />  */}
        <BookContainer books={books} />
        <ReviewContainer reviews={reviews}/>
    </div>
    )
}

export default Home