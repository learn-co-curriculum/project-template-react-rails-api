import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function BookDetails() {
  const [book, setBook] = useState([]);
  const id = useParams().id

  //fetch a single book
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  const {title, author, genre, length, pub_date, image} = book;
  

  return (
    <div>
      <ul>
        <li>
          <h3>
            {title} by {author}
          </h3>
          <img src={image} alt={title} className="photo" />
          <li>{genre}</li>
          <li>{length}</li>
          <li>Published {pub_date}</li>
        </li>
      </ul>
    </div>
  );
}

export default BookDetails;
