import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import adminAuthReducer from '../features/auth/AdminAuthSlice';
import cartReducer from '../features/cart/CartSlice';
import productsReducer from '../features/products/ProductSlice';
import wishlistReducer from '../features/wishlist/WishlistSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  adminAuth: adminAuthReducer,
  cart: cartReducer,
  products: productsReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;