import React, { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Virat1 from "../../assets/cardImage/Virat1.webp";
import Virat2 from "../../assets/cardImage/Virat2.webp";
import Virat3 from "../../assets/cardImage/Virat3.webp";
import Virat4 from "../../assets/cardImage/Virat4.webp";
import Virat5 from "../../assets/cardImage/Virat5.webp";
import Virat6 from "../../assets/cardImage/Virat6.webp";
import Virat7 from "../../assets/cardImage/Virat7.webp";

const viratData = [
  {
    id: 1,
    image: Virat1,
    title: "Heavy GSM Printed Monster T-Shirt | Red",
    price: 895,
    originalPrice: 1399,
    discount: "36% OFF",
    thumbnail: Virat1,
  },
  {
    id: 2,
    image: Virat2,
    title: "AOP Fluid Light Weight Viscose Shirt | Multicolour",
    price: 1219,
    originalPrice: 1999,
    discount: "39% OFF",
    thumbnail: Virat2,
  },
  {
    id: 3,
    image: Virat3,
    title: "Classic Slim Fit Jeans In Black",
    price: 1689,
    originalPrice: 2599,
    discount: "35% OFF",
    thumbnail: Virat3,
  },
  {
    id: 4,
    image: Virat4,
    title: "Next Level Pure Cotton T-Shirt",
    price: 629,
    originalPrice: 899,
    discount: "30% OFF",
    thumbnail: Virat4,
  },
  {
    id: 5,
    image: Virat5,
    title: "Next Level Pure Cotton T-Shirt",
    price: 629,
    originalPrice: 899,
    discount: "30% OFF",
    thumbnail: Virat4,
  },
  {
    id: 6,
    image: Virat6,
    title: "Next Level Pure Cotton T-Shirt",
    price: 629,
    originalPrice: 899,
    discount: "30% OFF",
    thumbnail: Virat4,
  },
  {
    id: 7,
    image: Virat7,
    title: "Next Level Pure Cotton T-Shirt",
    price: 629,
    originalPrice: 899,
    discount: "30% OFF",
    thumbnail: Virat4,
  },
];

function Cards() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 1044; // Width for 4 cards (260px * 4 + 6px * 3 gaps)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        WEAR IT LIKE VIRAT
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden container mx-auto gap-6 scrollbar-hide"
      >
        <div className="flex flex-row gap-6" style={{ width: "1044px" }}>
          {viratData.map((item) => (
            <div
              key={item.id}
              className="p-2  min-w-[290px] max-w-[260px] bg-[#CAB2AE] rounded-xl shadow-md border  border-gray-400 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[360px] object-cover rounded-xl"
              />

              <div className="p-4 space-y-2 bg-white rounded-xl mt-2">
                <div className="flex items-center space-x-2 ">
                  <img
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="w-10 h-10 rounded-md object-cover cursor-pointer"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-bold text-black">₹{item.price}</span>
                  <span className="line-through text-gray-400">
                    ₹{item.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {item.discount}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mt-4">
                  <button className="flex-1 cursor-pointer h-10 border border-gray-400  font-semibold rounded-md flex items-center justify-between px-3 transition">
                    QUICK VIEW
                  </button>
                  <button className="h-10 aspect-square  cursor-pointer border border-gray-400 text-[#CB1048] rounded-md flex items-center justify-center transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
