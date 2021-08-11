import React from 'react'
import "./styles.css"

function BookCard({book}) {
    // displays information for each book in the BookCollection component
    return (
        <div>
            <ul>
                <li>
                <h3>{book.title} by {book.author}</h3>
                <img src = {book.image} alt = {book.title} className="photo" />
                </li>
            </ul>
        </div>
    )
}

export default BookCard
