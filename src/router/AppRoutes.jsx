import { Routes, Route } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import UserLayout from '../layouts/UserLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
     
    </Routes>
  );
}

export default AppRoutes;