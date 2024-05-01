import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productSize, setProductSize] = useState('');
  const [bidPrice, setBidPrice] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle adding product logic here
    console.log('Product added:', {
      productName,
      productDescription,
      productSize,
      bidPrice,
      timeInput,
      image
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
       <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Product Description:</label>
          <textarea className='description_area' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Product Size:</label>
          <input type="text" value={productSize} onChange={(e) => setProductSize(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Bid Price:</label>
          <input type="number" value={bidPrice} onChange={(e) => setBidPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Time Limit:</label>
          <select value={timeInput} onChange={(e) => setTimeInput(e.target.value)}>
            <option value="">Select Time</option>
            <option value="12 hours">12 hours</option>
            <option value="1 day">1 day</option>
            <option value="1 week">1 week</option>
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
