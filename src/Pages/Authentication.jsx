import React, { useState } from 'react';
import './CSS/Authentication.css';

const Authentication = () => {
  const [productName, setProductName] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePhotoChange = (e) => {
    // Convert FileList to an array
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to admin page for authentication
    // You can use fetch or any other method to send the data
    const formData = new FormData();
    formData.append('productName', productName);
    photos.forEach((photo, index) => {
      formData.append(`photo${index + 1}`, photo);
    });
    // Example: Send formData to admin page
    fetch('/admin', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from server
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='authentication'>
      <h1>Authentication Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Product Name:</label>
          <input type='text' value={productName} onChange={handleProductNameChange} />
        </div>
        <div className='form-group'>
          <label>Upload Photos:</label>
          <input type='file' accept='image/*' multiple onChange={handlePhotoChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Authentication;
