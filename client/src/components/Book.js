import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book'; // The individual book component
import logo from '../assets/logo.png';
import '../styles/Books.css';

const Books = () => {
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
            .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:9788172234980`)
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

    return (
        <div className="books-container">
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <div className="user-details">{username}</div>
            </header>
            <div className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
            <div className="pagination-buttons">
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default Books;
