import React from 'react';

const CartDrawer = () => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cart Items</h3>
      <p className="text-gray-600">No items in the cart.</p>
    </div>
  );
};

export default CartDrawer;