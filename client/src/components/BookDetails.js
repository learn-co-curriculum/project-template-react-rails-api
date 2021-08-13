import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styles.css";

function BookDetails() {
  const [book, setBook] = useState([]);
  const [errors, setErrors] = useState(null);
  const id = useParams();
  let history = useHistory();

  //fetch a single book
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  //add book to user's Shelf
  async function addBook() {
    const bookData = {
      book_id: book.id,
    };
    const res = await fetch("/shelves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    if (res.ok) {
      const shelf = await res.json();
      history.push("/myshelf");
    } else {
      const error = await res.json();
      setErrors(error.message);
    }
  }

  const { title, author, genre, length, pub_date, image } = book;

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
      <button onClick={addBook}>Add to my shelf</button>
    </div>
  );
}

export default BookDetails;
