import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UploadBook.css';
import logo from '../assets/logo.png';

const UploadBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('book[title]', title);
        formData.append('book[author]', author);
        formData.append('book[description]', description);
        if (image) formData.append('book[image_url]', image);

        axios.post('API_URL', formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="upload-book-container">
            <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <form onSubmit={handleSubmit} className="upload-book-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadBook;
