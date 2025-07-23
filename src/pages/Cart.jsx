import React from 'react';
import useCart from '../features/cart/useCart';
import CartDrawer from '../features/cart/CartDrawer';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <CartDrawer />
      )}
    </div>
  );
};

export default Cart;