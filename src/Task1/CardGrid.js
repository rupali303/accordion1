// CardGrid.js
import React from 'react';
import ProductCard from './ProductCard'; // Create ProductCard component

const CardGrid = ({ products }) => {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardGrid;
