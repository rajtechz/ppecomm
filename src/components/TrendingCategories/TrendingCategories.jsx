import React from "react";
import denims from "../../assets/TrendingCaregories/DENIMS.webp";
import OVERSIZED from "../../assets/TrendingCaregories/OVERSIZED.webp";
import POLO from "../../assets/TrendingCaregories/POLO.webp";
import SHOPFULL from "../../assets/TrendingCaregories/SHOP-FULL.webp";
import SHOPHALF from "../../assets/TrendingCaregories/SHOP-HALF.webp";
import NewTrending from "../NewTrending/NewTrending";

function TrendingCategories() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          TRENDING CATEGORIES
        </h2>

        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* First row (2 images spanning 3 columns each) */}
          <div className="relative rounded-lg overflow-hidden col-span-3 cursor-pointer">
            <img
              src={POLO}
              alt="POLOS"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden col-span-3 cursor-pointer">
            <img
              src={SHOPHALF}
              alt="HALF SLEEVE SHIRTS"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second row (3 equal images spanning 2 columns each) */}
          <div className="relative rounded-lg overflow-hidden col-span-2 cursor-pointer">
            <img
              src={SHOPFULL}
              alt="FULL SLEEVE SHIRTS"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden col-span-2 cursor-pointer">
            <img
              src={OVERSIZED}
              alt="OVERSIZED"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden col-span-2 cursor-pointer">
            <img
              src={denims}
              alt="DENIMS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <NewTrending />
      </div>
    </>
  );
}

export default TrendingCategories;
