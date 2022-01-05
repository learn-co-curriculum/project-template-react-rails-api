import React from "react";
import { useState } from "react";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";  

function ReviewForm({ review, onChangeForm, onEditReview, onAddReviews }) {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


  function handleInputChange(event) {
    onChangeForm(event.target.name, event.target.value);
  }



  function handleSubmit(e, id) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`api/locations/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        rating: rating,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newReview) => {
          setComment("");
          setRating("");
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
//     fetch(`./locations/${id}`, {
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
            placeholder="comment"
            name="comment"
            value={comment}
            onChange={handleInputChange}
          />
       
        </div>
        <p></p>
        <div className="col">
        <input
            type="number"
            className="form-control"
            placeholder="rating"
            name="rating"
            value={rating}
            onChange={handleInputChange}
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