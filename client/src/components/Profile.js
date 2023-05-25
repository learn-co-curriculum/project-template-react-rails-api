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

}