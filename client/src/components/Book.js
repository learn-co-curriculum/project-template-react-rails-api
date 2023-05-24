import React from 'react';
import '../styles/Books.css';

const Book = ({ book, onPurchase }) => {
    const imagePath = require(`../assets/images/${book.image_url}`).default;

    return (
        <div className="book">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={imagePath} alt={book.title} className="book-image" />
            {/* Other book details here */}
            <button onClick={onPurchase}>Buy</button>
        </div>
    );
};

export default Book;
