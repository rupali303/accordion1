// ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate amount based on price and quantity

  return (
    <div className="product-card">
      {/* Card content, including quantity buttons */}
    </div>
  );
};

export default ProductCard;
