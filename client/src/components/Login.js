import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import libraryImage from '../assets/library.jpg'; // your background image

class Login extends Component {
    state = {
        username: '',
        password: '',
        loginErrors: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        axios
            .post(
                'API_URL', // replace with your API endpoint
                {
                    user: {
                        username: username,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log('login error', error);
            });
    };

    render() {
        return (
            <div className="login-container" style={{backgroundImage: `url(${libraryImage})`}}>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
