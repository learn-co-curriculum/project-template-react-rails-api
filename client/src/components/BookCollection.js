import React, {useEffect, useState} from 'react'
import BookCard from './BookCard'

function BookCollection() {
    //state so each book can be mapped over and contain its own info
    const [books, setBooks] = useState([])

    // fetch request to recieve book data from backend and set it to our state
    useEffect(() => {
        async function fetchBooks() {
            const res = await fetch('http://my-shelf-5.herokuapp.com/books')
            if(res.ok) {
                const bookData = await res.json()
                setBooks(bookData)
                console.log(bookData)
            }
        }
        fetchBooks()
    }, []);

    //displays each book in it's own card as a "recommended" section
    return (
        <div>
            <h1>You might like:</h1>
            {books.map((book) => (<BookCard book={book} key = {book.id} />))}
        </div>
    )
}

export default BookCollection
