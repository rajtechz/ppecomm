import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import cartReducer from '../features/cart/CartSlice';
import productsReducer from '../features/products/ProductSlice';
import wishlistReducer from '../features/wishlist/WishlistSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;