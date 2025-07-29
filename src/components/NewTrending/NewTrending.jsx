
import React from "react";
import CollabWeb from "../../assets/newTrending/CollabWeb.webp";
import CollabMobile from "../../assets/newTrending/CollabMobile.webp";
import { products } from "../../assets/newTrending/productsData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function NewTrending() {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden h-[500px] md:h-[640px] mt-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${CollabMobile})`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${CollabWeb})`,
          backgroundPosition: "top center",
        }}
      />

      {/* Overlay with content (unchanged, you can modify) */}
      <div className="relative z-10 h-full w-full bg-black/40 px-6 py-8 md:px-12 md:py-14 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center h-full gap-8">
          {/* Title & Button */}
          <div className="text-white md:w-[40%] text-center md:text-left">
            <button className="mt-4 px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition">
              SHOP ALL
            </button>
          </div>

          {/* Carousel */}
          <div className="w-full md:w-[50%] overflow-hidden relative md:mt-70">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1.5}
              spaceBetween={16}
              navigation={{
                nextEl: ".nextBtn",
                prevEl: ".prevBtn",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
         
            >
              {products.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  style={{ width: "160px" }}
                  className="!w-[200px]"
                >
                  <div className="bg-white rounded-xl shadow-sm relative" style={{ zIndex: 1 }}>
                    {item.label && (
                      <span className="absolute top-2 left-0 bg-[var(--batchColor-color)] text-white text-[10px] font-semibold px-2 py-1 rounded-tr-lg rounded-br-lg" style={{ zIndex: 2 }}>
                        {item.label}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    <div className="p-2">
                      <p className="text-[12px] font-medium truncate">{item.title}</p>
                      <p className="text-sm font-semibold">₹{item.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Arrows */}
            <button className="prevBtn absolute left-[-1px] top-3/5 -translate-y-1/1 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md" style={{ zIndex: 3 }}>
              <span className="text-black text-xl">←</span>
            </button>
            <button className="nextBtn absolute right-0 top-3/5 -translate-y-1/1 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md" style={{ zIndex: 3 }}>
              <span className="text-black text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTrending;