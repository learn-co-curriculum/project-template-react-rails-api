import React, { useState } from 'react'


function Profile({ currentUser }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [formData, setFormData] = useState({
        user: "",
        email: "",
        password: ""
    })

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <form className='profile-container' onSubmit={handleSubmit}>
            <h1> Profile </h1>
            <input className='username-container' name='name' type='text' placeholder={currentUser.name} onChange={handleInputChange}>
            </input>
            <input className='email-container' name='email' type='text' placeholder={currentUser.email} onChange={handleInputChange}>
            </input>
            <input className='password-container' name='password' type='password' placeholder={currentUser.password} onChange={handleInputChange}>
            </input>
            <button type='submit'> Save Changes </button>
        </form>
    )
}

export default Profile