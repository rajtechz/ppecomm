import React, { useState } from "react";
import { Star } from "lucide-react";
import AddToBagButton from "../components/AddToBagButton";
import shirtwomen111 from "../assets/shirtwomen111.jpg";
import shirtwomen222 from "../assets/shirtwomen222.jpg";
import shirtwomen333 from "../assets/shirtwomen333.jpg";

const images = [shirtwomen111, shirtwomen222, shirtwomen333];

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [pincode, setPincode] = useState("");

  const product = {
    // title: "Heavy GSM Printed Monster T-Shirt | Red",
    price: 895,
    originalPrice: 1399,
    discountPercent: 36,
    bestPrice: 766,
    sizes: [
      { size: "S", stock: 1 },
      { size: "M", stock: 1 },
      { size: "L", stock: 0 },
      { size: "XL", stock: 4 },
      { size: "2XL", stock: null },
    ],
    rating: 5,
    reviews: 3,
    highlights: {
      Color: "Red",
      Pattern: "Printed",
      "Brand Fabric": "Cotton",
      Fit: "Oversized",
    },
  };

  return (
    <div className="mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8 py-4 md:py-10">
      {/* Main Content */}
      <div className="space-y-6">
        {/* Mobile View */}
        <div className="md:hidden">
          {/* Product Title and Images */}
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.title}</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-md group w-full h-auto cursor-zoom-in"
                >
                  <img
                    src={src}
                    alt={`product-${idx}`}
                    className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    style={{
                      transformOrigin: "center center",
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      e.currentTarget.style.transformOrigin = `${100 - x}% ${100 - y
                        }%`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transformOrigin = "center center";
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {images.map((src, idx) => (
                              <img
                key={idx}
                src={src}
                alt={`thumbnail-${idx}`}
                className="w-16 h-auto object-contain rounded-md"
              />
              ))}
            </div>
          </div>

          {/* Price and Rating */}
          <div className="space-y-2">
            <p className="text-xl font-bold text-gray-900">
              ₹{product.price}{" "}
              <span className="text-gray-500 line-through text-base">
                ₹{product.originalPrice}
              </span>
              <span className="text-green-600 text-base font-semibold">
                ({product.discountPercent}% OFF)
              </span>
            </p>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
          </div>

          {/* Best Price Info */}
          <div className="bg-[#FFF4E5] border border-yellow-400 rounded-md p-2 text-sm">
            <p className="flex justify-between items-center">
              <span className="font-semibold">Get at ₹{product.bestPrice}</span>
              <button className="text-blue-600 underline text-xs cursor-pointer">
                View Offer Details
              </button>
              <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs">
                Extra ₹129 Off
              </span>
            </p>
          </div>

          {/* Size Selection */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-700">Select Size</p>
              <button className="text-pink-600 text-sm font-semibold cursor-pointer">
                Size guide
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map(({ size, stock }) => (
                <div key={size} className="flex flex-col items-center">
                  <button
                    onClick={() => setSelectedSize(size)}
                    disabled={stock === 0}
                    className={`w-14 h-12 border rounded-sm flex items-center justify-center text-sm font-medium transition ${selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:border-gray-400"
                      } ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {size}
                  </button>
                  {stock && stock > 0 && (
                    <span className="text-xs text-red-500 mt-1">{stock} left</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <AddToBagButton
            onClick={() => console.log('Add to bag with size:', selectedSize)}
            disabled={!selectedSize}
          />

          {/* Delivery Details */}
          <div className="space-y-2">
            <p className="font-semibold text-gray-700">Delivery Details</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
              />
              <button className="bg-pink-100 text-pink-600 px-3 py-2 rounded-md text-sm cursor-pointer">
                Check
              </button>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Free Delivery for Orders Over ₹799</span>
              <span>7 Days Easy Return/Exchange</span>
              <span>Cash on Delivery Available</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <p className="font-semibold text-gray-700">Key Highlights</p>
            <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-600">
              {Object.entries(product.highlights).map(([key, value]) => (
                <React.Fragment key={key}>
                  <span className="text-gray-500">{key}</span>
                  <span className="font-medium">{value}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Left - Images */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-md group w-full h-full cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`product-${idx}`}
                  className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-150"
                  style={{
                    transformOrigin: "center center",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.transformOrigin = `${100 - x}% ${100 - y
                      }%`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transformOrigin = "center center";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-bold text-black">
                ₹{product.price}
                <span className="text-gray-400 ml-2 line-through text-lg">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 text-lg ml-2 font-semibold">
                  ({product.discountPercent}% OFF)
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1">{product.title}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-green-600 fill-green-600" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
            </div>

            {/* Best Price Info */}
            <div className="bg-[#FFF4E5] border border-yellow-400 rounded-md p-3 text-sm">
              <p>
                <span className="font-semibold">Get at ₹{product.bestPrice}</span>
                <button className="text-blue-600 underline ml-2 cursor-pointer">
                  View Offer Details
                </button>
                <span className="float-right bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                  Extra ₹129 Off
                </span>
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Select Size</p>
                <button className="text-pink-600 text-sm font-semibold cursor-pointer">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map(({ size, stock }) => (
                  <div key={size} className="flex flex-col items-center">
                    <button
                      onClick={() => setSelectedSize(size)}
                      disabled={stock === 0}
                      className={`px-4 py-2 border rounded-md w-14 text-sm font-medium transition ${selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black hover:border-black"
                        } ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {size}
                    </button>
                    {stock && (
                      <span className="text-xs text-red-500 mt-1">
                        {stock} left
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Bag */}
            <div>
              <AddToBagButton
                onClick={() => console.log('Add to bag with size:', selectedSize)}
                disabled={!selectedSize}
              />
            </div>

            {/* Delivery */}
            <div>
              <p className="font-semibold mb-2">Delivery Details</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                <button className="bg-pink-100 text-pink-600 px-4 rounded-md cursor-pointer">
                  Check
                </button>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="font-semibold mb-2">Key Highlights</p>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                {Object.entries(product.highlights).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <span className="text-gray-500">{key}</span>
                    <span className="font-medium">{value}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;