
function WorkOutReviews({ itemToReview }) {
    return (
        <div>
            <h2>{itemToReview.name}</h2>
            <label htmlFor="review">Review: </label>
            <textarea name="Text1" cols="60" rows="5"></textarea>
            <button>Post Review</button>
        </div>
    )
}

export default WorkOutReviews