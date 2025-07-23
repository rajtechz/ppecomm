import React from "react";
import bestSeller1 from "../assets/bestSellers/bestSeller1.webp";
import bestSeller2 from "../assets/bestSellers/bestSeller2.webp";
import bestSeller3 from "../assets/bestSellers/bestSeller3.webp";
import bestSeller4 from "../assets/bestSellers/bestSeller4.webp";

const bestSellers = [
  {
    image: bestSeller1,
    title: "CHECKED SHIRTS",
  },
  {
    image: bestSeller2,
    title: "PRINTED T-SHIRTS",
  },
  {
    image: bestSeller3,
    title: "CARGOS & JOGGERS",
  },
  {
    image: bestSeller4,
    title: "SLIM FIT JEANS",
  },
];

function BestSellers() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-8">
        BEST SELLERS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bestSellers.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
