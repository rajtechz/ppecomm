import React, { useState } from "react";
import Button from "../Button";
import AddToBagButton from "../AddToBagButton";
import kids1 from "../../assets/kids1.jpg";
import kids2 from "../../assets/kids2.jpg";
import kids3 from "../../assets/kids3.jpg";
import kids4 from "../../assets/kids4.jpg";
const Modal = ({ isOpen, onClose, images, product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedMobileSize, setSelectedMobileSize] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!isOpen) return null;

  return (
    <>
      <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center bg-black/50 p-4">
        <div className="relative bg-white w-full max-w-6xl rounded-lg shadow-xl flex flex-col h-[90vh] overflow-hidden">
          {/* Header: Fixed */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--light-color)] bg-white z-10">
            <h2 className="text-xl font-semibold">Add to Bag</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left: Image Carousel */}
            <div className="flex flex-col gap-2 overflow-y-auto p-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-24 rounded border cursor-pointer ${activeImage === idx ? "border-primary" : "border-gray-200"
                    }`}
                />
              ))}
            </div>

            {/* Center: Main Image */}
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={images[activeImage]}
                alt="main"
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>

            {/* Right: Info Panel */}
            <div className="w-[420px] border-l border-gray-200 flex flex-col overflow-hidden">
              <div className="p-6 overflow-y-auto">

                {/* Price Info */}
                <div className="text-2xl font-semibold text-black flex items-center gap-2">
                  ₹{product.discountedPrice}
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm font-semibold">
                    ({product.discountPercent}% OFF)
                  </span>
                </div>

                <div className="text-sm text-green-600 font-semibold mt-1">
                  Best price ₹{Math.floor(product.discountedPrice * 0.96)}
                </div>

                {/* Title */}
                <h2 className="mt-2 text-lg font-medium text-gray-800">
                  {product.title} | {product.color}
                </h2>

                {/* Rating */}
                <div className="mt-2">
                  <span className="inline-block text-xs bg-green-600 text-white px-2 py-0.5 rounded font-semibold">
                    ★ {product.rating}
                  </span>
                </div>

                {/* Size Selection */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Select Size</p>
                    <button className="text-pink-600 text-sm font-semibold cursor-pointer">
                      Size guide
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size, idx) => (
                      <div key={size} className="flex flex-col items-center">
                        <button
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 w-full border rounded-md text-sm font-medium transition 
                ${selectedSize === size
                              ? "bg-black text-white"
                              : "bg-white text-black hover:border-black"
                            }`}
                        >
                          {size}
                        </button>
                        <span className="text-xs text-red-500 mt-1">
                          {idx === 0 || idx === 1 ? '1 left' : idx === 3 ? '4 left' : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to Bag Button */}
              <div className="p-6 border-t border-gray-200 bg-white">
                <AddToBagButton
                  onClick={() => console.log('Add to bag from modal:', product.title)}
                  disabled={!selectedSize}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-xl p-4 max-h-[90vh] overflow-y-auto z-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Add to Bag</h2>
          <button onClick={onClose} className="text-gray-600 text-xl">
            &times;
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto mb-4">
          <img
            src={kids1}
            className="rounded-lg w-20 h-28 object-cover"
          />
          <img
            src={kids2}
            className="rounded-lg w-20 h-28 object-cover"
          />
          <img
            src={kids3}
            className="rounded-lg w-20 h-28 object-cover"
          />
          <img
            src={kids4}
            className="rounded-lg w-20 h-28 object-cover"
          />

        </div>

        <div className="mb-2">
          <p className="text-lg font-semibold text-black">
            ₹1,559 <span className="text-green-600 text-sm">(35% OFF)</span>
          </p>
          <p className="text-sm text-gray-500 line-through">
            MRP: ₹2,399 <span className="no-underline">Inclusive of all taxes</span>
          </p>
          <p className="text-sm text-gray-700 mt-1">
            Casual Anti Fit Jeans | Green
          </p>
        </div>

        <div className="mt-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-sm font-medium">
            ⭐ 4.0
          </span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-base font-medium">Select Size</p>
          <button className="text-pink-500 text-sm font-semibold cursor-pointer">
            Size guide
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          <button
            onClick={() => setSelectedMobileSize('S')}
            className={`border rounded-md py-2 font-medium transition ${selectedMobileSize === 'S'
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black'
              }`}
          >
            S
          </button>
          <button
            onClick={() => setSelectedMobileSize('M')}
            className={`border rounded-md py-2 font-medium transition ${selectedMobileSize === 'M'
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black'
              }`}
          >
            M
          </button>
          <button
            onClick={() => setSelectedMobileSize('L')}
            className={`border rounded-md py-2 font-medium transition ${selectedMobileSize === 'L'
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black'
              }`}
          >
            L
          </button>
          <button
            onClick={() => setSelectedMobileSize('XL')}
            className={`border rounded-md py-2 font-medium transition ${selectedMobileSize === 'XL'
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black'
              }`}
          >
            XL
          </button>
          <button
            onClick={() => setSelectedMobileSize('2XL')}
            className={`border rounded-md py-2 font-medium transition col-span-2 ${selectedMobileSize === '2XL'
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black'
              }`}
          >
            2XL
          </button>
        </div>

        <AddToBagButton
          onClick={() => console.log('Add to bag from mobile modal with size:', selectedMobileSize)}
          disabled={!selectedMobileSize}
          className="rounded-xl"
        />

        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="underline">
            wroqn.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;



