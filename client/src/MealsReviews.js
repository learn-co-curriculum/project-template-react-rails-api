
function MealsReviews ({ itemToReview }) {
    return (
        <div>
            <h2>{itemToReview}</h2>
            <label htmlFor="review">Review: </label>
            <textarea name="Text1" cols="60" rows="5"></textarea>
            <button>Post Review</button>
        </div>
    )
};

export default MealsReviews