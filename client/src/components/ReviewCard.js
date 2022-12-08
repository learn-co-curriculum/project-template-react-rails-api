import {Link} from 'react-router-dom'

function ReviewCard({review}) {
    const {rating, message, image, id} = review

    return (
      <>
        <div>
          <Link to={`/books/${id}`}></Link>
            <p>Rating : {rating}</p>
            <p>Review : {message}</p>
        </div>
        <img alt ={message} src={image}/>
     </>
    );
  }
  
  export default ReviewCard