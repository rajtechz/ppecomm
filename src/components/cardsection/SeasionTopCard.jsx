import React, { useRef } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import seasion1 from "../../assets/seasionTopPicks/seasion1.webp";
import seasion2 from "../../assets/seasionTopPicks/seasion2.webp";
import seasion3 from "../../assets/seasionTopPicks/seasion3.webp";
import seasion4 from "../../assets/seasionTopPicks/seasion4.webp";
import seasion5 from "../../assets/seasionTopPicks/seasion5.webp";
import seasion6 from "../../assets/seasionTopPicks/seasion6.webp";
import seasion7 from "../../assets/seasionTopPicks/seasion7.webp";

const cards = [
  {
    label: "EXCLUSIVE",
    image: seasion1,
    price: "₹1,799",
    original: "₹2,999",
    discount: "40% OFF",
    title: "Solid Stretch Cotton Blend Shirt | Pink",
  },
  {
    label: "EXCLUSIVE",
    image: seasion2,
    price: "₹1,799",
    original: "₹2,999",
    discount: "40% OFF",
    title: "Solid Stretch Cotton Blend Shirt |Blue",
  },
  {
    label: "NEW",
    image: seasion3,
    price: "₹899",
    title: "Silver Foil Print Slim Fit T-Shirt | Rust",
  },
  {
    label: "NEW",
    image: seasion4,
    price: "₹899",
    title: "Silver Foil Print Slim Fit T-Shirt | Olive",
  },
  {
    image: seasion5,
    price: "₹1,499",
    original: "₹2,499",
    discount: "30% OFF",
    title: "Cotton Casual Shirt | Grey",
  },
  {
    image: seasion6,
    price: "₹1,299",
    title: "Graphic Print Tee | White",
  },
  {
    image: seasion7,
    price: "₹1,599",
    title: "Crew Neck T-Shirt | Black",
  },
];

function SeasionTopCard() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-3xl shadow-md mt-2">
      <h2 className="text-center text-xl font-bold mb-6">SEASON'S TOP PICKS</h2>

      {/* Scrollable row */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          <ArrowLeft size={16} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-10"
        >
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[220px] sm:min-w-[240px] max-w-[250px] bg-white rounded-lg  p-2 flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-md"
                />
                {item.label && (
                  <span
                    className="absolute top-2 left-0 text-white text-xs font-semibold px-2 py-1 rounded-tr-md rounded-br-md"
                    style={{ backgroundColor: "var(--batchColor-color)" }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold">
                  {item.price}{" "}
                  {item.original && (
                    <span className="line-through text-gray-400 text-xs ml-1">
                      {item.original}
                    </span>
                  )}
                  {item.discount && (
                    <span className="text-green-600 text-xs font-semibold ml-1">
                      ({item.discount})
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-700 mt-1">{item.title}</p>
                <button className="w-full cursor-pointer mt-3 border border-gray-400 text-black font-semibold py-2 rounded-md text-sm hover:bg-gray-100">
                  Add to Bag
                </button>
              </div>
            </div>
          ))}

          {/* View All Card */}
          <div className="min-w-[220px] cursor-pointer sm:min-w-[240px] max-w-[250px] flex flex-col items-center justify-center border border-gray-300 rounded-lg p-6 text-center hover:shadow-md transition">
            <img
              src="https://w7.pngwing.com/pngs/170/541/png-transparent-logo-symbol-brand-trademark-logo-angle-text-service-thumbnail.png"
              alt="logo"
              className="w-12 h-12 opacity-30 mb-4"
            />
            <p className="text-sm font-semibold">View All</p>
            <ArrowUpRight className="w-4 h-4 mt-1 text-pink-600 " />
            <span className="text-xs text-gray-500 mt-1">(377)</span>
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default SeasionTopCard;
