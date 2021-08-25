import { useState } from 'react'

const AddCommentForm = ({ user, event, setCommentResults, commentResults }) => {
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    const newComment = {
      user_id: user.id,
      comment: comment,
      event_id: event.id,
    }
    

    function handleAddComment(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }).then(setCommentResults([...commentResults, newComment]));
      }
    
    return (
        <div className="comment-form-div">
        <form onSubmit={handleAddComment}>

          <input
            className="comment-input"
            placeholder="Write A Comment..."
            type="text"

            onChange={(e) => setComment(e.target.value)}
          />


          <button className="add-comment-btn" type="submit">
            Add
          </button>
        </form>

        {/* <div>
          {errors.map((err) => (
            <div className="login-errors" key={err}>
              {err}
            </div>
          ))}
        </div> */}

        </div>
    )
}

export default AddCommentForm
