import { useState } from 'react'

const AddCommentForm = ({ user, event }) => {
    const [comments, setComments] = useState("");
    const [errors, setErrors] = useState([]);

    function handleAddComment(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            comment: comments,
            event_id: event.id,
          }),
        }).then((resp) => {
          if (resp.ok) {
            resp.json().then((data) => setComments([...comments, data]));
          } else {
            resp.json().then((err) => setErrors(err.errors));
          }
        });
      }
    
    return (
        <div className="comment-form-div">
        <form onSubmit={handleAddComment}>

          <input
            className="comment-input"
            placeholder="Write A Comment..."
            type="text"

            onChange={(e) => setComments(e.target.value)}
          />


          <button className="add-comment-btn" type="submit">
            Add
          </button>
        </form>
        </div>
    )
}

export default AddCommentForm
