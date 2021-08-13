import React, {useEffect, useState} from 'react'
import BookCard from './BookCard'

function MyShelf({currentUser}) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function getBooks(){
            const res = await fetch(`/users/${currentUser.id}`)
            if(res.ok){
                const user = await res.json()
                setBooks(user.user_books)
            }
        }
        getBooks()
    }, [])

    return (
        <div>
            {books.length > 0 ? (
                books.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))
            ): (
                <h2>No books found</h2>
            )}
        </div>
    )
}

export default MyShelf
