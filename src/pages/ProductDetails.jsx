import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
      <p className="text-gray-600">Details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;