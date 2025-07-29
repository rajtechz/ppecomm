import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, Eye, Star } from 'lucide-react';
import { menProducts, womenProducts, kidsProducts, bestSellers } from '../assets/images';
import { formatPrice } from '../utils/formatPrice';

const Wishlist = () => {
  const navigate = useNavigate();
  // Sample wishlist data with images from assets
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      bestPrice: 799,
      image: menProducts.tshirt1,
      category: "Men",
      rating: 4.5,
      reviews: 128,
      isNewDrop: true,
      color: "White",
      size: "M"
    },
    {
      id: 2,
      name: "Premium Cotton Shirt",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      bestPrice: 1199,
      image: menProducts.shirt1,
      category: "Men",
      rating: 4.8,
      reviews: 95,
      isNewDrop: false,
      color: "Blue",
      size: "L"
    },
    {
      id: 3,
      name: "Slim Fit Jeans",
      price: 1599,
      originalPrice: 2499,
      discount: 36,
      bestPrice: 1499,
      image: menProducts.pant1,
      category: "Men",
      rating: 4.6,
      reviews: 67,
      isNewDrop: true,
      color: "Khaki",
      size: "32"
    },
    {
      id: 4,
      name: "Women's Elegant Shirt",
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      bestPrice: 1199,
      image: womenProducts.shirt1,
      category: "Women",
      rating: 4.7,
      reviews: 156,
      isNewDrop: false,
      color: "White",
      size: "S"
    },
    {
      id: 5,
      name: "Women's Trendy T-Shirt",
      price: 799,
      originalPrice: 1199,
      discount: 33,
      bestPrice: 699,
      image: womenProducts.tshirt1,
      category: "Women",
      rating: 4.4,
      reviews: 89,
      isNewDrop: true,
      color: "Pink",
      size: "M"
    },
    {
      id: 6,
      name: "Best Seller Collection",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      bestPrice: 899,
      image: bestSellers.bestSeller1,
      category: "Unisex",
      rating: 4.9,
      reviews: 234,
      isNewDrop: false,
      color: "Gray",
      size: "XL"
    }
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const addToCart = (item) => {
    navigate('/productDetails');
  };

  const viewProduct = (item) => {
    console.log('Viewing product:', item.name);
    // Here you would navigate to product details
  };

  return (
    <div className=" bg-[var(--bg-secondary)] py-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            My Wishlist
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            {wishlistItems.length} items in your wishlist
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-[var(--text-muted)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Start adding items to your wishlist to see them here
            </p>
            <button className="px-6 py-3 bg-[var(--primary-color)] text-[var(--text-inverse)] font-medium rounded-lg hover:bg-[var(--accent-color)] transition-all duration-200">
              Start Shopping
            </button>
          </div>
        ) : (
          // Wishlist Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--bg-primary)] rounded-lg shadow-sm border border-[var(--border-light)] overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--gray-50)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* NEW DROP Badge */}
                  {item.isNewDrop && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[var(--primary-color)] text-[var(--text-inverse)] text-xs px-2 py-1 rounded font-medium">
                        NEW DROP
                      </span>
                    </div>
                  )}

                  {/* Remove from Wishlist Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 bg-white border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-lg hover:bg-red-50 hover:border-red-200"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-[var(--text-primary)]">₹{formatPrice(item.price)}</span>
                      <span className="text-sm text-[var(--text-secondary)] line-through">₹{formatPrice(item.originalPrice)}</span>
                      <span className="text-sm text-[var(--success-color)] font-medium">({item.discount}% OFF)</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Best price ₹{formatPrice(item.bestPrice)}</p>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-medium text-[var(--text-primary)] text-sm leading-tight">
                    {item.name}
                  </h3>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-black text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    <ShoppingCart size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Section */}
        {wishlistItems.length > 0 && (
          <div className="mt-12 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-light)] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Wishlist Summary
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {wishlistItems.length} items • Total value: ₹{formatPrice(
                    wishlistItems.reduce((total, item) => total + item.price, 0)
                  )}
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 border border-[var(--border-medium)] rounded-lg text-[var(--text-primary)] hover:bg-[var(--gray-50)] transition-all duration-200">
                  Clear All
                </button>
                <button className="px-6 py-2 bg-[var(--primary-color)] text-[var(--text-inverse)] rounded-lg font-medium hover:bg-[var(--accent-color)] transition-all duration-200">
                  Add All to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;