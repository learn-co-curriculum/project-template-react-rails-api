import React, { useState } from "react";
import profile from '../assets/profile.png'

function Profile({ currentUser, setCurrentUser }) {
    const [picture, setPicture] = useState("");
    const [formData, setFormData] = useState({
        user: "",
        email: "",
        password: "",
    });

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => setCurrentUser(data));
    }

    return (
        <div id="profile-page-container">
            <h1 className="headline"> {currentUser.name} </h1>
            <p className="headline-s">Welcome back!</p>

            <div id="profile-container">
                <img id="profile-picture" src={profile} alt="cannot load"></img>
                <label class="custom-file-upload">
                    <input
                        required
                        type="file"
                        name="picture"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e) => setPicture({ picture: e.target.files[0] })}
                    />
                    Update
                </label>
                <form className="profile-form" onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="labels">Update Name</div>
                        <input
                            className="input-field"
                            name="name"
                            type="text"
                            placeholder={currentUser.name}
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    {/* split */}
                    <div className="field">
                        <div className="labels">Update Email</div>
                        <input
                            className="input-field"
                            name="email"
                            type="text"
                            placeholder={currentUser.email}
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    {/* split */}

                    <div className="field">
                        <div className="labels">Update Password</div>
                        <input
                            className="input-field"
                            name="password"
                            type="password"
                            placeholder={currentUser.password}
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    {/* split */}

                    <div className="field">
                        <button id="profile-button" type="submit">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;