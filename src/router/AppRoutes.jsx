import { Routes, Route } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";
import AdminLoginForm from "../features/auth/AdminLoginForm";
import ProtectedAdminRoute from "../components/ProtectedAdminRoute";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Wishlist from "../pages/Wishlist";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Pages from "../pages/Pages";
import About from "../pages/About";
import CollectionPage from "../pages/CollectionPage";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Categories from "../pages/Categories";

// Admin Pages
import AdminRedirect from "../pages/admin/AdminRedirect";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import AdminCategories from "../pages/admin/Categories";
import Analytics from "../pages/admin/Analytics";
import Settings from "../pages/admin/Settings";

function AppRoutes() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLoginForm />} />
      <Route 
        path="/admin" 
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<AdminRedirect />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/allproduct" element={<Product />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route
          path="/collections/2-bottomwear-2799"
          element={<CollectionPage />}
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
