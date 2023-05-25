import React, { useState, useEffect } from 'react';
// import {toast} from 'react-toastify'

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    address: '',
    image_url: '',
    phone_number: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/profiles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setFormData(data);
        setLoading(false);
      })
      .catch(error => {
        // toast.error(error?.data?.message || error.error)
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);

  const handleChange = event => {

    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const updatedFormData = {
      ...formData,
    };
  
    fetch('http://localhost:3000/profiles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedFormData),
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to create profile');
    }
  })
  .then(data => {
    setUser(data);
    setFormData(data)
    console.log(data);
    window.alert('Profile Created Successfully');
  })
  .catch(error => {
    console.error('Error creating user profile:', error);
    window.alert('Create failed. One of the fields was invalid. Please try again');
  });

  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" expand='lg' collapseOnSelect >
      <h1 className='text-center'>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio:</label>
          <input
            type="text"
            id="bio"
            className="form-control"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Address:</label>
          <input
            type="text"
            id="address"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Avatar:</label>
          <input
            type="text"
            id="image_url"
            className="form-control"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">Phone Number:</label>
          <input
            type="number"
            id="phone_number"
            className="form-control"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Profile</button>
      </form>
    </div>
  );
};

export default Profile;