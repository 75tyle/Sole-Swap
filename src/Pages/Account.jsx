import React, { useState } from 'react';
import './CSS/Account.css';

const AccountDetails = () => {
  // Sample user data (replace with actual user data)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [addressInput, setAddressInput] = useState('');

  const handleEditClick = () => {
    setEditMode(true);
    setAddressInput(user.address);
  };

  const handleSaveClick = () => {
    setUser({ ...user, address: addressInput });
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setAddressInput(user.address);
  };

  const handleAddressInputChange = (e) => {
    setAddressInput(e.target.value);
  };
  
  // const user_Data = localStorage.getItem("signupData")
  // const userData_parsed = JSON.parse(user_Data)
  // console.log(userData_parsed)

  return (
    <div className="account-details">
      <h2>Account Details</h2>
      <div className="user-info">
        <div className="info-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="info-item">
          <strong>Address:</strong> {editMode ? (
            <input
              type="text"
              value={addressInput}
              onChange={handleAddressInputChange}
            />
          ) : (
            user.address || <em>Not available</em>
          )}
          {editMode ? (
            <>
              <button className="save-btn" onClick={handleSaveClick}>Save</button>
              <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
