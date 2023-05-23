import React from 'react';
import '../styles/Books.css';

const Book = ({ book, onPurchase }) => {
    return (
        <div className="book">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            {/* Other book details here */}
            <button onClick={onPurchase}>Buy</button>
        </div>
    );
};

export default Book;
