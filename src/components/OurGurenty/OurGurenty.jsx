import React from 'react';
import bestseller from "../../assets/bestseller.png";
import cashback from "../../assets/cash-back.png";
import freedelivery from "../../assets/free-delivery.png";

function OurGurenty() {
  const items = [
    {
      image: freedelivery,
      title: "FREE SHIPPING",
      description: "Apply on order over $99.00",
      alt: "Free Shipping"
    },
    {
      image: cashback,
      title: "100% MONEY BACK",
      description: "30 days return policy",
      alt: "100% Money Back"
    },
    {
      image: bestseller,
      title: "SATISFIED",
      description: "98% customers are satisfied",
      alt: "Satisfied"
    },
  ];

  return (
    <div className="flex justify-around p-5 border-b border-gray-300 bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md rounded-lg p-4 cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-14 mx-auto transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default OurGurenty;
