import { Routes, Route } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import UserLayout from "../layouts/UserLayout";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Pages from "../pages/Pages";
import About from "../pages/About";
import CollectionPage from "../pages/CollectionPage";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Categories from "../pages/Categories";
import Account from "../pages/Account";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/allproduct" element={<Product />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about" element={<About />} />
         <Route path="/account" element={<Account />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route
          path="/collections/2-bottomwear-2799"
          element={<CollectionPage />}
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
       
      </Route>
    </Routes>
  );
}

export default AppRoutes;
