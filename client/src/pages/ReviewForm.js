import React from "react";
import { useState } from "react";

function ReviewForm({ review, onChangeForm, onEditReview, onAddReviews }) {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


//   function handleInputChange(event) {
//     onChangeForm(event.target.name, event.target.value);
//   }



  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
      }),
    }).then((r) => {

      setIsLoading(false);
      if (r.ok) {
        r.json().then((newReview) => {
          setComment("");
          setRating();
          setErrors([]);
          onAddReviews(newReview);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



//   function handleReviewChange(event, id) {
//     event.preventDefault();
//     fetch(`./reviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(review),
//     })
//       .then((r) => r.json())
//       .then(onEditReview);
//   }

//   if (!review) return null;

//   const { comment, rating } = review;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
           &nbsp;&nbsp;
       <input
            type="number"
            className="form-control"
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