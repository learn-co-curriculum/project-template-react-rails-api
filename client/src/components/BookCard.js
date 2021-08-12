import React from "react";
import "./styles.css";

function BookCard({ book }) {
const details = `/books/${book.id}`

  // displays information for each book in the BookCollection component
  return (
    <div>
      <ul>
        <li>
          <h3>
            {book.title} by {book.author}
          </h3>
          <img src={book.image} alt={book.title} className="photo" />
          {/* <form action={details}>
            <input type="submit" value="See more details" />
          </form> */}
          <a href = {details}>See more details</a>
        </li>
      </ul>
    </div>
  );
}

export default BookCard;
