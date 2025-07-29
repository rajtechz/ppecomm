import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      bestPrice: 799,
      image: "menProducts.tshirt1",
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
      image: "menProducts.shirt1",
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
      image: "menProducts.pant1",
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
      image: "womenProducts.shirt1",
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
      image: "womenProducts.tshirt1",
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
      image: "bestSellers.bestSeller1",
      category: "Unisex",
      rating: 4.9,
      reviews: 234,
      isNewDrop: false,
      color: "Gray",
      size: "XL"
    }
  ]
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    }
  }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 