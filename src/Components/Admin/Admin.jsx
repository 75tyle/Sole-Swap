import React, { useState, useEffect } from 'react';
import './Admin.css'

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products awaiting authentication from backend
    // Example fetch request:
    fetch('/api/products-awaiting-authentication')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAuthentication = (productId, isApproved) => {
    // Handle authentication logic here (approve/reject product)
    // Example fetch request:
    fetch(`/api/authenticate-product/${productId}?approved=${isApproved}`, {
      method: 'POST',
      // Additional headers and body if needed
    })
      .then(response => {
        // Handle response from server
        if (response.ok) {
          // Update state or handle success message
        } else {
          // Handle error response
        }
      })
      .catch(error => {
        console.error('Error authenticating product:', error);
      });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Products Awaiting Authentication</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            {/* Example buttons for authentication */}
            <button onClick={() => handleAuthentication(product.id, true)}>Approve</button>
            <button onClick={() => handleAuthentication(product.id, false)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
