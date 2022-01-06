import React from "react";
import { useState } from "react";

function ReviewForm({ user, bathrooms, reviews, setReviews, onAddReviews }) {
    const [leaveReview, setLeaveReview] = useState("");
    const [formData, setFormData] = useState({
      location_id: "",
      user_id: "",
      comments: "",
      rating: "",
    })
    // const [rating, setRating] = useState("");
    // const [locationId, setLocationId] = useState("");
    // const [userId, setUserId] = useState("");
    // const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

//     const everyReview = reviews.map(item => {
//       return   (        <ul>
//       <li>{item.comments} <br /> Rating: <strong>{item.rating}</strong> </li>
//   </ul>
// )
//     })

const addReview = (newReview) => {
  setReviews([...reviews, newReview])
}

const handleSubmit = (e) => {
  e.preventDefault()
  const newReview = {
      location_id: bathrooms.id,
      comments: formData.comments,
      rating: formData.rating,
      id: 0
  }
  fetch("api/reviews", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newReview)
  })
      .then(resp => resp.json())
      .then(data => addReview(data))
  setFormData({
      location_id: "",
      comments: "",
      rating: "",
  })
  window.location.reload(false)
}


const handleOnChange = (e) => {

  setFormData({ ...formData, [e.target.name]: e.target.value })
}
const handleOnClick = () => {
  setLeaveReview(prev => !prev)

}

return (
  <div>
    {/* {everyReview} */}
    <button onClick={handleOnClick}> Leave Comment</button>
    {leaveReview && 
    <form onSubmit={handleSubmit}>
      <h3>{bathrooms}</h3>
      <input onChange={handleOnChange} type="text" name="comment" placeholder="Comment" value={formData.comments} />
      <input onChange={handleOnChange} type="text" name="rating" placeholder = "Rating" value = {formData.rating} />

    </form>}
  </div>
)

    }

//   useEffect(() => {
//     fetch("api/locations")
//       .then((r) => r.json())
//       .then(setLocationId);
//   }, []);

//   function handleSubmit(e, id) {
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("api/reviews", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         location_id: locationId,
//         user_id: user,
//       comment,
//        rating,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then((newReview) => {
//           setComment("");
//           setRating("");
//           setUserId("");
//           setLocationId("");
//           setErrors([]);
//           onAddReviews(newReview);
//         });
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }



// //   function handleReviewChange(event, id) {
// //     event.preventDefault();
// //     fetch(`./locations/${id}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(review),
// //     })
// //       .then((r) => r.json())
// //       .then(onEditReview);
// //   }

// //   if (!review) return null;

// //   const { comment, rating } = review;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-row">
//         <div className="col-5">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Comment"
//             name="comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//            &nbsp;&nbsp;
//        <input
//             type="number"
//             className="form-control"
//             placeholder="Rating"
//             name="rating"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//           />
//           <input
//             type="number"
//             className="form-control"
//             name="location_id"
//             value={locationId}
//             onChange={(e) => setLocationId(e.target.value)}
//           />
//         </div>
//         </div>
//         <div className="col">
//             <p></p>
//           <button type="submit" className="btn btn-success">
//             Add Review
//           </button>
//           &nbsp;&nbsp;
//           <button type="submit" className="btn btn-success">
//             Update Review
//           </button>
//         </div>
//     </form>
//   );
// }

export default ReviewForm;