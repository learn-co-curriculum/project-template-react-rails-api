
function MealsReviews ({ itemToReview }) {
    return (
        <div className="p-3">
            <h2>{itemToReview}</h2>
            <label className="text-sm" htmlFor="review">Review: </label>
            <textarea className="border-2 border-gray-400 text-sm rounded-sm" name="Text1" cols="60" rows="5"></textarea>
            <button className="border-4 bg-red-400 border-red-400 p-1 text-md rounded-md text-xs">Post Review</button>
        </div>
    )
};

export default MealsReviews