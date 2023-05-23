import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import logo from '../assets/logo.png';
import '../styles/Library.css';

const Library = () => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState('');

    useEffect(() => {
        getBooks();
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const getBooks = () => {
        axios
            .get(`Your API endpoint here`)
            .then(response => {
                setBooks(response.data.items);
            })
            .catch(error => {
                console.log('book fetch error', error);
            });
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    const handlePurchase = (bookId) => {
        axios
            .post('/transactions', {
                user_id: localStorage.getItem('userId'),
                book_id: bookId,
                amount: 9.99, // This should ideally be fetched from the book data
                transaction_id: '12345', // This should be generated uniquely for each transaction
            })
            .then((response) => {
                alert('Transaction Successful!');
            })
            .catch((error) => {
                console.log('Transaction error', error);
            });
    };

    return (
        <div className="library-container">
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <div className="user-details">{username}</div>
            </header>
            <div className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} onPurchase={() => handlePurchase(book.id)} />
                ))}
            </div>
            <div className="pagination-buttons">
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default Library;
