import React from "react";
import Big from "../../assets/rightPlace/Big.webp";
import Big1 from "../../assets/rightPlace/Big1.webp";
import small1 from "../../assets/rightPlace/small1.webp";
import small2 from "../../assets/rightPlace/small2.webp";

function RightPlace() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 rounded-3xl mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8 py-10">
      
        <div className="md:col-span-3">
          <div className="lg:w-5/10 w-full text-center lg:text-left">
            <h2 className="text-lg lg:text-4xl font-semibold text-gray-700 mb-3 tracking-wider uppercase">
              KD STORE.
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
              RIGHT PLACE.
            </h1>
            <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
              Find how close you’re to going KD Style!
            </p>
            <button className="bg-gray-900 w-full text-white px-6 py-2.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors duration-200">
              See All Stores
            </button>
          </div>
        </div>

        <div className="md:col-span-3 border-2 rounded-xl">
          <div>
            <img
              src={Big}
              alt="Big Image"
              className="rounded-xl w-full h-72 lg:h-96 object-cover"
            />
          </div>
        </div>

       
        <div className="md:col-span-2 border-2 rounded-xl">
          <img
            src={Big1}
            alt="Big Image 2"
            className="rounded-xl w-full h-full lg:h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 border-2 rounded-xl">
          <img
            src={small2}
            alt="Small Image 2"
            className="rounded-xl w-full h-full lg:h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 border-2 rounded-xl">
          <img
            src={small1}
            alt="Small Image 1"
            className="rounded-xl w-full h-full lg:h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default RightPlace;
