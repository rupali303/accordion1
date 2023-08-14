// ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          {/* Other table headers */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.productName}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            {/* Other table cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
