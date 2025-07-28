import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Trash2, Minus, Plus, Clock, Gift, Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addedItem, fromWishlist, showItemDetails } = location.state || {};

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 899,
      originalPrice: 1499,
      discount: 40,
      discountPercentage: 40,
      color: "White",
      size: "M",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=200&fit=crop&crop=center",
      exclusive: false,
      offerApplied: false
    },
    {
      id: 2,
      name: "Premium Cotton Shirt",
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      discountPercentage: 35,
      color: "Blue",
      size: "L",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&h=200&fit=crop&crop=center",
      exclusive: false,
      offerApplied: true,
      offerCode: "SAVE20"
    }
  ]);

  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 52,
    seconds: 27
  });

  // Add item from wishlist if coming from wishlist
  useEffect(() => {
    if (addedItem && fromWishlist) {
      const newItem = {
        ...addedItem,
        quantity: 1,
        discountPercentage: addedItem.discount,
        exclusive: addedItem.isNewDrop || false,
        offerApplied: false
      };
      setItems(prevItems => [newItem, ...prevItems]);
    }
  }, [addedItem, fromWishlist]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Calculate totals
  const totalMRP = items.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalDiscount = items.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0);
  const couponDiscount = 263;
  const deliveryFee = 0;
  const totalPayable = totalMRP - totalDiscount - couponDiscount + deliveryFee;
  const totalSavings = totalDiscount + couponDiscount;

  const paymentMethods = [
    {
      name: "Visa",
      imageUrl: "https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo.png",
    },
    {
      name: "RuPay",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-xherb&psig=AOvVaw3cxo4mm8WspF7qBeKOhzeE&ust=1753540188607000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiHh7Oc2I4DFQAAAAAdAAAAABAU",
    },
    {
      name: "Mastercard",
      imageUrl: "https://1000logos.net/wp-content/uploads/2017/06/Mastercard-Logo.png",
    },
    {
      name: "Google Pay",
      imageUrl: "https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png",
    },
    {
      name: "Paytm",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Paytm_logo.png/320px-Paytm_logo.png",
    },
    {
      name: "Maestro",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Maestro_2016.svg/320px-Maestro_2016.svg.png",
    },
  ];

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg bg-[var(--gray-100)] hover:bg-[var(--gray-200)] transition-colors duration-200"
            >
              <ArrowLeft size={20} className="text-[var(--text-primary)]" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                My Cart ({items.length})
              </h1>
              <p className="text-[var(--text-secondary)]">Items in your shopping bag</p>
            </div>
          </div>
        </div>

        {/* Sale Timer */}
        <div className="bg-green-100 text-green-800 p-4 flex items-center justify-center space-x-2 rounded-lg mb-6">
          <Clock className="w-4 h-4" />
          <span className="font-semibold text-sm">
            Sale ends in {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>

        {/* Coupon Section */}
        <div className="p-4 mx-0 mb-6 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Gift className="w-4 h-4 text-green-600" />
                <p className="text-green-600 font-semibold text-sm">Yay! You unlocked 10% OFF</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-600">₹2999</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: "33%" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600">₹5999</span>
              </div>
              <p className="text-xs text-green-600 font-medium">Unlocked</p>
            </div>
            <button className="bg-purple-600 text-white text-sm px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-all duration-200 font-medium">
              Apply
            </button>
          </div>
          <a href="#" className="text-xs text-purple-600 underline block text-center hover:text-purple-700 transition-colors duration-200">
            View/Apply More Coupons & Gift Cards
          </a>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex gap-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
                  />
                  {item.exclusive && (
                    <div className="absolute bottom-0 w-full bg-pink-600 text-white text-xs text-center py-1 rounded-b-lg font-semibold">
                      EXCLUSIVE
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">Colour: {item.color}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                      <span className="line-through text-gray-500 text-sm">₹{item.originalPrice}</span>
                      <span className="text-green-600 text-xs font-semibold">({item.discountPercentage}% OFF)</span>
                    </div>

                    <p className="text-xs text-gray-500">Placement Printed Oversized T-Shirt | Peach</p>
                    <p className="text-xs text-gray-500">Color: {item.color}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Size Selection */}
                      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        {sizeOptions.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-3 text-sm font-medium text-gray-900 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors duration-200 rounded-lg hover:bg-red-50"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {item.offerApplied && (
                    <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                      <Gift className="w-4 h-4" />
                      <span>{item.offerCode} offer applied!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg flex items-center space-x-2">
            <span>Order Summary</span>
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total MRP (Incl. of Taxes)</span>
              <span className="text-gray-900 font-medium">₹{totalMRP.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Discount on MRP</span>
              <span className="text-green-600 font-medium">-₹{totalDiscount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Coupon Discount</span>
              <span className="text-green-600 font-medium">-₹{couponDiscount}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>

            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-900">Total Payable</span>
                <span className="text-gray-900">₹{totalPayable.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center text-sm font-medium">
            🎉 Yay! FREE delivery on this order!
          </div>

          <div className="flex justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
            <div className="flex items-center space-x-1">
              <Truck className="w-3 h-3" />
              <span>Free Delivery Over ₹799</span>
            </div>
            <div className="flex items-center space-x-1">
              <RotateCcw className="w-3 h-3" />
              <span>7 Days Easy Return</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>COD Available</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method?.imageUrl}
                alt={method?.name}
                className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                title={method?.name}
              />
            ))}
          </div>
        </div>

        {/* Fixed Savings and Proceed to Buy */}
        <div className="bg-green-600 text-white text-center p-4 rounded-t-xl mt-6">
          <p className="font-semibold text-sm">You are saving ₹{totalSavings.toLocaleString()} on this order</p>
        </div>
        
        <div className="p-6 bg-white border-t border-gray-200 rounded-b-xl">
          <div className="text-center mb-4">
            <p className="text-lg font-bold text-gray-900">₹{totalPayable.toLocaleString()}</p>
            <p className="text-sm text-gray-500 line-through">₹3,998</p>
          </div>
          <button className="w-full bg-black text-white py-4 rounded-lg text-base font-bold cursor-pointer hover:bg-gray-900 transition-all duration-200 transform hover:scale-[1.02]">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;     