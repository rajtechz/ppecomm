import { useSelector } from 'react-redux';

const useCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return { cartItems };
};

export default useCart;