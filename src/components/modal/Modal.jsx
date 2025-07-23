import React, { useState } from "react";
import Button from "../Button";
import kids1 from "../../assets/kids1.jpg";
import kids2 from "../../assets/kids2.jpg";
import kids3 from "../../assets/kids3.jpg";
import kids4 from "../../assets/kids4.jpg";
const Modal = ({ isOpen, onClose, images, product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
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
              className="text-gray-400 hover:text-gray-700 text-xl"
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
                  className={`w-20 h-24 rounded border cursor-pointer ${
                    activeImage === idx ? "border-primary" : "border-gray-200"
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
            <div className="w-[420px] border-l border-[var(--light-color)] flex flex-col overflow-hidden">
              <div className="p-6 overflow-y-auto">
                {/* Price */}
                <div className="text-lg font-semibold">
                  ₹{product.discountedPrice}{" "}
                  <span className="text-primary font-bold">
                    ({product.discountPercent}% OFF)
                  </span>
                </div>
                <div className="text-sm text-gray-500 line-through">
                  MRP: ₹{product.originalPrice} Inclusive of all taxes
                </div>

                {/* Title */}
                <h2 className="mt-2 font-medium text-gray-700">
                  {product.title} | {product.color}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                    ★ {product.rating}
                  </span>
                </div>

                {/* Size Selection */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Select Size</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-white text-black hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add to Bag Button (Sticky at bottom inside panel) */}
              <div className="p-6 border-t border-[var(--light-color)] bg-white">
                <button
                  disabled={!selectedSize}
                  className={`w-full py-3 rounded text-white font-semibold transition ${
                    selectedSize
                      ? "bg-black hover:bg-gray-800"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-xl p-4 max-h-[90vh] overflow-y-auto z-50">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Add to Bag</h2>
          <button onClick={onClose} class="text-gray-600 text-xl">
            &times;
          </button>
        </div>

        <div class="flex gap-2 overflow-x-auto mb-4">
          <img
            src={kids1}
            class="rounded-lg w-20 h-28 object-cover"
          />
          <img
            src={kids2}
            class="rounded-lg w-20 h-28 object-cover"
          />
          <img
             src={kids3}
            class="rounded-lg w-20 h-28 object-cover"
          />
          <img
             src={kids4}
            class="rounded-lg w-20 h-28 object-cover"
          />
         
        </div>

        <div class="mb-2">
          <p class="text-lg font-semibold text-black">
            ₹1,559 <span class="text-green-600 text-sm">(35% OFF)</span>
          </p>
          <p class="text-sm text-gray-500 line-through">
            MRP: ₹2,399 <span class="no-underline">Inclusive of all taxes</span>
          </p>
          <p class="text-sm text-gray-700 mt-1">
            Casual Anti Fit Jeans | Green
          </p>
        </div>

        <div class="mt-2 mb-3">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-sm font-medium">
            ⭐ 4.0
          </span>
        </div>

        <div class="flex items-center justify-between mb-2">
          <p class="text-base font-medium">Select Size</p>
          <button class="text-pink-500 text-sm font-semibold">
            Size guide
          </button>
        </div>

        <div class="grid grid-cols-4 gap-2 mb-6">
          <button class="border border-gray-300 rounded-md py-2 font-medium">
            28
          </button>
          <button class="border border-gray-300 rounded-md py-2 font-medium">
            30
          </button>
          <button class="border border-gray-300 rounded-md py-2 font-medium">
            32
          </button>
          <button class="border border-gray-300 rounded-md py-2 font-medium">
            34
          </button>
          <button class="border border-gray-300 rounded-md py-2 font-medium col-span-2">
            36
          </button>
        </div>

        <button
          disabled
          class="w-full py-3 rounded-xl bg-[#F0F0F0] text-gray-400 font-semibold cursor-not-allowed"
        >
          Add to Bag
        </button>

        <div class="mt-4 text-center text-sm text-gray-500">
          <a href="#" class="underline">
            wroqn.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
