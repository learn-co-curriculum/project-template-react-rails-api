import {Link} from 'react-router-dom'
// import styled from 'styled-components'

function ReviewCard({review}) {
    const {rating, message, image, id} = review
    // console.log(review)
    return (
      <>
      <div className="content">
      <Link to={`/books/${id}`}></Link>
        <p>Rating : {rating}</p>
        <p>Review : {message}</p>
      </div>
      <img alt ={message} src={image}/>
      {/* </Card> */}
     </>
    );
  }
  
  export default ReviewCard