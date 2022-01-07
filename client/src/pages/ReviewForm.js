import React, { useState } from "react";

function ReviewForm({ onAddReviews}) {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      comments: comment, 
      rating: rating,
    }
    fetch("api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), 
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newReview) => {
          onAddReviews(newReview);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      <h4>Add New Review</h4>
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            id="comment"
            placeholder="Comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
           &nbsp;&nbsp;
       <input
            type="number"
            id="rating"
            placeholder="Rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        </div>
        <div className="col">
            <p></p>
          <button type="submit" className="btn btn-success">
            Add Review
          </button>
          &nbsp;&nbsp;
          <button type="submit" className="btn btn-success">
            Update Review
          </button>
        </div>
    </form>
  );
}

export default ReviewForm;