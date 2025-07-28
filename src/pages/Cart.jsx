import React from "react";
import { X, Trash2 } from "lucide-react";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const totalMRP = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = cartItems.reduce((acc, item) => acc + item.discount, 0);
  const couponDiscount = 263; // From Figma
  const deliveryFee = 0; // Free delivery
  const totalPayable = totalMRP - discount - couponDiscount + deliveryFee;
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


  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-3xl h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">My Bag ({cartItems.length})</h2>
        <X className="cursor-pointer text-gray-500 hover:text-gray-700" onClick={onClose} />
      </div>

      {/* Sale Timer */}
      <div className="bg-green-100 text-green-800 text-sm font-medium p-2 text-center">
        Sale ends in 04h : 52m : 27s
      </div>

      {/* Coupon Section */}
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg mt-4 mx-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-green-600 font-semibold text-sm">Yay! You unlocked 10% OFF</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-600">₹2999</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "33%" }}></div>
              </div>
              <span className="text-xs text-gray-600">₹5999</span>
            </div>
            <p className="text-xs text-green-600 mt-1">Unlocked</p>
          </div>
          <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded-lg cursor-pointer">Apply</button>
        </div>
        <a href="#" className="text-xs text-purple-600 underline mt-2 block text-center">
          View/Apply More Coupons & Gift Cards
        </a>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex gap-4 border border-gray-200 rounded-lg p-3 relative bg-white">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-40 object-cover rounded-md border border-gray-300"
              />
              {item.exclusive && (
                <div className="absolute bottom-0 w-full bg-pink-600 text-white text-xs text-center py-1 rounded-b-md font-semibold">
                  EXCLUSIVE
                </div>
              )}
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
              <p className="text-gray-500 text-xs mt-1">Colour : {item.color}</p>

              <p className="text-sm font-semibold mt-2 text-gray-900">
                ₹{item.price}
                <span className="line-through text-gray-500 text-xs ml-2">₹{item.originalPrice}</span>
                <span className="text-green-600 text-xs ml-2">({item.discountPercentage}% OFF)</span>
              </p>
              <p>Placement Printed Oversized T-Shirt | Peach
              </p>
              <p>color : Red</p>
              <div className="mt-3 flex items-center gap-3">
                <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
                  <option>{item.size}</option>
                </select>

                <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                  <button className="text-gray-600 text-sm font-bold px-1 cursor-pointer">-</button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button className="text-gray-600 text-sm font-bold px-1 cursor-pointer">+</button>
                </div>

                <button className="ml-auto cursor-pointer">
                  <Trash2 className="w-6 h-6 text-gray-500 hover:text-red-500" />
                </button>
              </div>

              {item.offerApplied && (
                <div className="mt-2 text-green-600 text-sm font-medium">
                  {item.offerCode} offer applied!
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="space-y-3 text-sm mt-6">
          <h3 className="font-semibold text-gray-900 text-base">Order summary</h3>

          <div className="flex justify-between">
            <span className="text-gray-600">Total MRP (Incl. of Taxes)</span>
            <span className="text-gray-900">₹{totalMRP}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Discount on MRP</span>
            <span className="text-green-600">-₹{discount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Coupon Discount</span>
            <span className="text-green-600">-₹{couponDiscount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="flex justify-between font-semibold text-base">
            <span className="text-gray-900">Total Payable</span>
            <span className="text-gray-900">₹{totalPayable}</span>
          </div>

          <div className="text-green-600 text-center bg-green-100 p-2 rounded text-sm">
            Yay! FREE delivery on this order!
          </div>

          <div className="flex justify-between text-xs text-gray-500 pt-2 border-t mt-4">
            <span>Free Delivery Over ₹799</span>
            <span>7 Days Easy Return</span>
            <span>COD Available</span>
          </div>

          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method?.imageUrl}
                alt={method?.name}
                className="h-6 object-contain"
                title={method?.name}
              />
            ))}
          </div>

        </div>
      </div>


      {/* Fixed Savings and Proceed to Buy */}
      <div className="bg-green-600 text-white text-center p-2 text-sm rounded-t-xl">
        You are saving ₹1630 on this order
      </div>
      <div className="p-4  text-white text-center">
        <p className="text-sm">₹{totalPayable} <span className="line-through text-gray-300">₹3,998</span></p>
        <button className="w-full bg-black text-white py-2 rounded mt-2 text-sm font-semibold cursor-pointer">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default CartDrawer;     