// Dialog.js
import React, { useState } from 'react';

const Dialog = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  // Other state variables for validations

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    // Perform validation and set image state
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission and validation
  };

  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields, image upload, validations */}
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Dialog;
