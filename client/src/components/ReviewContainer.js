import ReviewCard from './ReviewCard'

function ReviewContainer({reviews}) {
    return (
     <div>
        <div>
            {reviews.map(review => <ReviewCard key={review.id} review={review}  />)}
        </div>
     </div>
    );
  }
  
export default ReviewContainer
